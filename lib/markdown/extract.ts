import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import GithubSlugger from "github-slugger";
import type { Root, Blockquote, Heading as MdHeading, RootContent } from "mdast";
import { toString } from "mdast-util-to-string";
import { calloutTypeOf, stripCalloutMarker } from "./remark-plugins";
import type { Heading } from "../types";

const parser = unified().use(remarkParse).use(remarkGfm).use(remarkMath);

export function parseMd(md: string): Root {
  return parser.parse(md) as Root;
}

/** Headings with slugs matching rehype-slug's output (both use github-slugger). */
export function extractHeadings(md: string): Heading[] {
  const tree = parseMd(md);
  const slugger = new GithubSlugger();
  const out: Heading[] = [];
  for (const node of tree.children) {
    if (node.type === "heading") {
      const text = toString(node);
      out.push({ depth: node.depth, text, slug: slugger.slug(text) });
    }
  }
  return out;
}

export interface ExtractedFlashcard {
  question: string;
  answer: string;
}

/** Pull Q/A pairs out of `> [!flashcard]` blocks. */
export function extractFlashcards(md: string): ExtractedFlashcard[] {
  const tree = parseMd(md);
  const cards: ExtractedFlashcard[] = [];
  const walk = (nodes: RootContent[]) => {
    for (const node of nodes) {
      if (node.type === "blockquote") {
        const bq = node as Blockquote;
        if (calloutTypeOf(bq) === "flashcard") {
          stripCalloutMarker(bq);
          const text = toString(bq);
          const m = text.match(/Q:\s*([\s\S]*?)\s*A:\s*([\s\S]*)/);
          if (m) cards.push({ question: m[1].trim(), answer: m[2].trim() });
          continue;
        }
      }
      if ("children" in node) walk(node.children as RootContent[]);
    }
  };
  walk(tree.children);
  return cards;
}

/** Raw wiki-link targets (for backlinks). */
export function extractWikiTargets(md: string): string[] {
  const out = new Set<string>();
  const re = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) out.add(m[1].trim());
  return [...out];
}

export interface Section {
  slug: string; // "" for preamble before the first heading
  heading: string;
  text: string;
}

/** Split a note into heading-addressed sections of plain text (search granularity). */
export function extractSections(md: string): Section[] {
  const tree = parseMd(md);
  const slugger = new GithubSlugger();
  const sections: Section[] = [{ slug: "", heading: "", text: "" }];
  for (const node of tree.children) {
    if (node.type === "heading") {
      const text = toString(node as MdHeading);
      sections.push({ slug: slugger.slug(text), heading: text, text: "" });
    } else {
      sections[sections.length - 1].text += toString(node) + "\n";
    }
  }
  return sections.filter((s) => s.heading !== "" || s.text.trim() !== "");
}

export function plainText(md: string): string {
  return toString(parseMd(md));
}

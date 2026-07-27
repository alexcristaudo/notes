import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import type { Root, Blockquote, Paragraph, Text, PhrasingContent } from "mdast";

export const CALLOUT_TYPES = [
  "definition",
  "theorem",
  "example",
  "warning",
  "answer",
  "flashcard",
  "ai-explanation",
] as const;
export type CalloutType = (typeof CALLOUT_TYPES)[number];

const COLLAPSED: CalloutType[] = ["answer", "flashcard"];

const LABEL: Record<CalloutType, string> = {
  definition: "Definition",
  theorem: "Theorem",
  example: "Example",
  warning: "Warning",
  answer: "Answer — click to reveal",
  flashcard: "Flashcard",
  "ai-explanation": "AI explanation",
};

const MARKER = /^\[!([a-z-]+)\]\s*/;

/** Detect `> [!type]` blockquotes; returns the type or null. */
export function calloutTypeOf(node: Blockquote): CalloutType | null {
  const first = node.children[0];
  if (!first || first.type !== "paragraph") return null;
  const t = first.children[0];
  if (!t || t.type !== "text") return null;
  const m = t.value.match(MARKER);
  if (!m) return null;
  return (CALLOUT_TYPES as readonly string[]).includes(m[1]) ? (m[1] as CalloutType) : null;
}

/** Strip the `[!type]` marker from a callout blockquote's first paragraph (mutates). */
export function stripCalloutMarker(node: Blockquote): void {
  const first = node.children[0] as Paragraph;
  const t = first.children[0] as Text;
  t.value = t.value.replace(MARKER, "").replace(/^\n/, "");
  if (t.value === "") first.children.shift();
  if (first.children.length === 0) node.children.shift();
}

/**
 * Transform `> [!type]` blockquotes into styled callout containers.
 * Collapsible types render as <details><summary>.
 */
export function remarkCallouts() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const type = calloutTypeOf(node);
      if (!type) return;
      stripCalloutMarker(node);
      const collapsible = COLLAPSED.includes(type);
      node.data = {
        ...node.data,
        hName: collapsible ? "details" : "div",
        hProperties: { className: ["callout", `callout-${type}`] },
      };
      const title: Paragraph = {
        type: "paragraph",
        children: [{ type: "text", value: LABEL[type] }],
        data: {
          hName: collapsible ? "summary" : "p",
          hProperties: { className: ["callout-title"] },
        },
      };
      node.children.unshift(title);
    });
  };
}

const WIKI = /\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g;

/** Turn [[Target]], [[Target#heading]], [[Target|label]] into links to /wiki/<target>. */
export function remarkWikiLinks() {
  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      if (parent.type === "link") return;
      WIKI.lastIndex = 0;
      if (!WIKI.test(node.value)) return;
      WIKI.lastIndex = 0;

      const out: PhrasingContent[] = [];
      let last = 0;
      let m: RegExpExecArray | null;
      while ((m = WIKI.exec(node.value))) {
        if (m.index > last) out.push({ type: "text", value: node.value.slice(last, m.index) });
        const target = m[1].trim();
        const anchor = m[2]?.trim();
        const label = m[3]?.trim() ?? (anchor ? `${target} § ${anchor}` : target);
        out.push({
          type: "link",
          url: `/wiki?t=${encodeURIComponent(target)}${anchor ? `&anchor=${encodeURIComponent(anchor)}` : ""}`,
          children: [{ type: "text", value: label }],
          data: { hProperties: { className: ["wikilink"] } },
        });
        last = m.index + m[0].length;
      }
      if (last < node.value.length) out.push({ type: "text", value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
      return index + out.length;
    });
  };
}

export { toString as mdastToString };

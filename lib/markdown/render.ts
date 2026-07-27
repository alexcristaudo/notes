import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { remarkCallouts, remarkWikiLinks } from "./remark-plugins";

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkWikiLinks)
  .use(remarkCallouts)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeKatex)
  .use(rehypeHighlight, { detect: false })
  .use(rehypeStringify);

/** Render canonical markdown to sanitized-by-construction HTML (no raw HTML passthrough). */
export async function renderMarkdown(md: string): Promise<string> {
  const file = await processor.process(md);
  return String(file);
}

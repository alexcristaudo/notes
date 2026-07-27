"use client";

import { useEffect, useRef, useState } from "react";
import { renderMarkdown } from "@/lib/markdown/render";

let mermaidSeq = 0;

/** Renders canonical markdown: KaTeX, highlighting, callouts, wiki-links, mermaid. */
export function Markdown({ md, className }: { md: string; className?: string }) {
  const [html, setHtml] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    renderMarkdown(md).then((h) => {
      if (alive) setHtml(h);
    });
    return () => {
      alive = false;
    };
  }, [md]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const blocks = el.querySelectorAll<HTMLElement>("pre code.language-mermaid, pre code.hljs.language-mermaid");
    if (blocks.length === 0) return;
    let alive = true;
    import("mermaid").then(async ({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme: "dark", securityLevel: "strict" });
      for (const code of blocks) {
        const src = code.textContent ?? "";
        try {
          const { svg } = await mermaid.render(`mmd-${mermaidSeq++}`, src);
          if (!alive) return;
          const wrap = document.createElement("div");
          wrap.className = "my-4 flex justify-center overflow-x-auto";
          wrap.innerHTML = svg;
          code.closest("pre")?.replaceWith(wrap);
        } catch {
          // leave the fenced source visible on invalid diagrams
        }
      }
    });
    return () => {
      alive = false;
    };
  }, [html]);

  return <div ref={ref} className={`md ${className ?? ""}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

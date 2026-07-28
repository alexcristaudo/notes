/**
 * Client-side PDF → markdown text extraction (pdf.js). Best-effort by design:
 * reading order is usually right, math and multi-column layouts will need
 * manual cleanup — the point is to get searchable, editable text into the
 * note body with the original PDF still attached.
 */

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface TextItemLike {
  str: string;
  transform: number[];
  hasEOL?: boolean;
}

export async function extractPdfMarkdown(data: ArrayBuffer, sourceName: string): Promise<string> {
  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = `${BASE}/pdf.worker.min.mjs`;

  const doc = await pdfjs.getDocument({ data }).promise;
  const parts: string[] = [
    `> [!warning]\n> Auto-extracted from **${sourceName}** — layout, math, and symbols will need cleanup. The original PDF stays attached above.\n`,
  ];

  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const lines: string[] = [];
    let line = "";
    let lastY: number | null = null;

    for (const raw of content.items) {
      const item = raw as TextItemLike;
      if (typeof item.str !== "string") continue;
      const y = item.transform?.[5];
      const newLine = item.hasEOL || (lastY !== null && typeof y === "number" && Math.abs(y - lastY) > 3);
      if (newLine && line.trim()) {
        lines.push(line.trim());
        line = "";
      }
      line += (line && !line.endsWith(" ") && item.str && !item.str.startsWith(" ") ? " " : "") + item.str;
      if (typeof y === "number") lastY = y;
    }
    if (line.trim()) lines.push(line.trim());

    // Merge short fragments into paragraphs: blank line only after sentence-ending lines.
    const text = lines
      .map((l) => l.replace(/\s+/g, " "))
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");

    parts.push(`## Page ${p}\n\n${text}\n`);
    page.cleanup();
  }

  await doc.cleanup();
  return parts.join("\n");
}

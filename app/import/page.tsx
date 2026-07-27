"use client";

import { useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { importFile, type ImportResult } from "@/lib/import";

export default function ImportPage() {
  const courses = useLiveQuery(() => db.courses.toArray(), [], []);
  const [courseId, setCourseId] = useState("");
  const [results, setResults] = useState<ImportResult[]>([]);
  const [busy, setBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const target = courseId || courses[0]?.id || "";

  const run = async (files: FileList | File[]) => {
    if (!target || busy) return;
    setBusy(true);
    const out: ImportResult[] = [];
    for (const file of Array.from(files)) {
      try {
        out.push(await importFile(target, file));
      } catch (err) {
        out.push({ file: file.name, outcome: "skipped", detail: `failed: ${err instanceof Error ? err.message : String(err)}` });
      }
      setResults([...out]);
    }
    setBusy(false);
  };

  const badge = (o: ImportResult["outcome"]) =>
    o === "note" ? "!border-[#57d98a] !text-[#57d98a]"
      : o === "stub" ? "!border-[#4cc2ff] !text-[#4cc2ff]"
      : o === "asset" ? "!border-[#b691ff] !text-[#b691ff]"
      : "!border-[#ffb454] !text-[#ffb454]";

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-xl font-bold tracking-tight">Import</h1>
      <p className="mb-5 text-sm text-[var(--text-dim)]">
        Bring in what you already have. Markdown imports directly (frontmatter respected — our own export
        round-trips), <b>.docx</b> converts to markdown, <b>PDFs</b> become attached assets with a searchable stub
        note, images become course assets. Everything lands as <i>needs-review</i> — nothing is lost, everything is
        findable.
      </p>

      <div className="mb-4 flex items-center gap-2">
        <span className="label">Into course</span>
        <select className="input !w-auto" value={target} onChange={(e) => setCourseId(e.target.value)}>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.code} — {c.name}
            </option>
          ))}
        </select>
      </div>

      <div
        className={`card flex min-h-40 cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed p-8 text-center ${
          dragOver ? "!border-[#4c6ef5] bg-[var(--bg-hover)]" : "!border-[var(--border-strong)]"
        }`}
        onClick={() => fileInput.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          void run(e.dataTransfer.files);
        }}
      >
        <span className="text-3xl">📥</span>
        <p className="text-sm font-medium">{busy ? "Importing…" : "Drop files here, or click to choose"}</p>
        <p className="text-xs text-[var(--text-faint)]">.md · .docx · .pdf · .txt · images — type and week guessed from filenames</p>
        <input
          ref={fileInput}
          type="file"
          multiple
          className="hidden"
          accept=".md,.markdown,.txt,.docx,.pdf,image/*"
          onChange={(e) => e.target.files && run(e.target.files)}
        />
      </div>

      {results.length > 0 && (
        <section className="mt-6">
          <h2 className="label mb-2">Import report</h2>
          <ul className="space-y-1">
            {results.map((r, i) => (
              <li key={i} className="card flex items-center gap-3 px-3 py-2 text-sm">
                <span className={`chip w-16 justify-center ${badge(r.outcome)}`}>{r.outcome}</span>
                <span className="min-w-0 flex-1 truncate font-medium">{r.file}</span>
                <span className="truncate text-xs text-[var(--text-faint)]">{r.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

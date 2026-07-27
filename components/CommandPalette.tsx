"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { search, snippet, type SearchHit } from "@/lib/search";
import { NOTE_TYPE_LABEL } from "@/lib/types";

/** ⌘K palette: full-text + heading-level search with course filter. */
export function CommandPalette({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [sel, setSel] = useState(0);
  const [courseFilter, setCourseFilter] = useState<string>("");
  const [sectionsOnly, setSectionsOnly] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const courses = useLiveQuery(() => db.courses.toArray(), [], []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let alive = true;
    const t = setTimeout(async () => {
      const results = await search(query, {
        courseId: courseFilter || undefined,
        kind: sectionsOnly ? "section" : undefined,
      });
      if (alive) {
        setHits(results.slice(0, 20));
        setSel(0);
      }
    }, 120);
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [query, courseFilter, sectionsOnly]);

  const open = (hit: SearchHit) => {
    onClose();
    router.push(`/notes/${hit.noteId}${hit.anchor ? `#${hit.anchor}` : ""}`);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, hits.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    }
    if (e.key === "Enter" && hits[sel]) open(hits[sel]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[12vh]" onMouseDown={onClose}>
      <div className="card w-full max-w-2xl overflow-hidden shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="w-full border-b border-[var(--border)] bg-transparent px-5 py-4 text-base outline-none placeholder:text-[var(--text-faint)]"
          placeholder='Search notes and sections… try "chain rule"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKey}
        />
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2">
          <select className="input !w-auto !py-1 text-xs" value={courseFilter} onChange={(e) => setCourseFilter(e.target.value)}>
            <option value="">All courses</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code}
              </option>
            ))}
          </select>
          <button
            className={`chip cursor-pointer ${sectionsOnly ? "!border-[#4c6ef5] !text-[var(--link)]" : ""}`}
            onClick={() => setSectionsOnly((v) => !v)}
            title="Answer “where is X covered?” — match section headings only"
          >
            § Sections only
          </button>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {query.trim() === "" && (
            <p className="px-3 py-6 text-center text-sm text-[var(--text-faint)]">
              Type to search every note, heading, and tag across all courses.
            </p>
          )}
          {query.trim() !== "" && hits.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-[var(--text-faint)]">No matches.</p>
          )}
          {hits.map((hit, i) => (
            <button
              key={hit.id}
              className={`block w-full rounded-lg px-3 py-2 text-left ${i === sel ? "bg-[var(--bg-hover)]" : "hover:bg-[var(--bg-hover)]"}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => open(hit)}
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="chip">{hit.courseCode}</span>
                <span className="chip">{NOTE_TYPE_LABEL[hit.type]}{hit.week ? ` · W${hit.week}` : ""}</span>
                <span className="truncate font-medium">
                  {hit.kind === "section" ? (
                    <>
                      <span className="text-[var(--text-dim)]">{hit.noteTitle} › </span>
                      <span className="text-[var(--link)]">§ {hit.title}</span>
                    </>
                  ) : (
                    hit.title
                  )}
                </span>
              </div>
              <div className="mt-0.5 truncate text-xs text-[var(--text-faint)]">{snippet(hit, query)}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

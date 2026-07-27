"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { NOTE_TYPES, NOTE_TYPE_LABEL, type Note, type NoteType } from "@/lib/types";
import { NewNoteDialog } from "@/components/dialogs";
import { extractHeadings } from "@/lib/markdown/extract";
import { courseHealth, type Issue } from "@/lib/validate";
import { getRepoAssets } from "@/lib/repoSync";
import { useEffect } from "react";

const GRID_TYPES: NoteType[] = ["lecture", "tutorial", "test"];

export default function CoursePage() {
  return (
    <Suspense fallback={null}>
      <CourseInner />
    </Suspense>
  );
}

function CourseInner() {
  const id = useSearchParams().get("id") ?? "";
  const course = useLiveQuery(() => db.courses.get(id), [id]);
  const notes = useLiveQuery(() => db.notes.where("courseId").equals(id).toArray(), [id], []);
  const [tab, setTab] = useState<NoteType | "all" | "outline" | "health">("all");
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    courseHealth(id).then(setIssues);
  }, [id, notes]);
  const [newNote, setNewNote] = useState(false);
  const courses = useLiveQuery(() => db.courses.toArray(), [], []);

  if (!course) return null;

  const weeks = Array.from({ length: course.weeks }, (_, i) => i + 1);
  const cell = (week: number, type: NoteType) => notes.filter((n) => n.week === week && n.type === type);
  const shown = tab === "all" ? notes : notes.filter((n) => n.type === tab);
  const sorted = [...shown].sort((a, b) => (a.week ?? 99) - (b.week ?? 99) || a.title.localeCompare(b.title));

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl text-xl text-white" style={{ background: course.color }}>
            {course.icon}
          </span>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              {course.code} <span className="font-normal text-[var(--text-dim)]">· {course.name}</span>
            </h1>
            <p className="text-xs text-[var(--text-faint)]">
              {course.term} · {course.weeks} weeks{course.examDate ? ` · exam ${course.examDate}` : ""}
            </p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setNewNote(true)}>
          + New note
        </button>
      </div>

      {/* Week × type coverage grid — gaps visible at a glance */}
      <div className="card overflow-x-auto p-4">
        <table className="w-full border-separate border-spacing-1 text-center text-xs">
          <thead>
            <tr>
              <th className="w-16 text-left text-[var(--text-faint)]">Week</th>
              {weeks.map((w) => (
                <th key={w} className="min-w-7 font-medium text-[var(--text-faint)]">{w}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GRID_TYPES.map((t) => (
              <tr key={t}>
                <td className="text-left text-[var(--text-dim)]">{NOTE_TYPE_LABEL[t]}s</td>
                {weeks.map((w) => {
                  const ns = cell(w, t);
                  const first = ns[0];
                  return (
                    <td key={w}>
                      {first ? (
                        <Link
                          href={`/note?id=${first.id}`}
                          title={ns.map((n) => n.title).join(", ")}
                          className="block h-6 rounded"
                          style={{ background: course.color, opacity: ns.length > 1 ? 1 : 0.75 }}
                        />
                      ) : (
                        <div className="h-6 rounded bg-[var(--bg-hover)]" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabs */}
      <div className="mt-5 flex flex-wrap gap-1 border-b border-[var(--border)] pb-2">
        {(["all", ...NOTE_TYPES, "outline", "health"] as const).map((t) => (
          <button
            key={t}
            className={`btn btn-sm ${tab === t ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setTab(t)}
          >
            {t === "all"
              ? `All (${notes.length})`
              : t === "outline"
                ? "Course outline"
                : t === "health"
                  ? `Health${issues.length > 0 ? ` (${issues.length})` : " ✓"}`
                  : `${NOTE_TYPE_LABEL[t]}s (${notes.filter((n) => n.type === t).length})`}
          </button>
        ))}
      </div>

      {tab === "health" ? (
        <HealthPanel issues={issues} />
      ) : tab !== "outline" ? (
        <ul className="mt-3 space-y-1.5">
          {sorted.map((n) => (
            <li key={n.id}>
              <Link href={`/note?id=${n.id}`} className="card card-hover flex items-center gap-3 px-4 py-2.5">
                <span className="chip w-20 justify-center">{NOTE_TYPE_LABEL[n.type]}</span>
                <span className="w-10 text-xs text-[var(--text-faint)]">{n.week ? `W${n.week}` : ""}</span>
                <span className="flex-1 truncate text-sm font-medium">{n.title}</span>
                {n.status !== "complete" && (
                  <span className={`chip ${n.status === "needs-review" ? "!border-[#ffb454] !text-[#ffb454]" : ""}`}>{n.status}</span>
                )}
              </Link>
            </li>
          ))}
          {sorted.length === 0 && <p className="p-4 text-sm text-[var(--text-faint)]">Nothing here yet.</p>}
        </ul>
      ) : (
        <CourseOutline notes={notes} />
      )}

      {getRepoAssets(course.id).length > 0 && (
        <section className="mt-6">
          <h2 className="label mb-2">Files in the repo</h2>
          <div className="flex flex-wrap gap-2">
            {getRepoAssets(course.id).map((a) => (
              <a key={a.url} href={a.url} target="_blank" rel="noreferrer" className="chip hover:!border-[var(--link)]">
                📎 {a.name}
              </a>
            ))}
          </div>
        </section>
      )}

      {newNote && <NewNoteDialog courses={courses} defaultCourseId={course.id} onClose={() => setNewNote(false)} />}
    </div>
  );
}

/** Everything silently degrading the course: broken links, gaps, cards that never parsed. */
function HealthPanel({ issues }: { issues: Issue[] }) {
  if (issues.length === 0) {
    return (
      <p className="card mt-3 p-6 text-center text-sm text-[var(--text-dim)]">
        ✓ No issues — links resolve, flashcards parse, and the coverage grid is honest.
      </p>
    );
  }
  return (
    <ul className="mt-3 space-y-1.5">
      {issues.map((issue, i) => (
        <li key={i} className="card flex items-center gap-3 px-4 py-2.5 text-sm">
          <span
            className={`chip w-16 justify-center ${issue.severity === "warn" ? "!border-[#ffb454] !text-[#ffb454]" : ""}`}
          >
            {issue.severity}
          </span>
          <span className="min-w-0 flex-1">{issue.message}</span>
          {issue.noteId && (
            <Link href={`/note?id=${issue.noteId}`} className="text-xs text-[var(--link)] hover:underline">
              open →
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

/** The syllabus as actually written: every heading of every note, grouped by week. */
function CourseOutline({ notes }: { notes: Note[] }) {
  const sorted = [...notes].sort((a, b) => (a.week ?? 99) - (b.week ?? 99));
  return (
    <div className="mt-3 space-y-3">
      {sorted.map((n) => {
        const headings = extractHeadings(n.body);
        return (
          <div key={n.id} className="card p-3">
            <Link href={`/note?id=${n.id}`} className="text-sm font-semibold hover:text-[var(--link)]">
              {n.week ? `Week ${n.week} · ` : ""}
              {n.title}
              <span className="ml-2 text-xs font-normal text-[var(--text-faint)]">{n.type}</span>
            </Link>
            <ul className="mt-1 space-y-0.5">
              {headings.map((h) => (
                <li key={h.slug} style={{ paddingLeft: `${(h.depth - 1) * 0.9}rem` }}>
                  <Link
                    href={`/note?id=${n.id}#${h.slug}`}
                    className="text-xs text-[var(--text-dim)] hover:text-[var(--link)]"
                  >
                    § {h.text}
                  </Link>
                </li>
              ))}
              {headings.length === 0 && <li className="text-xs text-[var(--text-faint)]">no headings</li>}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

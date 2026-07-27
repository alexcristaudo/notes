"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { getDueCards } from "@/lib/study";
import { NOTE_TYPE_LABEL, type Course, type Note } from "@/lib/types";

function daysUntil(iso: string): number {
  return Math.ceil((new Date(iso + "T00:00:00").getTime() - Date.now()) / 86400000);
}

function CourseCard({ course, notes }: { course: Course; notes: Note[] }) {
  const byType = notes.reduce<Record<string, number>>((acc, n) => {
    acc[n.type] = (acc[n.type] ?? 0) + 1;
    return acc;
  }, {});
  const weeksCovered = new Set(notes.filter((n) => n.week).map((n) => n.week)).size;
  const coverage = course.weeks ? Math.min(1, weeksCovered / course.weeks) : 0;
  const exam = course.examDate ? daysUntil(course.examDate) : undefined;

  return (
    <Link href={`/courses/${course.id}`} className="card card-hover block p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg text-lg text-white" style={{ background: course.color }}>
            {course.icon}
          </span>
          <div>
            <div className="text-sm font-bold">{course.code}</div>
            <div className="max-w-[15rem] truncate text-xs text-[var(--text-dim)]">{course.name}</div>
          </div>
        </div>
        {exam !== undefined && exam >= 0 && (
          <span className={`chip ${exam <= 14 ? "!border-[#ffb454] !text-[#ffb454]" : ""}`}>
            {exam === 0 ? "Exam today" : `Exam in ${exam}d`}
          </span>
        )}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--bg-hover)]">
        <div className="h-full rounded-full" style={{ width: `${coverage * 100}%`, background: course.color }} />
      </div>
      <div className="mt-1 flex items-center justify-between text-[0.7rem] text-[var(--text-faint)]">
        <span>
          {weeksCovered}/{course.weeks} weeks covered
        </span>
        <span>
          {Object.entries(byType)
            .map(([t, n]) => `${n} ${NOTE_TYPE_LABEL[t as Note["type"]].toLowerCase()}${n === 1 ? "" : "s"}`)
            .join(" · ") || "no notes yet"}
        </span>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const courses = useLiveQuery(() => db.courses.where("status").equals("active").toArray(), [], []);
  const notes = useLiveQuery(() => db.notes.toArray(), [], []);
  const queue = useLiveQuery(
    () => db.queue.where("done").equals(0).sortBy("order").then((q) => q.slice(0, 5)),
    [],
    [],
  );
  const recent = useLiveQuery(() => db.notes.orderBy("updatedAt").reverse().limit(5).toArray(), [], []);
  const [due, setDue] = useState(0);

  useEffect(() => {
    getDueCards().then((d) => setDue(d.length));
  }, [notes.length]);

  const notesByCourse = new Map<string, Note[]>();
  for (const n of notes) {
    const arr = notesByCourse.get(n.courseId) ?? [];
    arr.push(n);
    notesByCourse.set(n.courseId, arr);
  }
  const noteTitle = (id: string) => notes.find((n) => n.id === id)?.title ?? "…";

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm text-[var(--text-dim)]">What&apos;s my situation?</p>
        </div>
        {due > 0 && (
          <Link href="/review" className="btn btn-primary">
            Review {due} due card{due === 1 ? "" : "s"}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} notes={notesByCourse.get(c.id) ?? []} />
        ))}
      </div>
      {courses.length === 0 && (
        <p className="card p-6 text-center text-sm text-[var(--text-dim)]">
          No courses yet — create one from the sidebar.
        </p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="card p-4">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-bold">Study queue</h2>
            <Link href="/study" className="text-xs text-[var(--link)] hover:underline">
              open queue →
            </Link>
          </div>
          {queue.length === 0 && <p className="text-sm text-[var(--text-faint)]">Empty. Add notes or sections from any page.</p>}
          <ul className="space-y-1">
            {queue.map((q) => (
              <li key={q.id}>
                <Link
                  href={`/notes/${q.noteId}${q.anchor ? `#${q.anchor}` : ""}`}
                  className="block truncate rounded-md px-2 py-1 text-sm text-[var(--text-dim)] hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
                >
                  {q.priority === 1 && "★ "}
                  {noteTitle(q.noteId)}
                  {q.anchorText && <span className="text-[var(--link)]"> § {q.anchorText}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-4">
          <h2 className="mb-2 text-sm font-bold">Recently edited</h2>
          <ul className="space-y-1">
            {recent.map((n) => (
              <li key={n.id}>
                <Link
                  href={`/notes/${n.id}`}
                  className="block truncate rounded-md px-2 py-1 text-sm text-[var(--text-dim)] hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
                >
                  {n.title}
                  <span className="text-[var(--text-faint)]"> · {NOTE_TYPE_LABEL[n.type].toLowerCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

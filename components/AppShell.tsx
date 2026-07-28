"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { getDueCards } from "@/lib/study";
import { exportAll, downloadBlob } from "@/lib/export";
import { syncFromRepo } from "@/lib/repoSync";
import { CommandPalette } from "./CommandPalette";
import { NewCourseDialog, NewNoteDialog } from "./dialogs";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [newCourse, setNewCourse] = useState(false);
  const [newNote, setNewNote] = useState(false);
  const [dueCount, setDueCount] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
    // Pull the repo's courses/ content (baked into content.json) into IndexedDB.
    void syncFromRepo().then(() => getDueCards().then((d) => setDueCount(d.length)));
  }, []);

  const cycleTheme = () => {
    const next = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
    if (next === "system") {
      localStorage.removeItem("theme");
      delete document.documentElement.dataset.theme;
    } else {
      localStorage.setItem("theme", next);
      document.documentElement.dataset.theme = next;
    }
  };

  // All courses, newest term first — completed years stay reachable.
  const courses = useLiveQuery(
    () => db.courses.toArray().then((cs) => cs.sort((a, b) => b.term.localeCompare(a.term) || a.code.localeCompare(b.code))),
    [],
    [],
  );
  const queueCount = useLiveQuery(() => db.queue.where("done").equals(0).count(), [], 0);
  const noteCount = useLiveQuery(() => db.notes.count(), [], 0);

  useEffect(() => {
    getDueCards().then((d) => setDueCount(d.length));
  }, [pathname, noteCount]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const doExport = async () => {
    setExporting(true);
    try {
      downloadBlob(await exportAll(), `notes-export-${new Date().toISOString().slice(0, 10)}.zip`);
    } finally {
      setExporting(false);
    }
  };

  const navItem = (href: string, label: string, badge?: number) => (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm ${
        pathname === href ? "bg-[var(--bg-hover)] font-semibold" : "text-[var(--text-dim)] hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
      }`}
    >
      <span>{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className="rounded-full bg-[#4c6ef5] px-1.5 text-[0.68rem] font-bold text-white">{badge}</span>
      )}
    </Link>
  );

  return (
    <div className="flex min-h-screen">
      <aside className="fixed inset-y-0 left-0 flex w-56 flex-col border-r border-[var(--border)] bg-[var(--bg-raised)] p-3">
        <Link href="/" className="mb-3 flex items-center gap-2 px-2 pt-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4c6ef5] text-sm font-bold text-white">N</span>
          <span className="text-sm font-bold tracking-tight">Notes</span>
        </Link>

        <button
          className="btn mb-3 w-full justify-between text-[var(--text-dim)]"
          onClick={() => setPaletteOpen(true)}
        >
          <span>Search…</span>
          <kbd className="rounded border border-[var(--border-strong)] px-1 text-[0.65rem]">⌘K</kbd>
        </button>

        <nav className="space-y-0.5">
          {navItem("/", "Dashboard")}
          {navItem("/study", "Study queue", queueCount)}
          {navItem("/review", "Review cards", dueCount)}
          {navItem("/import", "Import")}
        </nav>

        <div className="mt-4 flex items-center justify-between px-2">
          <span className="label">Courses</span>
          <button className="btn btn-ghost btn-sm" onClick={() => setNewCourse(true)} title="New course">
            +
          </button>
        </div>
        <nav className="mt-1 flex-1 space-y-0.5 overflow-y-auto">
          {(courses ?? []).map((c) => (
            <Link
              key={c.id}
              href={`/course?id=${c.id}`}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ${
                pathname === "/course" ? "bg-[var(--bg-hover)] font-semibold" : "text-[var(--text-dim)] hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
              }`}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[0.7rem] text-white" style={{ background: c.color }}>
                {c.icon}
              </span>
              <span className="truncate">{c.code}</span>
            </Link>
          ))}
        </nav>

        <div className="space-y-1 border-t border-[var(--border)] pt-3">
          <button className="btn w-full justify-center" onClick={() => setNewNote(true)}>
            + New note
          </button>
          <button className="btn btn-ghost w-full justify-center text-xs" onClick={doExport} disabled={exporting}>
            {exporting ? "Exporting…" : "Export all (markdown zip)"}
          </button>
          <button className="btn btn-ghost w-full justify-center text-xs" onClick={cycleTheme} title="Cycle theme">
            {theme === "system" ? "◐ Theme: system" : theme === "light" ? "☀ Theme: light" : "☾ Theme: dark"}
          </button>
        </div>
      </aside>

      <main className="ml-56 flex-1 px-8 py-6">{children}</main>

      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
      {newCourse && <NewCourseDialog onClose={() => setNewCourse(false)} />}
      {newNote && (courses?.length ?? 0) > 0 && (
        <NewNoteDialog courses={courses ?? []} onClose={() => setNewNote(false)} />
      )}
      {newNote && (courses?.length ?? 0) === 0 && <NewCourseDialog onClose={() => setNewNote(false)} />}
    </div>
  );
}

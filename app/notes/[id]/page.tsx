"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db, uid } from "@/lib/db";
import { saveNoteBody, updateNoteMeta, deleteNote, backlinksTo } from "@/lib/notes";
import { addToQueue } from "@/lib/study";
import { extractHeadings } from "@/lib/markdown/extract";
import { Markdown } from "@/components/Markdown";
import { NOTE_TYPE_LABEL, type Note, type NoteStatus } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function NotePage() {
  const { id } = useParams<{ id: string }>();
  const params = useSearchParams();
  const router = useRouter();
  const note = useLiveQuery(() => db.notes.get(id), [id]);
  const course = useLiveQuery(() => (note ? db.courses.get(note.courseId) : undefined), [note?.courseId]);
  const assets = useLiveQuery(() => db.assets.where("noteId").equals(id).toArray(), [id], []);
  const [editing, setEditing] = useState(params.get("edit") === "1");
  const [draft, setDraft] = useState<string | null>(null);
  const [backlinks, setBacklinks] = useState<Note[]>([]);
  const [toast, setToast] = useState("");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const body = draft ?? note?.body ?? "";
  const headings = useMemo(() => (note ? extractHeadings(body) : []), [note, body]);

  useEffect(() => {
    if (note) backlinksTo(note).then(setBacklinks);
  }, [note?.id, note?.updatedAt]); // eslint-disable-line react-hooks/exhaustive-deps

  const flash = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1800);
  };

  const scheduleSave = useCallback(
    (value: string) => {
      setDraft(value);
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        void saveNoteBody(id, value);
      }, 600);
    },
    [id],
  );

  useEffect(() => () => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
  }, []);

  const attach = async (file: File) => {
    if (!note) return;
    await db.assets.add({
      id: uid(),
      courseId: note.courseId,
      noteId: note.id,
      name: file.name,
      mime: file.type || "application/octet-stream",
      blob: file,
      createdAt: Date.now(),
    });
    flash(`Attached ${file.name}`);
  };

  if (!note || !course) return null;

  return (
    <div className="mx-auto flex max-w-6xl gap-8">
      <article className="min-w-0 flex-1">
        {/* Header */}
        <div className="mb-1 flex items-center gap-2 text-xs text-[var(--text-faint)]">
          <Link href={`/courses/${course.id}`} className="hover:text-[#7aa2ff]">
            {course.code}
          </Link>
          <span>›</span>
          <span>{NOTE_TYPE_LABEL[note.type]}{note.week ? ` · Week ${note.week}` : ""}</span>
        </div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <h1 className="text-2xl font-bold tracking-tight">{note.title}</h1>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              className="btn btn-sm"
              onClick={async () => {
                await addToQueue(note.id);
                flash("Added to study queue");
              }}
            >
              + Queue
            </button>
            <button className={`btn btn-sm ${editing ? "btn-primary" : ""}`} onClick={() => setEditing((v) => !v)}>
              {editing ? "Done" : "Edit"}
            </button>
          </div>
        </div>

        {/* Meta bar */}
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
          <select
            className="input !w-auto !py-1"
            value={note.status}
            onChange={(e) => updateNoteMeta(note.id, { status: e.target.value as NoteStatus })}
          >
            <option value="draft">draft</option>
            <option value="complete">complete</option>
            <option value="needs-review">needs-review</option>
          </select>
          <select
            className="input !w-auto !py-1"
            value={note.difficulty ?? ""}
            onChange={(e) => updateNoteMeta(note.id, { difficulty: e.target.value ? Number(e.target.value) : undefined })}
            title="Self-rated difficulty"
          >
            <option value="">difficulty —</option>
            {[1, 2, 3, 4, 5].map((d) => (
              <option key={d} value={d}>
                difficulty {d}
              </option>
            ))}
          </select>
          <label className="btn btn-sm cursor-pointer">
            Attach file
            <input
              type="file"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && attach(e.target.files[0])}
            />
          </label>
          {note.tags.length > 0 && note.tags.map((t) => <span key={t} className="chip">#{t}</span>)}
          <span className="flex-1" />
          <button
            className="btn btn-ghost btn-sm !text-[#ff8fa3]"
            onClick={async () => {
              if (confirm(`Delete "${note.title}"? Its flashcards keep their history but stop appearing.`)) {
                await deleteNote(note.id);
                router.push(`/courses/${course.id}`);
              }
            }}
          >
            Delete
          </button>
        </div>

        {/* Attached assets */}
        {assets.length > 0 && (
          <div className="mb-4 space-y-2">
            {assets.map((a) => (
              <AssetRow key={a.id} name={a.name} mime={a.mime} blob={a.blob} />
            ))}
          </div>
        )}

        {/* Body */}
        {editing ? (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div>
              <EditorToolbar
                onInsert={(snippet) => scheduleSave(body + (body.endsWith("\n") || body === "" ? "" : "\n") + snippet)}
              />
              <textarea
                className="input editor-textarea min-h-[60vh] w-full"
                value={body}
                onChange={(e) => scheduleSave(e.target.value)}
                spellCheck={false}
              />
              <p className="mt-1 text-[0.7rem] text-[var(--text-faint)]">
                Markdown · $math$ · {"> [!answer]"} collapsed blocks · {"> [!flashcard]"} Q:/A: becomes a review card · [[wiki-links]]
              </p>
            </div>
            <div className="hidden max-h-[70vh] overflow-y-auto rounded-xl border border-[var(--border)] p-4 xl:block">
              <Markdown md={body} />
            </div>
          </div>
        ) : (
          <Markdown md={body} />
        )}

        {/* Backlinks */}
        {backlinks.length > 0 && (
          <section className="mt-8 border-t border-[var(--border)] pt-4">
            <h2 className="label mb-2">Linked from</h2>
            <ul className="space-y-1">
              {backlinks.map((b) => (
                <li key={b.id}>
                  <Link href={`/notes/${b.id}`} className="text-sm text-[#7aa2ff] hover:underline">
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {/* Outline sidebar with per-section queue buttons */}
      {headings.length > 0 && !editing && (
        <aside className="sticky top-6 hidden w-56 shrink-0 self-start lg:block">
          <h2 className="label mb-2">On this page</h2>
          <ul className="space-y-1 border-l border-[var(--border)]">
            {headings.map((h) => (
              <li key={h.slug} className="group flex items-center" style={{ paddingLeft: `${(h.depth - 1) * 0.7}rem` }}>
                <a
                  href={`#${h.slug}`}
                  className="block flex-1 truncate border-l-2 border-transparent py-0.5 pl-2 text-xs text-[var(--text-dim)] hover:text-[var(--text)]"
                >
                  {h.text}
                </a>
                <button
                  className="hidden pr-1 text-xs text-[var(--text-faint)] hover:text-[#7aa2ff] group-hover:block"
                  title="Add this section to the study queue"
                  onClick={async () => {
                    await addToQueue(note.id, h.slug, h.text);
                    flash(`Queued § ${h.text}`);
                  }}
                >
                  +q
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#4c6ef5] px-4 py-2 text-sm font-medium text-white shadow-xl">
          {toast}
        </div>
      )}
    </div>
  );
}

function EditorToolbar({ onInsert }: { onInsert: (snippet: string) => void }) {
  const items: [string, string][] = [
    ["H2", "\n## Heading\n"],
    ["Math", "\n$$\n\\int_a^b f(x)\\,dx\n$$\n"],
    ["Definition", "\n> [!definition]\n> ...\n"],
    ["Answer", "\n> [!answer]\n> ...\n"],
    ["Flashcard", "\n> [!flashcard]\n> Q: ...\n> A: ...\n"],
    ["Link", " [[Note title]] "],
    ["Diagram", "\n```mermaid\nflowchart LR\n  A --> B\n```\n"],
  ];
  return (
    <div className="mb-2 flex flex-wrap gap-1">
      {items.map(([label, snippet]) => (
        <button key={label} className="btn btn-ghost btn-sm" onClick={() => onInsert(snippet)}>
          {label}
        </button>
      ))}
    </div>
  );
}

function AssetRow({ name, mime, blob }: { name: string; mime: string; blob: Blob }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const u = URL.createObjectURL(blob);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [blob]);
  const isPdf = mime === "application/pdf" || name.toLowerCase().endsWith(".pdf");
  const isImage = mime.startsWith("image/");
  return (
    <div className="card p-2">
      <div className="flex items-center gap-2 px-1 text-sm">
        <span>{isPdf ? "📄" : isImage ? "🖼" : "📎"}</span>
        <span className="flex-1 truncate">{name}</span>
        {(isPdf || isImage) && (
          <button className="btn btn-ghost btn-sm" onClick={() => setOpen((v) => !v)}>
            {open ? "Hide" : "View inline"}
          </button>
        )}
        {url && (
          <a className="btn btn-ghost btn-sm" href={url} target="_blank" rel="noreferrer">
            Open ↗
          </a>
        )}
      </div>
      {open && url && isPdf && <iframe src={url} className="mt-2 h-[70vh] w-full rounded-lg" title={name} />}
      {open && url && isImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={name} className="mt-2 max-h-[60vh] rounded-lg" />
      )}
    </div>
  );
}

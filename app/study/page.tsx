"use client";

import Link from "next/link";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { moveQueueItem } from "@/lib/study";
import { Markdown } from "@/components/Markdown";
import type { Note, QueueItem } from "@/lib/types";

export default function StudyQueuePage() {
  const items = useLiveQuery(() => db.queue.where("done").equals(0).sortBy("order"), [], []);
  const doneItems = useLiveQuery(
    () => db.queue.where("done").equals(1).reverse().sortBy("addedAt").then((d) => d.slice(0, 8)),
    [],
    [],
  );
  const notes = useLiveQuery(() => db.notes.toArray(), [], []);
  const [focus, setFocus] = useState(false);

  const noteById = new Map(notes.map((n) => [n.id, n]));

  if (focus && items.length > 0) {
    const item = items[0];
    const note = noteById.get(item.noteId);
    return <FocusMode item={item} note={note} remaining={items.length} onExit={() => setFocus(false)} />;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Study queue</h1>
          <p className="text-sm text-[var(--text-dim)]">Notes and sections you&apos;ve set aside for free-time study.</p>
        </div>
        {items.length > 0 && (
          <button className="btn btn-primary" onClick={() => setFocus(true)}>
            ▶ Focus mode
          </button>
        )}
      </div>

      {items.length === 0 && (
        <p className="card p-6 text-center text-sm text-[var(--text-dim)]">
          Queue is empty. Use <b>+ Queue</b> on any note, or <b>+q</b> next to any section heading.
        </p>
      )}

      <ul className="space-y-1.5">
        {items.map((q, i) => {
          const note = noteById.get(q.noteId);
          return (
            <li key={q.id} className="card flex items-center gap-2 px-3 py-2">
              <button
                className={`btn btn-ghost btn-sm ${q.priority === 1 ? "!text-[#ffb454]" : ""}`}
                title="Star"
                onClick={() => db.queue.update(q.id, { priority: q.priority === 1 ? 0 : 1 })}
              >
                ★
              </button>
              <Link href={`/notes/${q.noteId}${q.anchor ? `#${q.anchor}` : ""}`} className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium hover:text-[var(--link)]">
                  {note?.title ?? "(deleted note)"}
                  {q.anchorText && <span className="text-[var(--link)]"> § {q.anchorText}</span>}
                </span>
              </Link>
              <div className="flex items-center gap-0.5">
                <button className="btn btn-ghost btn-sm" disabled={i === 0} onClick={() => moveQueueItem(q.id, -1)} title="Move up">
                  ↑
                </button>
                <button className="btn btn-ghost btn-sm" disabled={i === items.length - 1} onClick={() => moveQueueItem(q.id, 1)} title="Move down">
                  ↓
                </button>
                <button className="btn btn-sm" onClick={() => db.queue.update(q.id, { done: 1 })}>
                  Done
                </button>
                <button className="btn btn-ghost btn-sm" onClick={() => db.queue.delete(q.id)} title="Remove">
                  ✕
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {doneItems.length > 0 && (
        <section className="mt-8">
          <h2 className="label mb-2">Recently completed</h2>
          <ul className="space-y-1">
            {doneItems.map((q) => (
              <li key={q.id} className="flex items-center gap-2 px-2 text-sm text-[var(--text-faint)]">
                <span>✓</span>
                <span className="truncate">
                  {noteById.get(q.noteId)?.title ?? "(deleted)"}
                  {q.anchorText ? ` § ${q.anchorText}` : ""}
                </span>
                <button className="btn btn-ghost btn-sm" onClick={() => db.queue.update(q.id, { done: 0 })}>
                  requeue
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

/** Distraction-free reader for the head of the queue. */
function FocusMode({
  item,
  note,
  remaining,
  onExit,
}: {
  item: QueueItem;
  note: Note | undefined;
  remaining: number;
  onExit: () => void;
}) {
  const snooze = async () => {
    const last = await db.queue.orderBy("order").last();
    await db.queue.update(item.id, { order: (last?.order ?? 0) + 1 });
  };
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip">Focus · {remaining} in queue</span>
        <div className="flex gap-1.5">
          <button className="btn btn-sm" onClick={snooze}>
            Snooze → end
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => db.queue.update(item.id, { done: 1 })}>
            ✓ Done, next
          </button>
          <button className="btn btn-ghost btn-sm" onClick={onExit}>
            Exit
          </button>
        </div>
      </div>
      {note ? (
        <>
          <h1 className="mb-4 text-2xl font-bold tracking-tight">
            {note.title}
            {item.anchorText && <span className="text-[var(--link)]"> § {item.anchorText}</span>}
          </h1>
          <Markdown md={note.body} />
        </>
      ) : (
        <p className="text-sm text-[var(--text-dim)]">This note was deleted — mark the item done.</p>
      )}
    </div>
  );
}

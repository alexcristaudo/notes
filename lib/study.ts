import { db, uid, bumpContentVersion } from "./db";
import { stableHash } from "./slug";
import { extractFlashcards, extractWikiTargets } from "./markdown/extract";
import type { Card, Note, QueueItem, Review, ReviewRating } from "./types";

/**
 * Re-derive cards and wiki-link edges from a note body after any save.
 * Card identity = hash(noteId + question), so review history survives edits
 * that don't change the question; removed cards are deactivated, not deleted.
 */
export async function syncDerivedForNote(note: Note): Promise<void> {
  const extracted = extractFlashcards(note.body);
  const wanted = new Map<string, { question: string; answer: string }>();
  for (const fc of extracted) wanted.set(stableHash(note.id + "::" + fc.question), fc);

  const existing = await db.cards.where("noteId").equals(note.id).toArray();
  const ops: Promise<unknown>[] = [];
  for (const card of existing) {
    const hit = wanted.get(card.id);
    if (hit) {
      if (card.answer !== hit.answer || card.active !== 1) {
        ops.push(db.cards.update(card.id, { answer: hit.answer, active: 1 }));
      }
      wanted.delete(card.id);
    } else if (card.active === 1) {
      ops.push(db.cards.update(card.id, { active: 0 }));
    }
  }
  for (const [id, fc] of wanted) {
    ops.push(
      db.cards.add({
        id,
        noteId: note.id,
        courseId: note.courseId,
        question: fc.question,
        answer: fc.answer,
        active: 1,
        createdAt: Date.now(),
      } satisfies Card),
    );
  }

  ops.push(
    db.links.where("fromNoteId").equals(note.id).delete().then(() =>
      db.links.bulkAdd(extractWikiTargets(note.body).map((target) => ({ fromNoteId: note.id, target }))),
    ),
  );
  await Promise.all(ops);
  bumpContentVersion();
}

/* ---------------- SM-2 scheduler over the append-only review log ----------------
 * State is a pure function of the log (auditable, algorithm-swappable — FSRS is a
 * planned drop-in replacement). Ratings: 1 Again · 2 Hard · 3 Good · 4 Easy.
 */

export interface CardState {
  card: Card;
  due: number; // epoch ms
  intervalDays: number;
  ease: number;
  reps: number;
  lapses: number;
}

const DAY = 24 * 60 * 60 * 1000;

export function replay(card: Card, reviews: Review[]): CardState {
  let ease = 2.5;
  let intervalDays = 0;
  let reps = 0;
  let lapses = 0;
  let due = card.createdAt;
  for (const r of [...reviews].sort((a, b) => a.ts - b.ts)) {
    if (r.rating === 1) {
      lapses++;
      reps = 0;
      intervalDays = 0;
      ease = Math.max(1.3, ease - 0.2);
      due = r.ts + 10 * 60 * 1000; // relearn in 10 minutes
      continue;
    }
    reps++;
    ease = Math.max(1.3, ease + (r.rating === 2 ? -0.15 : r.rating === 4 ? 0.15 : 0));
    if (reps === 1) intervalDays = 1;
    else if (reps === 2) intervalDays = r.rating === 2 ? 2 : 6;
    else intervalDays = Math.round(intervalDays * (r.rating === 2 ? 1.2 : ease));
    if (r.rating === 4) intervalDays = Math.max(intervalDays, reps <= 1 ? 4 : intervalDays);
    due = r.ts + intervalDays * DAY;
  }
  return { card, due, intervalDays, ease, reps, lapses };
}

export async function getCardStates(courseId?: string): Promise<CardState[]> {
  const cards = courseId
    ? await db.cards.where("courseId").equals(courseId).and((c) => c.active === 1).toArray()
    : await db.cards.where("active").equals(1).toArray();
  return Promise.all(
    cards.map(async (card) => replay(card, await db.reviews.where("cardId").equals(card.id).toArray())),
  );
}

export async function getDueCards(courseId?: string): Promise<CardState[]> {
  const now = Date.now();
  return (await getCardStates(courseId)).filter((s) => s.due <= now).sort((a, b) => a.due - b.due);
}

export async function rateCard(cardId: string, rating: ReviewRating): Promise<void> {
  await db.reviews.add({ cardId, ts: Date.now(), rating });
}

/* ---------------- Study queue ---------------- */

export async function addToQueue(noteId: string, anchor?: string, anchorText?: string): Promise<void> {
  const dupe = await db.queue
    .where("noteId")
    .equals(noteId)
    .and((q) => q.done === 0 && (q.anchor ?? "") === (anchor ?? ""))
    .first();
  if (dupe) return;
  const last = await db.queue.orderBy("order").last();
  await db.queue.add({
    id: uid(),
    noteId,
    anchor,
    anchorText,
    priority: 0,
    order: (last?.order ?? 0) + 1,
    done: 0,
    addedAt: Date.now(),
  } satisfies QueueItem);
}

export async function moveQueueItem(id: string, dir: -1 | 1): Promise<void> {
  const items = (await db.queue.where("done").equals(0).sortBy("order"));
  const i = items.findIndex((q) => q.id === id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= items.length) return;
  await db.queue.update(items[i].id, { order: items[j].order });
  await db.queue.update(items[j].id, { order: items[i].order });
}

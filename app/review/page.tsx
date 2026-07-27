"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { getCardStates, getDueCards, rateCard, type CardState } from "@/lib/study";
import { Markdown } from "@/components/Markdown";
import type { ReviewRating } from "@/lib/types";

const RATINGS: { key: string; rating: ReviewRating; label: string; hint: string; cls: string }[] = [
  { key: "1", rating: 1, label: "Again", hint: "forgot", cls: "!border-[#ff8fa3] !text-[#ff8fa3]" },
  { key: "2", rating: 2, label: "Hard", hint: "barely", cls: "!border-[#ffb454] !text-[#ffb454]" },
  { key: "3", rating: 3, label: "Good", hint: "recalled", cls: "!border-[#57d98a] !text-[#57d98a]" },
  { key: "4", rating: 4, label: "Easy", hint: "instant", cls: "!border-[#4cc2ff] !text-[#4cc2ff]" },
];

export default function ReviewPage() {
  const courses = useLiveQuery(() => db.courses.toArray(), [], []);
  const [courseId, setCourseId] = useState<string>("");
  const [session, setSession] = useState<CardState[] | null>(null);
  const [stats, setStats] = useState<{ due: number; total: number; perCourse: Map<string, number> }>();

  const refreshStats = useCallback(async () => {
    const [all, due] = await Promise.all([getCardStates(), getDueCards()]);
    const perCourse = new Map<string, number>();
    for (const d of due) perCourse.set(d.card.courseId, (perCourse.get(d.card.courseId) ?? 0) + 1);
    setStats({ due: due.length, total: all.length, perCourse });
  }, []);

  useEffect(() => {
    void refreshStats();
  }, [refreshStats]);

  const start = async () => {
    setSession(await getDueCards(courseId || undefined));
  };

  if (session) {
    return (
      <ReviewSession
        cards={session}
        onDone={() => {
          setSession(null);
          void refreshStats();
        }}
      />
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight">Review</h1>
      <p className="mb-5 text-sm text-[var(--text-dim)]">
        Cards come from <code>&gt; [!flashcard]</code> blocks inside your notes — history survives edits.
      </p>

      <div className="card p-5">
        <div className="mb-4 flex items-baseline gap-3">
          <span className="text-3xl font-bold">{stats?.due ?? "…"}</span>
          <span className="text-sm text-[var(--text-dim)]">due now · {stats?.total ?? "…"} active cards total</span>
        </div>
        <div className="flex items-center gap-2">
          <select className="input !w-auto" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
            <option value="">All courses</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code}
                {stats?.perCourse.get(c.id) ? ` (${stats.perCourse.get(c.id)} due)` : ""}
              </option>
            ))}
          </select>
          <button className="btn btn-primary" onClick={start} disabled={(stats?.due ?? 0) === 0 && !courseId}>
            Start session
          </button>
        </div>
        {(stats?.total ?? 0) === 0 && (
          <p className="mt-4 text-sm text-[var(--text-faint)]">
            No cards yet. Add a flashcard block to any note:
            <br />
            <code>&gt; [!flashcard]</code> · <code>&gt; Q: …</code> · <code>&gt; A: …</code>
          </p>
        )}
      </div>
    </div>
  );
}

function ReviewSession({ cards, onDone }: { cards: CardState[]; onDone: () => void }) {
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [again, setAgain] = useState<CardState[]>([]);
  const current = cards[i];

  const rate = useCallback(
    async (rating: ReviewRating) => {
      if (!current) return;
      await rateCard(current.card.id, rating);
      if (rating === 1) setAgain((a) => [...a, current]);
      setRevealed(false);
      setI((n) => n + 1);
    },
    [current],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setRevealed(true);
      }
      const r = RATINGS.find((x) => x.key === e.key);
      if (r && revealed) void rate(r.rating);
      if (e.key === "Escape") onDone();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [revealed, rate, onDone]);

  if (!current) {
    return (
      <div className="mx-auto mt-16 max-w-md text-center">
        <p className="text-4xl">🎉</p>
        <h1 className="mt-2 text-lg font-bold">Session complete</h1>
        <p className="mt-1 text-sm text-[var(--text-dim)]">
          {cards.length} card{cards.length === 1 ? "" : "s"} reviewed
          {again.length > 0 ? ` · ${again.length} marked Again will come back shortly` : ""}.
        </p>
        <button className="btn btn-primary mt-4" onClick={onDone}>
          Back to review
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-xs text-[var(--text-faint)]">
        <span>
          Card {i + 1} / {cards.length}
        </span>
        <button className="btn btn-ghost btn-sm" onClick={onDone}>
          End session
        </button>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-[var(--bg-hover)]">
        <div className="h-full bg-[#4c6ef5] transition-all" style={{ width: `${(i / cards.length) * 100}%` }} />
      </div>

      <div className="card mt-6 p-6">
        <div className="label mb-2">Question</div>
        <Markdown md={current.card.question} />
        {revealed ? (
          <>
            <div className="label mb-2 mt-6 border-t border-[var(--border)] pt-4">Answer</div>
            <Markdown md={current.card.answer} />
          </>
        ) : (
          <button className="btn mt-6 w-full justify-center" onClick={() => setRevealed(true)}>
            Reveal (space)
          </button>
        )}
      </div>

      {revealed && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {RATINGS.map((r) => (
            <button key={r.rating} className={`btn justify-center ${r.cls}`} onClick={() => rate(r.rating)}>
              <span>
                {r.label} <span className="opacity-60">({r.key})</span>
              </span>
            </button>
          ))}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-[var(--text-faint)]">
        From{" "}
        <Link href={`/notes/${current.card.noteId}`} className="text-[var(--link)] hover:underline">
          the source note
        </Link>
        {" · "}interval {current.intervalDays}d · {current.reps} reps
      </p>
    </div>
  );
}

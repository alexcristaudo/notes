"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { resolveWikiTarget } from "@/lib/notes";

export default function WikiPage() {
  return (
    <Suspense fallback={null}>
      <WikiResolver />
    </Suspense>
  );
}

/** Resolves [[wiki-link]] targets to notes by title; friendly dead-end otherwise. */
function WikiResolver() {
  const params = useSearchParams();
  const router = useRouter();
  const [missing, setMissing] = useState(false);
  const target = params.get("t") ?? "";

  useEffect(() => {
    if (!target) return;
    resolveWikiTarget(target).then((note) => {
      if (note) {
        const anchor = params.get("anchor");
        router.replace(`/note?id=${note.id}${anchor ? `#${anchor}` : ""}`);
      } else {
        setMissing(true);
      }
    });
  }, [target, params, router]);

  if (!missing) return null;
  return (
    <div className="mx-auto mt-16 max-w-md text-center">
      <p className="text-2xl">🔗</p>
      <h1 className="mt-2 text-lg font-bold">No note titled “{target}”</h1>
      <p className="mt-1 text-sm text-[var(--text-dim)]">
        Wiki-links resolve by note title. Create a note with exactly this title and the link will start working.
      </p>
      <button className="btn mt-4" onClick={() => router.back()}>
        ← Back
      </button>
    </div>
  );
}

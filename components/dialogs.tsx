"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "./Modal";
import { createCourse, createNote } from "@/lib/notes";
import { NOTE_TYPES, NOTE_TYPE_LABEL, type Course, type NoteType } from "@/lib/types";

const COLORS = ["#7c3aed", "#2563eb", "#0d9488", "#16a34a", "#d97706", "#dc2626", "#db2777", "#64748b"];
const ICONS = ["∫", "Σ", "λ", "⚛", "🧠", "🧬", "💻", "📈", "⚖️", "🏛", "🌍", "✏️"];

export function NewCourseDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [term, setTerm] = useState("2026-S2");
  const [weeks, setWeeks] = useState(13);
  const [examDate, setExamDate] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  const [icon, setIcon] = useState(ICONS[0]);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!code.trim() || !name.trim()) return;
    setBusy(true);
    const course = await createCourse({
      code: code.trim().toUpperCase(),
      name: name.trim(),
      term: term.trim(),
      weeks,
      examDate: examDate || undefined,
      color,
      icon,
      status: "active",
    });
    onClose();
    router.push(`/course?id=${course.id}`);
  };

  return (
    <Modal title="New course" onClose={onClose}>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="label mb-1">Code</div>
            <input className="input" placeholder="MATH2001" value={code} onChange={(e) => setCode(e.target.value)} autoFocus />
          </div>
          <div>
            <div className="label mb-1">Term</div>
            <input className="input" placeholder="2026-S2" value={term} onChange={(e) => setTerm(e.target.value)} />
          </div>
        </div>
        <div>
          <div className="label mb-1">Name</div>
          <input className="input" placeholder="Calculus & Linear Algebra II" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="label mb-1">Weeks</div>
            <input className="input" type="number" min={1} max={30} value={weeks} onChange={(e) => setWeeks(Number(e.target.value) || 13)} />
          </div>
          <div>
            <div className="label mb-1">Exam date</div>
            <input className="input" type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
          </div>
        </div>
        <div>
          <div className="label mb-1">Color & icon</div>
          <div className="flex flex-wrap items-center gap-1.5">
            {COLORS.map((c) => (
              <button
                key={c}
                className="h-6 w-6 rounded-full border-2"
                style={{ background: c, borderColor: c === color ? "white" : "transparent" }}
                onClick={() => setColor(c)}
                aria-label={`color ${c}`}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {ICONS.map((i) => (
              <button
                key={i}
                className={`h-8 w-8 rounded-lg border text-base ${i === icon ? "border-white" : "border-transparent"} bg-[var(--bg-hover)]`}
                onClick={() => setIcon(i)}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        <button className="btn btn-primary w-full justify-center" disabled={busy || !code.trim() || !name.trim()} onClick={submit}>
          Create course
        </button>
      </div>
    </Modal>
  );
}

export function NewNoteDialog({ courses, defaultCourseId, onClose }: { courses: Course[]; defaultCourseId?: string; onClose: () => void }) {
  const router = useRouter();
  const [courseId, setCourseId] = useState(defaultCourseId ?? courses[0]?.id ?? "");
  const [type, setType] = useState<NoteType>("lecture");
  const [title, setTitle] = useState("");
  const [week, setWeek] = useState<string>("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!title.trim() || !courseId) return;
    setBusy(true);
    const note = await createNote({
      courseId,
      type,
      title: title.trim(),
      week: week ? Number(week) : undefined,
    });
    onClose();
    router.push(`/note?id=${note.id}&edit=1`);
  };

  return (
    <Modal title="New note" onClose={onClose}>
      <div className="space-y-3">
        <div>
          <div className="label mb-1">Course</div>
          <select className="input" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code} — {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="label mb-1">Type</div>
            <select className="input" value={type} onChange={(e) => setType(e.target.value as NoteType)}>
              {NOTE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {NOTE_TYPE_LABEL[t]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="label mb-1">Week (optional)</div>
            <input className="input" type="number" min={1} max={52} value={week} onChange={(e) => setWeek(e.target.value)} />
          </div>
        </div>
        <div>
          <div className="label mb-1">Title</div>
          <input
            className="input"
            placeholder="Limits and Continuity"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            autoFocus
          />
        </div>
        <button className="btn btn-primary w-full justify-center" disabled={busy || !title.trim() || !courseId} onClick={submit}>
          Create note
        </button>
      </div>
    </Modal>
  );
}

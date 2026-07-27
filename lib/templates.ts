import type { NoteType } from "./types";

export function noteTemplate(type: NoteType, title: string): string {
  switch (type) {
    case "lecture":
      return `> [!definition]
> Key ideas of this lecture — replace with the two or three concepts that matter.

## ${title}

Write the lecture content here. Use \`$x^2$\` for inline math and \`$$...$$\` for display math.

## Linked concepts

- [[Related note]]
`;
    case "tutorial":
      return `Original sheet: attach the PDF from the note header.

## Q1

Work through the question here.

> [!answer]
> The final answer, collapsed by default so you can self-quiz.

## Q2

> [!answer]
> ...
`;
    case "test":
      return `**Date:** —  ·  **Weight:** —  ·  **Score:** —

Attach the paper PDF from the note header.

## Q1

Worked solution.

## Mistakes & lessons

- What went wrong and what to do differently.
`;
    case "summary":
      return `Dense, exam-oriented summary. Add flashcards as you go:

> [!flashcard]
> Q: A question you should be able to answer cold.
> A: The answer.
`;
    case "reference":
      return `Freeform reference material: formula sheets, glossaries, links.
`;
  }
}

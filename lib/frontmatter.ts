/**
 * Minimal YAML frontmatter for the subset our export contract uses:
 * scalars, ISO dates, numbers, and flat string arrays. Deliberately not a
 * full YAML parser — imports of exotic YAML degrade to ignored keys.
 */

export interface Frontmatter {
  [key: string]: string | number | string[] | undefined;
}

export function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: raw };
  const data: Frontmatter = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    let value = kv[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, "");
      if (value === "") continue;
      data[key] = /^-?\d+(\.\d+)?$/.test(value) ? Number(value) : value;
    }
  }
  return { data, body: raw.slice(m[0].length) };
}

export function emitFrontmatter(data: Frontmatter): string {
  const lines: string[] = ["---"];
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || (Array.isArray(value) && value.length === 0)) continue;
    if (Array.isArray(value)) {
      lines.push(`${key}: [${value.join(", ")}]`);
    } else if (typeof value === "string" && /[:#[\]{}"']/.test(value)) {
      lines.push(`${key}: "${value.replace(/"/g, '\\"')}"`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  lines.push("---", "");
  return lines.join("\n");
}

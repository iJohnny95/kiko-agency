import fs from "node:fs";
import path from "node:path";
import type { BlogBlock, BlogPost, BlogTopic } from "@/lib/blog-types";

const dir = path.join(process.cwd(), "content/blog");

const slugOrder = [
  "quanto-custa-um-website-em-portugal",
  "landing-page-ou-site-multi-pagina",
  "o-que-incluir-num-site-de-empresa",
  "site-com-formulario-e-marcacoes",
  "como-escolher-agencia-de-websites",
  "do-brief-ao-site-no-ar",
] as const;

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("MDX sem frontmatter");
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { meta, body: match[2].trim() };
}

function parseBlocks(body: string): { h1: string; blocks: BlogBlock[] } {
  const lines = body.split("\n");
  const blocks: BlogBlock[] = [];
  let h1 = "";
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith("# ") && !line.startsWith("## ")) {
      h1 = line.slice(2).trim();
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i += 1;
      continue;
    }
    if (line.startsWith("> ")) {
      blocks.push({ type: "note", text: line.slice(2).trim() });
      i += 1;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    const parts: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("> ")
    ) {
      parts.push(lines[i].trim());
      i += 1;
    }
    if (parts.length) blocks.push({ type: "p", text: parts.join(" ") });
  }

  return { h1, blocks };
}

export function loadMdxPosts(): BlogPost[] {
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { meta, body } = parseFrontmatter(raw);
    const { h1, blocks } = parseBlocks(body);
    const title = h1 || meta.title;
    return {
      slug: meta.slug,
      title,
      description: meta.description,
      date: meta.date,
      topic: meta.topic as BlogTopic,
      blocks,
    } satisfies BlogPost;
  });

  return [...posts].sort(
    (a, b) => slugOrder.indexOf(a.slug as (typeof slugOrder)[number]) - slugOrder.indexOf(b.slug as (typeof slugOrder)[number])
  );
}

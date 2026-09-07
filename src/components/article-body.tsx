import Link from "next/link";
import type { ReactNode } from "react";
import { headingId } from "@/lib/blog-meta";
import type { BlogBlock } from "@/lib/blog-types";

const phrases: [string, string][] = [
  ["Marcar call", "/marcar-call"],
  ["Serviços", "/servicos"],
  ["Contacto", "/contacto"],
  ["Trabalho", "/trabalho"],
  ["Sobre", "/sobre"],
];

function LinkedText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length) {
    let hit: { index: number; phrase: string; href: string } | null = null;
    for (const [phrase, href] of phrases) {
      const index = remaining.indexOf(phrase);
      if (index === -1) continue;
      if (!hit || index < hit.index) hit = { index, phrase, href };
    }
    if (!hit) {
      nodes.push(remaining);
      break;
    }
    if (hit.index > 0) nodes.push(remaining.slice(0, hit.index));
    nodes.push(
      <Link
        key={`${hit.phrase}-${key++}`}
        href={hit.href}
        className="text-foreground underline decoration-accent/60 underline-offset-3 hover:decoration-accent"
      >
        {hit.phrase}
      </Link>
    );
    remaining = remaining.slice(hit.index + hit.phrase.length);
  }

  return <>{nodes}</>;
}

export function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-kiko flex max-w-prose flex-col gap-6">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              <LinkedText text={block.text} />
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              id={headingId(block.text)}
              className="mt-4 scroll-mt-28 text-2xl leading-tight md:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={index}
              className="flex flex-col gap-2 text-base leading-relaxed text-muted-foreground"
            >
              {block.items.map((item) => (
                <li key={item} className="border-l-2 border-accent pl-3">
                  <LinkedText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={index}
            className="rounded-2xl border border-white/10 bg-card/60 px-4 py-3 text-sm leading-relaxed text-foreground/85"
          >
            <LinkedText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}

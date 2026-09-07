import { postHeadings } from "@/lib/blog-meta";
import type { BlogPost } from "@/lib/blog-types";

export function BlogToc({ post }: { post: BlogPost }) {
  const headings = postHeadings(post);
  if (!headings.length) return null;

  return (
    <nav
      aria-label="Nesta página"
      className="sticky top-28 hidden lg:block"
    >
      <p className="mb-4 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
        Nesta página
      </p>
      <ol className="flex flex-col gap-2 border-l border-cream/10 pl-4">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-sm leading-snug text-muted-foreground transition-colors hover:text-foreground"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

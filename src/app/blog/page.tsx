import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { posts } from "@/lib/blog";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.blog.title,
  description: pages.blog.description,
};

export default function BlogPage() {
  return (
    <Section className="pt-16 pb-24 md:pt-24">
      <Reveal className="mb-12 flex max-w-2xl flex-col gap-5">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
          Notas sobre sites que{" "}
          <span className="text-gradient">convertem</span>
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Tinta com direção. Artigos em português europeu — preço, formatos,
          marcações, escolha de agência e formulários. Sem métricas de montra.
        </p>
      </Reveal>
      <Stagger className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <Surface>
                <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {post.date}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <p className="text-sm text-foreground">Ler →</p>
              </Surface>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

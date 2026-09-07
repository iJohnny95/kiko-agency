import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";
import { Reveal } from "@/components/motion-primitives";
import { Band, Eyebrow, Section } from "@/components/section";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.blog.title,
  description: pages.blog.description,
};

export default function BlogPage() {
  return (
    <Band flush>
      <Section className="pt-16 pb-24 md:pt-24">
        <Reveal className="mb-12 flex max-w-2xl flex-col gap-5">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
            Notas sobre sites que{" "}
            <span className="text-gradient">convertem</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Tinta com direção. Artigos em português europeu — preço, formatos,
            marcações, escolha de agência e o caminho do brief ao site no ar.
          </p>
        </Reveal>
        <BlogIndex />
      </Section>
    </Band>
  );
}

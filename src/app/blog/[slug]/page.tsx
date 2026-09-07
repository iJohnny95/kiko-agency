import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { Cta } from "@/components/cta";
import { blogPostingSchema, JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { getPost, posts } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Section className="pt-16 pb-24 md:pt-24">
      <JsonLd data={blogPostingSchema(post)} />
      <Reveal className="mb-10 flex max-w-2xl flex-col gap-5">
        <Eyebrow>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
        </Eyebrow>
        <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          {post.date}
        </p>
        <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          {post.description}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <ArticleBody blocks={post.blocks} />
      </Reveal>
      <Reveal className="mt-14 flex flex-col gap-3 sm:flex-row">
        <Cta href="/marcar-call">Marcar call</Cta>
        <Cta href="/servicos" variant="ctaOutline">
          Ver serviços
        </Cta>
        <Cta href="/contacto" variant="ctaOutline">
          Contacto
        </Cta>
      </Reveal>
    </Section>
  );
}

import Link from "next/link";
import { Surface } from "@/components/surface";
import { getRelatedPosts, topicLabel } from "@/lib/blog";

export function RelatedPosts({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug, 3);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl leading-tight">Continuar a ler</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {related.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
            <Surface className="gap-3">
              <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                {topicLabel(post.topic)}
              </p>
              <h3 className="text-lg font-semibold tracking-tight">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.description}</p>
            </Surface>
          </Link>
        ))}
      </div>
    </div>
  );
}

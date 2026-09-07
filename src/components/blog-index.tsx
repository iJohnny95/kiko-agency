"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { Surface } from "@/components/surface";
import { blogTopics, topicLabel } from "@/lib/blog-meta";
import type { BlogPost, BlogTopic } from "@/lib/blog-types";
import { cn } from "@/lib/utils";

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [topic, setTopic] = useState<BlogTopic | "todos">("todos");
  const visible = useMemo(
    () => (topic === "todos" ? posts : posts.filter((post) => post.topic === topic)),
    [topic]
  );

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Filtrar artigos"
        className="flex flex-wrap gap-2"
      >
        {blogTopics.map((item) => {
          const selected = item.id === topic;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setTopic(item.id)}
              className={cn(
                "min-h-10 rounded-full border px-4 text-sm transition-colors",
                selected
                  ? "border-cream/20 bg-cream/10 text-foreground"
                  : "border-cream/10 text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <StaggerItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <Surface>
                <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {topicLabel(post.topic)} · {post.date}
                </p>
                <h2 className="text-2xl leading-tight">{post.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <p className="text-sm text-foreground">Ler →</p>
              </Surface>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

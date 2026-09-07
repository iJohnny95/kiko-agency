import { relatedFrom } from "@/lib/blog-meta";
import { loadMdxPosts } from "@/lib/mdx-posts";

export type { BlogBlock, BlogPost, BlogTopic } from "@/lib/blog-types";
export { blogTopics, headingId, postHeadings, topicLabel } from "@/lib/blog-meta";

export const posts = loadMdxPosts();

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3) {
  return relatedFrom(posts, slug, count);
}

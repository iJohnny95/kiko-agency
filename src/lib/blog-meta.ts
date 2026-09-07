import type { BlogBlock, BlogPost, BlogTopic } from "@/lib/blog-types";

export const blogTopics: { id: BlogTopic | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "preco", label: "Preço" },
  { id: "formatos", label: "Formatos" },
  { id: "checklist", label: "Checklist" },
  { id: "marcacoes", label: "Marcações" },
  { id: "agencia", label: "Agência" },
  { id: "processo", label: "Processo" },
];

export function headingId(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function postHeadings(post: BlogPost) {
  return post.blocks
    .filter((block): block is Extract<BlogBlock, { type: "h2" }> => block.type === "h2")
    .map((block) => ({ text: block.text, id: headingId(block.text) }));
}

export function topicLabel(topic: BlogTopic) {
  return blogTopics.find((item) => item.id === topic)?.label ?? topic;
}

export function relatedFrom(posts: BlogPost[], slug: string, count = 3) {
  const current = posts.find((post) => post.slug === slug);
  if (!current) return posts.slice(0, count);
  const sameTopic = posts.filter(
    (post) => post.slug !== slug && post.topic === current.topic
  );
  const others = posts.filter(
    (post) => post.slug !== slug && post.topic !== current.topic
  );
  return [...sameTopic, ...others].slice(0, count);
}

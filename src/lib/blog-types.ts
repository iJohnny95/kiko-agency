export type BlogTopic =
  | "preco"
  | "formatos"
  | "checklist"
  | "marcacoes"
  | "agencia"
  | "processo";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  topic: BlogTopic;
  blocks: BlogBlock[];
};

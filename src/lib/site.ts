export const site = {
  name: "Kiko Agency",
  domain: "kiko-agency.pt",
  tagline: "Tinta com direção. Sites que convertem.",
  description:
    "Agência em Portugal. Landing pages, sites multi-página e agendamento — com uma oferta clara e um próximo passo óbvio.",
} as const;

export const navItems = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/trabalho", label: "Trabalho" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const services = [
  {
    slug: "landing-pages",
    title: "Landing pages",
    summary:
      "Uma página, uma oferta, um próximo passo. Feita para explicar o essencial e pedir a acção certa — call, formulário ou marcação.",
    includes: [
      "Estrutura da oferta e hierarquia de conteúdo",
      "Secções de prova e processo, quando existirem",
      "CTA principal e secundário",
    ],
  },
  {
    slug: "sites-multi-pagina",
    title: "Sites multi-página",
    summary:
      "Várias páginas com navegação clara. Com ou sem formulário — consoante o negócio precise de contacto, pedido ou só de presença.",
    includes: [
      "Arquitectura de páginas e navegação",
      "Páginas de serviços, sobre e contacto",
      "Formulário opcional (contacto ou pedido)",
    ],
  },
  {
    slug: "agendamento",
    title: "Agendamento e marcações",
    summary:
      "Para quem vende tempo: pedido de marcação, disponibilidade e confirmação. Neste wireframe o fluxo é um stub; o calendário real vem depois.",
    includes: [
      "Pedido de call ou marcação",
      "Campos de serviço, horário e contexto",
      "Ecrã de confirmação (ainda local)",
    ],
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Brief",
    body: "Uma conversa curta para perceber o negócio, a oferta, o prazo e o que conta como sucesso. Sem briefing inventado — só o que for preciso para propor com clareza.",
  },
  {
    n: "02",
    title: "Proposta",
    body: "Âmbito, páginas, formulários e calendário. O que entra, o que fica de fora, e quanto tempo leva. A proposta é o contrato de direção — não um catálogo.",
  },
  {
    n: "03",
    title: "Entrega",
    body: "Site publicado, conteúdo no sítio certo, e uma passagem breve pelo que ficou. Depois, iterações com intenção — não alterações infinitas.",
  },
] as const;

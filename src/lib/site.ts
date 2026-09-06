export const site = {
  name: "Kiko Agency",
  domain: "kiko-agency.pt",
  url: "https://kiko-agency.pt",
  tagline: "Tinta com direção. Sites que convertem.",
  description:
    "Agência em Portugal. Landing pages, sites multi-página e agendamento — sites high-end com uma oferta clara e um próximo passo óbvio.",
} as const;

export const navItems = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/trabalho", label: "Trabalho" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const pages = {
  home: {
    title: "Sites high-end para negócios em Portugal",
    h1: "Sites high-end para negócios em Portugal",
    description:
      "Kiko Agency desenha landing pages, sites multi-página e fluxos de marcação para negócios em Portugal. Tinta com direção. Sites que convertem.",
  },
  servicos: {
    title: "Serviços de websites em Portugal",
    h1: "Landing pages, sites multi-página e marcações",
    description:
      "Landing pages, sites multi-página com ou sem formulário, e agendamento. Serviços da Kiko Agency em Portugal.",
  },
  trabalho: {
    title: "Trabalho e portefólio",
    h1: "Trabalho da Kiko Agency",
    description:
      "Portefólio da Kiko Agency. Casos públicos entram aqui quando existirem e puderem ser mostrados — sem métricas inventadas.",
  },
  sobre: {
    title: "Sobre a Kiko Agency",
    h1: "Sobre a Kiko Agency",
    description:
      "Estúdio em Portugal. Sites high-end com direção editorial — e o Kiko, uma gota de tinta viva.",
  },
  contacto: {
    title: "Contacto",
    h1: "Contacto da Kiko Agency",
    description:
      "Escreva à Kiko Agency. Formulário-protótipo neste site — a confirmação é local até o envio estar ligado.",
  },
  marcarCall: {
    title: "Marcar call",
    h1: "Marcar call com a Kiko Agency",
    description:
      "Pedir uma conversa com a Kiko Agency. Stub de agendamento: ainda não cria evento nem envia convite.",
  },
} as const;

export const services = [
  {
    slug: "landing-pages",
    icon: "landing" as const,
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
    icon: "pages" as const,
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
    icon: "booking" as const,
    title: "Agendamento e marcações",
    summary:
      "Para quem vende tempo: pedido de marcação, disponibilidade e confirmação. Neste site o fluxo é um stub; o calendário real vem depois.",
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
    icon: "brief" as const,
    title: "Brief",
    body: "Uma conversa curta para perceber o negócio, a oferta, o prazo e o que conta como sucesso. Sem briefing inventado — só o que for preciso para propor com clareza.",
  },
  {
    n: "02",
    icon: "proposal" as const,
    title: "Proposta",
    body: "Âmbito, páginas, formulários e calendário. O que entra, o que fica de fora, e quanto tempo leva. A proposta é o contrato de direção — não um catálogo.",
  },
  {
    n: "03",
    icon: "delivery" as const,
    title: "Entrega",
    body: "Site publicado, conteúdo no sítio certo, e uma passagem breve pelo que ficou. Depois, iterações com intenção — não alterações infinitas.",
  },
] as const;

export const faqs = [
  {
    q: "O que faz a Kiko Agency?",
    a: "Sites high-end para negócios em Portugal: landing pages, sites multi-página (com ou sem formulário) e fluxos de agendamento. O critério é o mesmo — o visitante percebe a oferta e sabe o próximo passo.",
  },
  {
    q: "Trabalham só em Portugal?",
    a: "O estúdio e o domínio (kiko-agency.pt) são de Portugal. A cópia deste site está em português europeu. Projectos noutros mercados podem entrar na conversa — sem fingir uma rede internacional.",
  },
  {
    q: "Quanto custa um site?",
    a: "Ainda não há tabela pública. O preço sai da proposta, depois do brief: páginas, formulários, prazo e o que fica de fora. Não inventamos «a partir de» neste wireframe.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Depende do âmbito. O calendário fica escrito na proposta — não num prazo genérico de marketing.",
  },
  {
    q: "Os formulários deste site já enviam mensagens?",
    a: "Não. Contacto e Marcar call são stubs: validam no browser e mostram a confirmação com o Kiko. Quando o envio e o calendário existirem, usam os mesmos ecrãs.",
  },
  {
    q: "O que acontece depois da call?",
    a: "Brief → proposta → entrega. Se não houver encaixe, diz-se com clareza. Sem pitch longo nem follow-up agressivo.",
  },
] as const;

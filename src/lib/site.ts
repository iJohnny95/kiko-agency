export const site = {
  name: "Kiko Agency",
  wordmark: "KiKO",
  domain: "kiko-agency.pt",
  url: "https://kiko-agency.pt",
  tagline: "Tinta com direção. Sites que convertem.",
  description:
    "Agência em Portugal. Landing pages, sites multi-página e agendamento — sites high-end com uma oferta clara e um próximo passo óbvio.",
} as const;

export const navItems = [
  { href: "/servicos", label: "Serviços" },
  { href: "/trabalho", label: "Trabalhos" },
  { href: "/sobre", label: "Sobre nós" },
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
      "Estúdio em Portugal. Sites high-end com direção editorial — brief, proposta, entrega.",
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

export const reservedMarks = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
] as const;

export const stats = [
  { value: "3", label: "Formatos de serviço" },
  { value: "0", label: "Casos públicos — ainda" },
  { value: "3", label: "Passos: brief, proposta, entrega" },
  { value: "PT", label: "Cópia e estúdio em Portugal" },
] as const;

export const collageTiles = [
  {
    id: "landing",
    mark: "L",
    title: "Landing com direção",
    line: "Uma oferta. Um passo.",
    motif: "wire",
    glow: true,
  },
  {
    id: "multi",
    mark: "M",
    title: "Site multi-página",
    line: "Navegação clara.",
    motif: "wave",
    glow: false,
  },
  {
    id: "book",
    mark: "A",
    title: "Marcações",
    line: "Pedido e confirmação.",
    motif: "orb",
    glow: true,
  },
  {
    id: "sobre",
    mark: "S",
    title: "Sobre o estúdio",
    line: "Portugal. PT-PT.",
    motif: "mesh",
    glow: false,
  },
  {
    id: "prova",
    mark: "P",
    title: "Prova reservada",
    line: "Quando houver autorização.",
    motif: "leaf",
    glow: true,
  },
  {
    id: "call",
    mark: "C",
    title: "Call",
    line: "Brief, não pitch.",
    motif: "grid",
    glow: false,
  },
] as const;

export const testimonials = [
  {
    title: "Depoimento reservado",
    body: "Quando um cliente autorizar, o testemunho fica aqui — com nome, negócio e o que mudou. Até lá, o espaço fica vazio de propósito.",
  },
  {
    title: "Caso reservado",
    body: "Um projecto publicado, com contexto observável. Sem percentagens inventadas nem «+300% de conversão».",
  },
  {
    title: "Marca reservada",
    body: "Logótipos só com autorização. Não há fila de marcas fictícias nesta página.",
  },
] as const;

export const faqs = [
  {
    q: "O que faz a Kiko Agency?",
    a: "Sites high-end para negócios em Portugal: landing pages, sites multi-página (com ou sem formulário) e fluxos de agendamento. O critério é o mesmo — o visitante percebe a oferta e sabe o próximo passo.",
  },
  {
    q: "Quanto custa um site?",
    a: "Ainda não há tabela pública nem um «a partir de» de montra. O preço sai da proposta, depois do brief: número de páginas, formulário ou marcações, prazo e o que fica de fora. Landing, multi-página e agendamento têm âmbitos diferentes — não se cotam iguais.",
  },
  {
    q: "O que está incluído no preço?",
    a: "O que estiver escrito na proposta. Em regra: estrutura, páginas combinadas, estados de formulário se fizerem parte, e publicação. Foto, copy longa, anúncios ou manutenção não entram por omissão.",
  },
  {
    q: "Há mensalidade?",
    a: "Este site não vende hosting nem retainer. Se no futuro existir manutenção, aparece como linha própria na proposta — não escondida no valor do site.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Depende do âmbito. O calendário fica escrito na proposta — não num prazo genérico de marketing.",
  },
  {
    q: "Trabalham só em Portugal?",
    a: "O estúdio e o domínio (kiko-agency.pt) são de Portugal. A cópia deste site está em português europeu. Projectos noutros mercados podem entrar na conversa — sem fingir uma rede internacional.",
  },
  {
    q: "Os formulários deste site já enviam mensagens?",
    a: "Não. Contacto e Marcar call são stubs: validam no browser e mostram uma confirmação local. Quando o envio e o calendário existirem, usam os mesmos ecrãs.",
  },
  {
    q: "O que acontece depois da call?",
    a: "Brief → proposta → entrega. Se não houver encaixe, diz-se com clareza. Sem pitch longo nem follow-up agressivo.",
  },
] as const;

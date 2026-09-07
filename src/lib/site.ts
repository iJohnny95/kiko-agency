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
  { href: "/blog", label: "Blog" },
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
  blog: {
    title: "Blog",
    h1: "Notas sobre sites que convertem",
    description:
      "Artigos em português europeu sobre websites em Portugal: preço, landing pages, marcações, escolha de agência e RGPD.",
  },
} as const;

export const services = [
  {
    slug: "landing-pages",
    icon: "landing" as const,
    title: "Landing pages",
    summary:
      "Uma página, uma oferta, um próximo passo. Feita para explicar o essencial e pedir a acção certa — call, formulário ou marcação.",
    forWho:
      "Quem tem uma oferta clara e precisa de uma página que a explique sem desviar o visitante. Campanhas, lançamentos, serviços com um único pedido.",
    includes: [
      "Estrutura da oferta e hierarquia de conteúdo",
      "Secções de prova e processo, quando existirem",
      "CTA principal e secundário",
      "Estados de formulário, se fizerem parte do âmbito",
      "Publicação no domínio combinado",
    ],
    process:
      "Brief da oferta → estrutura da página → proposta com âmbito e prazo → produção e publicação.",
    objections: [
      {
        q: "Uma página chega?",
        a: "Chega quando a oferta é uma. Se o negócio precisa de várias entradas (serviços, sobre, contacto), o formato certo é multi-página.",
      },
      {
        q: "Inclui anúncios?",
        a: "Não por omissão. A landing é o destino. Tráfego e media são linha própria, se existirem.",
      },
    ],
  },
  {
    slug: "sites-multi-pagina",
    icon: "pages" as const,
    title: "Sites multi-página",
    summary:
      "Várias páginas com navegação clara. Com ou sem formulário — consoante o negócio precise de contacto, pedido ou só de presença.",
    forWho:
      "Negócios com mais do que uma oferta, ou que precisam de presença estável: serviços, sobre, contacto, e um caminho óbvio para o próximo passo.",
    includes: [
      "Arquitectura de páginas e navegação",
      "Páginas de serviços, sobre e contacto",
      "Formulário opcional (contacto ou pedido)",
      "Estados vazios e de confirmação, se houver formulário",
      "Publicação e passagem breve pelo que ficou",
    ],
    process:
      "Brief do mapa de páginas → proposta (o que entra e o que fica de fora) → produção por páginas → publicação.",
    objections: [
      {
        q: "Preciso de um blog no mesmo projecto?",
        a: "Só se estiver na proposta. Este site tem blog porque serve a agência. No vosso, entra quando fizer sentido — não por catálogo.",
      },
      {
        q: "E loja online?",
        a: "Não é o formato anunciado. Se o negócio for comércio, diz-se no brief; não se disfarça de site institucional.",
      },
    ],
  },
  {
    slug: "agendamento",
    icon: "booking" as const,
    title: "Agendamento e marcações",
    summary:
      "Para quem vende tempo: pedido de marcação, disponibilidade e confirmação. Neste site o fluxo é um stub; o calendário real vem depois.",
    forWho:
      "Clínicas, estúdios, consultores, formação — quem precisa que o visitante peça uma hora, não só um e-mail.",
    includes: [
      "Pedido de call ou marcação",
      "Campos de serviço, horário e contexto",
      "Ecrã de confirmação (ainda local neste site)",
      "Ligação a calendário quando o envio estiver activo",
      "Textos de espera e de «ainda não confirmado»",
    ],
    process:
      "Brief do que se marca → proposta (campos, regras, o que o calendário faz) → stub ou integração → publicação.",
    objections: [
      {
        q: "Já envia convites?",
        a: "Neste site, não. O ecrã de Marcar call é um ensaio. O calendário real entra quando estiver ligado — e fica escrito na proposta.",
      },
      {
        q: "Substitui a recepção?",
        a: "Não. Reduz o vai-e-vem do primeiro pedido. Regras de disponibilidade e confirmação humana, se existirem, ficam no âmbito.",
      },
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
    span: "tall",
  },
  {
    id: "multi",
    mark: "M",
    title: "Site multi-página",
    line: "Navegação clara.",
    motif: "wave",
    glow: false,
    span: "short",
  },
  {
    id: "book",
    mark: "A",
    title: "Marcações",
    line: "Pedido e confirmação.",
    motif: "orb",
    glow: true,
    span: "mid",
  },
  {
    id: "sobre",
    mark: "S",
    title: "Sobre o estúdio",
    line: "Portugal. PT-PT.",
    motif: "leaf",
    glow: false,
    span: "mid",
  },
  {
    id: "prova",
    mark: "P",
    title: "Prova reservada",
    line: "Quando houver autorização.",
    motif: "orb",
    glow: true,
    span: "short",
  },
  {
    id: "call",
    mark: "C",
    title: "Call",
    line: "Brief, não pitch.",
    motif: "wire",
    glow: false,
    span: "tall",
  },
] as const;

export const audience = [
  {
    title: "Quem tem uma oferta para explicar",
    body: "Serviços, consultoria, clínicas, estúdios. O visitante precisa de perceber o que se vende e o que acontece a seguir — não de um catálogo genérico.",
  },
  {
    title: "Quem está a sair do modelo «site de cartão»",
    body: "Já existe um domínio ou um template. Falta hierarquia, um CTA e uma página que se aguente sozinha sem a pessoa ao telefone a traduzir.",
  },
  {
    title: "Quem não quer métricas de montra",
    body: "Se o critério for «parecer ocupado», não há encaixe. O critério aqui é clareza: oferta, prova quando existir, próximo passo.",
  },
] as const;

export const values = [
  {
    title: "Direção editorial",
    body: "Cada bloco tem um trabalho. Se não empurra a oferta ou o próximo passo, sai. Sem secções de enchimento.",
  },
  {
    title: "Honestidade observável",
    body: "Sem ratings inventados, logótipos fictícios ou «+300%». A prova entra quando houver autorização e contexto.",
  },
  {
    title: "Portugal, PT-PT",
    body: "Estúdio e domínio em Portugal. A cópia deste site está em português europeu. Outros mercados entram na conversa — sem fingir uma rede.",
  },
  {
    title: "Âmbito escrito",
    body: "O que entra, o que fica de fora, o prazo e o preço ficam na proposta. Não há extras escondidos nem mensalidade disfarçada.",
  },
] as const;

export const caseFramework = [
  {
    format: "Landing",
    context: "Uma oferta, um pedido. O caso descreve o negócio, a página e o que o visitante devia fazer.",
    success:
      "O visitante percebe a oferta em poucos segundos e o CTA é o caminho óbvio — sem métricas inventadas.",
    status: "Reservado — entra com autorização",
  },
  {
    format: "Multi-página",
    context: "Mapa de páginas, navegação e, se fizer sentido, formulário. O caso mostra o que ficou publicado.",
    success:
      "Uma pessoa nova encontra serviços, sobre e o próximo passo sem pedir ajuda no WhatsApp.",
    status: "Reservado — entra com autorização",
  },
  {
    format: "Marcações",
    context: "Pedido de hora, campos e confirmação. O caso distingue stub de calendário real.",
    success:
      "O pedido chega com contexto suficiente para responder — sem convites fantasma neste site.",
    status: "Reservado — o stub vive em Marcar call",
  },
] as const;

export const nextSteps = {
  response:
    "Quando o envio estiver ligado, a resposta prevista é em dias úteis — não em minutos de chatbot. Até lá, o formulário só confirma no ecrã.",
  afterContact:
    "Leitura do pedido. Se houver encaixe, convite para brief. Se não houver, diz-se. Sem sequências agressivas.",
  afterCall:
    "Brief → proposta escrita (âmbito, prazo, preço, o que fica de fora) → entrega. Se a proposta não servir, termina ali.",
  prepare: [
    "O que o negócio vende, em uma frase",
    "Quem é o visitante que importa",
    "Que páginas ou formato imagina (landing, multi, marcações)",
    "Prazo real — não o de catálogo",
    "O que já existe: domínio, textos, fotos",
    "O que conta como sucesso, sem percentagens inventadas",
  ],
} as const;

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
  {
    q: "Para quem é a Kiko Agency?",
    a: "Para negócios em Portugal (e conversas noutros mercados) que precisam de um site com oferta clara: landing, multi-página ou marcações. Não é uma agência de anúncios nem de e-commerce de prateleira.",
  },
  {
    q: "Como sei se preciso de landing ou de site?",
    a: "Uma oferta, um pedido: landing. Várias entradas e presença estável: multi-página. Quem vende tempo e precisa de hora marcada: agendamento. Há um artigo no blog que destrinça isto.",
  },
  {
    q: "Publicam casos e logótipos?",
    a: "Só com autorização e contexto. Até lá, o portefólio mostra o padrão vazio de propósito — sem clientes fictícios.",
  },
  {
    q: "Em que língua trabalham?",
    a: "A cópia deste site é PT-PT. Projectos noutro idioma entram no brief. Não se assume inglês de agência internacional.",
  },
] as const;

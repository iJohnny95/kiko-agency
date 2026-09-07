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

export const blogTopics: { id: BlogTopic | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "preco", label: "Preço" },
  { id: "formatos", label: "Formatos" },
  { id: "checklist", label: "Checklist" },
  { id: "marcacoes", label: "Marcações" },
  { id: "agencia", label: "Agência" },
  { id: "processo", label: "Processo" },
];

export const posts: BlogPost[] = [
  {
    slug: "quanto-custa-um-website-em-portugal",
    title: "Quanto custa um website em Portugal?",
    description:
      "Intervalos honestos para um site em Portugal: Essencial, Presença e Operação — o número exacto sai da call.",
    date: "2026-09-06",
    topic: "preco",
    blocks: [
      {
        type: "p",
        text: "A pergunta é justa. A resposta útil não é um «a partir de» de montra: é perceber o que o site tem de fazer e em que intervalo isso cabe. Na Kiko Agency o preço sai do brief. Os intervalos abaixo são os da FAQ — os únicos números que usamos em público.",
      },
      {
        type: "h2",
        text: "O que faz o preço variar",
      },
      {
        type: "ul",
        items: [
          "Número de páginas e a complexidade de cada uma",
          "Formulário de contacto ou pedido — e os estados (erro, envio, confirmação)",
          "Marcações: stub, regras de disponibilidade, ou calendário ligado",
          "Textos e fotos: se já existem ou se têm de ser produzidos",
          "Prazo: em regra 2–4 semanas; uma entrega apertada não custa o mesmo",
        ],
      },
      {
        type: "p",
        text: "Uma landing com uma oferta não se cota como um site com agenda. Quem junta tudo num único número está a vender um saco, não um projecto.",
      },
      {
        type: "h2",
        text: "Pacotes Essencial / Presença / Operação",
      },
      {
        type: "ul",
        items: [
          "Essencial: 490–790€ — uma oferta clara, poucas páginas, um próximo passo",
          "Presença: 1200–1900€ — site multi-página com navegação e, se fizer sentido, formulário",
          "Operação: 1900–2900€ — formulário e marcações, confirmação e o fluxo de pedido",
        ],
      },
      {
        type: "p",
        text: "O pacote é um intervalo, não um produto de prateleira. A proposta diz o que entra e o que fica de fora. Foto, copy longa ou anúncios não vêm embutidos.",
      },
      {
        type: "h2",
        text: "Manutenção mensal",
      },
      {
        type: "p",
        text: "A manutenção é linha própria, se fizer sentido: Lite 49€, Ativa 99€ ou Parceiro 149€ por mês. Não está escondida no valor do site. Este site não vende hosting disfarçado.",
      },
      {
        type: "h2",
        text: "Orçamento exacto na call",
      },
      {
        type: "p",
        text: "A call é sem compromisso. Serve para perceber oferta, formato e prazo — e para escrever um número com âmbito. Se o intervalo não servir, termina ali.",
      },
      {
        type: "note",
        text: "Os únicos preços públicos estão na FAQ da página inicial. Para um número com o vosso âmbito: Marcar call. Os formatos estão em Serviços.",
      },
    ],
  },
  {
    slug: "landing-page-ou-site-multi-pagina",
    title: "Landing page ou site multi-página?",
    description:
      "Quando chega uma página com uma oferta — e quando o negócio precisa de várias páginas com navegação.",
    date: "2026-09-06",
    topic: "formatos",
    blocks: [
      {
        type: "p",
        text: "A diferença não é estética. É o trabalho da visita. Uma landing page tem uma oferta e um próximo passo. Um site multi-página tem várias entradas e uma navegação que não perde a pessoa.",
      },
      {
        type: "h2",
        text: "Quando a landing chega",
      },
      {
        type: "p",
        text: "Chega quando o visitante vem por um motivo só: uma campanha, um serviço, um pedido. A página explica o essencial, mostra prova se existir, e pede a acção. Se o menu leva a seis sítios, já não é landing.",
      },
      {
        type: "ul",
        items: [
          "Uma oferta, um CTA principal",
          "Estrutura curta: problema, oferta, prova, processo, pedido",
          "Boa para tráfego com intenção única",
        ],
      },
      {
        type: "h2",
        text: "Quando precisas de multi",
      },
      {
        type: "p",
        text: "Quando o negócio tem mais do que uma porta. Serviços, sobre, contacto, por vezes um artigo. Quem chega pelo nome da empresa precisa de se orientar. O formulário é opcional.",
      },
      {
        type: "h2",
        text: "Formulários e marcações",
      },
      {
        type: "p",
        text: "Se o negócio vende tempo, a página ou o site pedem uma hora — não só um e-mail. Isso pode viver numa landing, num site, ou no formato de marcações. Neste site o calendário ainda é um stub; stub e integração não se cobram iguais.",
      },
      {
        type: "h2",
        text: "Como decidimos na call",
      },
      {
        type: "p",
        text: "Não se começa por um tema premium. Começa-se pelo visitante e pelo pedido. Na call alinhamos formato, intervalo de preço e o que fica de fora. Soft: se quiser essa conversa, Marcar call.",
      },
      {
        type: "note",
        text: "Os três formatos estão em Serviços. Há um artigo sobre preço se o intervalo for a dúvida.",
      },
    ],
  },
  {
    slug: "o-que-incluir-num-site-de-empresa",
    title: "O que incluir num site de empresa",
    description:
      "O essencial acima da dobra, prova, contacto sem fricção — e os erros que custam leads.",
    date: "2026-09-06",
    topic: "checklist",
    blocks: [
      {
        type: "p",
        text: "Um site de empresa não precisa de tudo. Precisa do suficiente para um visitante novo perceber o que se faz e o que fazer a seguir. Esta lista é um ponto de partida — não um contrato.",
      },
      {
        type: "h2",
        text: "Acima da dobra",
      },
      {
        type: "ul",
        items: [
          "Uma frase de oferta que uma pessoa de fora percebe",
          "Um próximo passo óbvio — call, formulário ou marcação",
          "Quem é o estúdio ou a empresa, sem biografia de palco",
        ],
      },
      {
        type: "h2",
        text: "Prova e processo",
      },
      {
        type: "p",
        text: "Nomes, projectos, números — com autorização. Se ainda não há, o sítio fica vazio. Inventar clientes é pior do que um espaço reservado. O processo (brief, proposta, entrega) cabe numa secção curta. A página Trabalho deste site mostra o padrão vazio de propósito.",
      },
      {
        type: "h2",
        text: "Contacto sem fricção",
      },
      {
        type: "p",
        text: "Peça o mínimo. Nome, e-mail, contexto. Se for marcação, serviço e janela. Diga o que acontece a seguir — neste estúdio, 24 horas úteis quando o envio estiver ligado. Os ecrãs de ensaio estão em Contacto e Marcar call.",
      },
      {
        type: "h2",
        text: "Erros que custam leads",
      },
      {
        type: "ul",
        items: [
          "Slider de heróis que ninguém lê",
          "Contadores animados sem fonte",
          "Seis CTAs a competir na mesma dobra",
          "Formulário com campos a mais",
          "Prometer «recebemos o e-mail» sem backend",
        ],
      },
      {
        type: "note",
        text: "A checklist cabe nos três formatos de Serviços. Para um brief: Marcar call.",
      },
    ],
  },
  {
    slug: "site-com-formulario-e-marcacoes",
    title: "Site com formulário e marcações",
    description:
      "Leads versus agenda, o que o pacote Operação cobre, resposta em 24h e higiene de dados.",
    date: "2026-09-06",
    topic: "marcacoes",
    blocks: [
      {
        type: "p",
        text: "Quem vende tempo não precisa só de um «fale connosco». Precisa que o visitante peça uma hora com contexto suficiente para a outra ponta responder. Isso é um fluxo, não um widget.",
      },
      {
        type: "h2",
        text: "Leads vs agenda",
      },
      {
        type: "p",
        text: "Um lead é um e-mail para responder depois. Uma agenda é um pedido de hora: serviço, janela, contexto. Os dois podem viver no mesmo site — não são o mesmo campo. Misturá-los num único formulário genérico custa conversas.",
      },
      {
        type: "h2",
        text: "O que o pacote Operação cobre",
      },
      {
        type: "p",
        text: "Na FAQ, Operação é o intervalo 1900–2900€: formulário e marcações, confirmação e o fluxo de pedido. O calendário real e os convites entram quando o envio estiver ligado — e ficam escritos na proposta. Neste site, Marcar call é um stub: confirma no ecrã, não cria evento.",
      },
      {
        type: "h2",
        text: "Resposta em 24h",
      },
      {
        type: "p",
        text: "Quando o envio estiver ligado, a resposta prevista é em 24 horas úteis. Até lá, as páginas dizem que a confirmação é local. Prometer «já recebemos» sem backend é o contrário de clareza.",
      },
      {
        type: "h2",
        text: "RGPD sem drama",
      },
      {
        type: "p",
        text: "Um pedido de marcação já é dados pessoais. Nome, e-mail, serviço e janela chegam. Campos a mais sem uso real são ruído. Isto não substitui um jurista — é higiene de ecrã: menos campos, finalidade clara, confirmação honesta.",
      },
      {
        type: "note",
        text: "O formato está em Serviços. Para ensaiar o pedido, Marcar call. Para uma dúvida escrita, Contacto.",
      },
    ],
  },
  {
    slug: "como-escolher-agencia-de-websites",
    title: "Como escolher uma agência de websites",
    description:
      "Craft versus template, processo claro, preço transparente e sinais de parceiro — sem teatro de prémios.",
    date: "2026-09-06",
    topic: "agencia",
    blocks: [
      {
        type: "p",
        text: "A escolha má costuma ser a mais rápida: o portefólio mais brilhante, o «a partir de» mais baixo, ou quem promete conversão sem ver o negócio. Há critérios mais chatos e mais úteis.",
      },
      {
        type: "h2",
        text: "Craft vs template",
      },
      {
        type: "p",
        text: "Um tema premium com o logótipo colado não é direção. Craft é hierarquia: a oferta percebe-se, o próximo passo é óbvio, a prova só entra se existir. Se o site da própria agência for confuso, o vosso também será. Pode começar por Sobre.",
      },
      {
        type: "h2",
        text: "Clareza de processo",
      },
      {
        type: "p",
        text: "Brief → proposta → entrega. Páginas, formulários, marcações, prazo, o que não entra. Se a conversa foge para «depois vemos», o projecto cresce sem acordo. Em regra 2–4 semanas; o exacto fica na proposta.",
      },
      {
        type: "h2",
        text: "Preço transparente",
      },
      {
        type: "p",
        text: "Peça intervalos com âmbito. Os nossos, na FAQ: Essencial 490–790€, Presença 1200–1900€, Operação 1900–2900€. Manutenção à parte: Lite 49€, Ativa 99€, Parceiro 149€ por mês. Desconfie de um único número sem lista do que fica de fora.",
      },
      {
        type: "h2",
        text: "Sinais de parceiro",
      },
      {
        type: "ul",
        items: [
          "Casos com nome e contexto — ou a honestidade de dizer que ainda não há públicos",
          "Cópia em PT-PT se o negócio é em Portugal",
          "Uma call que pergunta, não um pitch que empurra",
          "Proposta curta: o que entra, o que não entra, o prazo",
        ],
      },
      {
        type: "p",
        text: "A conversa, se fizer sentido, começa em Marcar call. Sem compromisso.",
      },
    ],
  },
  {
    slug: "do-brief-ao-site-no-ar",
    title: "Do brief ao site no ar",
    description:
      "Como corre um projecto: brief, proposta, entrega e acompanhamento — call sem compromisso, 2–4 semanas em regra.",
    date: "2026-09-06",
    topic: "processo",
    blocks: [
      {
        type: "p",
        text: "Um site não começa no tema. Começa no brief: o que o negócio vende, quem visita, que formato faz sentido, o prazo real e o que conta como sucesso. Sem isto, a produção é decoração.",
      },
      {
        type: "h2",
        text: "Brief",
      },
      {
        type: "p",
        text: "Uma conversa curta, sem compromisso. Neste site o pedido vive em Marcar call — ainda como stub. O objectivo é perceber oferta, visitante, páginas, formulário ou marcações, e o que já existe.",
      },
      {
        type: "h2",
        text: "Proposta",
      },
      {
        type: "p",
        text: "Âmbito, prazo e preço por escrito. O projecto cai num intervalo da FAQ — Essencial, Presença ou Operação. Se o número ou o calendário não servirem, termina ali.",
      },
      {
        type: "h2",
        text: "Entrega",
      },
      {
        type: "p",
        text: "Site publicado no domínio combinado, conteúdo no sítio certo, e uma passagem breve pelo que ficou. Em regra 2–4 semanas. O calendário exacto fica na proposta — não num prazo de marketing.",
      },
      {
        type: "h2",
        text: "Acompanhamento",
      },
      {
        type: "p",
        text: "Iterações com intenção, não um saco de «ajustes rápidos» sem fim. Se houver manutenção, é linha própria: Lite 49€, Ativa 99€ ou Parceiro 149€ por mês. Quando o envio estiver ligado, a resposta prevista é em 24 horas úteis.",
      },
      {
        type: "note",
        text: "O método, em resumo, está em Sobre. Os formatos, em Serviços. Para começar: Marcar call ou Contacto.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

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

export function getRelatedPosts(slug: string, count = 3) {
  const current = getPost(slug);
  if (!current) return posts.slice(0, count);
  const sameTopic = posts.filter(
    (post) => post.slug !== slug && post.topic === current.topic
  );
  const others = posts.filter(
    (post) => post.slug !== slug && post.topic !== current.topic
  );
  return [...sameTopic, ...others].slice(0, count);
}

export function topicLabel(topic: BlogTopic) {
  return blogTopics.find((item) => item.id === topic)?.label ?? topic;
}

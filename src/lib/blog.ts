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
  blocks: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "quanto-custa-um-website-em-portugal",
    title: "Quanto custa um website em Portugal?",
    description:
      "O preço de um site em Portugal sai do âmbito — páginas, formulário, marcações e prazo — não de uma tabela de montra.",
    date: "2026-09-06",
    blocks: [
      {
        type: "p",
        text: "A pergunta chega cedo e é justa. A resposta honesta é outra pergunta: o que entra no site? Em Portugal há orçamentos de template, de agência e de freelancer. Não são o mesmo produto. A Kiko Agency não publica um «a partir de» porque esse número, sem âmbito, só serve de isco.",
      },
      {
        type: "h2",
        text: "O que realmente muda o preço",
      },
      {
        type: "ul",
        items: [
          "Número de páginas e a complexidade de cada uma",
          "Formulário de contacto ou pedido — e os estados (erro, envio, confirmação)",
          "Agendamento: stub, regras de disponibilidade, ou calendário ligado",
          "Textos e fotos: se já existem ou se têm de ser produzidos",
          "Prazo: uma entrega calma e uma entrega apertada não custam o mesmo",
          "O que fica de fora: anúncios, loja, apps, manutenção",
        ],
      },
      {
        type: "p",
        text: "Uma landing page com uma oferta e um CTA não se cota como um site de oito páginas com marcações. Quem junta tudo num único número está a vender um saco, não um projecto.",
      },
      {
        type: "h2",
        text: "O que deve estar escrito na proposta",
      },
      {
        type: "p",
        text: "Depois do brief, a proposta diz o formato (landing, multi-página, agendamento), as páginas, o que o formulário faz, o prazo e o preço. Diz também o que não entra. Foto, copy longa, anúncios ou retainer não devem aparecer escondidos no valor do site.",
      },
      {
        type: "note",
        text: "Neste site não há tabela pública. Há um caminho: Marcar call → brief → proposta. Se o número não servir, termina ali.",
      },
      {
        type: "h2",
        text: "Mensalidade",
      },
      {
        type: "p",
        text: "Muitos orçamentos misturam o site com alojamento e «manutenção». A Kiko Agency não vende mensalidade neste site. Se no futuro existir manutenção, é linha própria. Não está embutida no projecto.",
      },
      {
        type: "p",
        text: "Para perceber o formato antes do preço, leia Serviços. Para pedir um número com âmbito, use Contacto ou Marcar call.",
      },
    ],
  },
  {
    slug: "landing-page-vs-site-multi-pagina",
    title: "Landing page vs site multi-página",
    description:
      "Quando chega uma página com uma oferta — e quando o negócio precisa de várias páginas com navegação.",
    date: "2026-09-06",
    blocks: [
      {
        type: "p",
        text: "A diferença não é estética. É o trabalho da visita. Uma landing page tem uma oferta e um próximo passo. Um site multi-página tem várias entradas e uma navegação que não perde a pessoa.",
      },
      {
        type: "h2",
        text: "Landing page",
      },
      {
        type: "p",
        text: "Sirva quando o visitante chega por um motivo só: uma campanha, um serviço, um pedido. A página explica o essencial, mostra prova se existir, e pede a acção — call, formulário ou marcação. Se o menu leva a seis sítios, já não é landing: é um site a fingir que é uma página.",
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
        text: "Site multi-página",
      },
      {
        type: "p",
        text: "Sirva quando o negócio tem mais do que uma porta. Serviços, sobre, contacto, por vezes um artigo. A pessoa que chega pelo nome da empresa precisa de se orientar. O formulário é opcional: há quem só precise de presença e um telefone visível.",
      },
      {
        type: "h2",
        text: "E o agendamento?",
      },
      {
        type: "p",
        text: "Se o negócio vende tempo, a página ou o site pedem uma hora — não só um e-mail. Isso pode viver numa landing, num site, ou num fluxo próprio. O formato de Marcações na Kiko Agency trata o pedido, os campos e a confirmação. Neste site o calendário ainda é um stub.",
      },
      {
        type: "note",
        text: "Se não souber qual escolher, o brief decide. Não se começa por um tema premium e depois se encaixa o negócio.",
      },
      {
        type: "p",
        text: "Os três formatos estão em Serviços. Para discutir o vosso mapa de páginas, Marcar call.",
      },
    ],
  },
  {
    slug: "site-com-agendamento-e-marcacoes",
    title: "Site com agendamento e marcações — o que precisa",
    description:
      "O que um site de marcações tem de resolver: pedido, contexto, confirmação — e o que ainda é stub neste site.",
    date: "2026-09-06",
    blocks: [
      {
        type: "p",
        text: "Quem vende tempo não precisa só de um formulário «fale connosco». Precisa que o visitante peça uma hora com contexto suficiente para a outra ponta responder. Isso é um fluxo, não um widget decorativo.",
      },
      {
        type: "h2",
        text: "O que o fluxo tem de fazer",
      },
      {
        type: "ul",
        items: [
          "Deixar escolher o tipo de serviço ou conversa",
          "Pedir uma janela de horário, não só «quando quiser»",
          "Recolher contexto: o que o negócio faz, o prazo, o que já existe",
          "Mostrar o que acontece a seguir — confirmação, espera, ou «ainda não marcado»",
        ],
      },
      {
        type: "h2",
        text: "O que este site faz hoje",
      },
      {
        type: "p",
        text: "A página Marcar call é um stub: valida no browser e mostra confirmação local. Não cria evento, não envia convite, não ocupa uma slot real. Quando o calendário existir, usa o mesmo ecrã. Isso deve ficar escrito na proposta de qualquer cliente — stub e integração não se cobram iguais.",
      },
      {
        type: "h2",
        text: "O que preparar no brief",
      },
      {
        type: "p",
        text: "Que serviços se marcam. Quem confirma (automático ou humano). Que regras de disponibilidade existem. O que acontece se a hora não servir. Sem isto, o «agendamento» é um e-mail com outro nome.",
      },
      {
        type: "note",
        text: "RGPD: um pedido de marcação é dados pessoais. Campos a mais sem necessidade são um risco. Há um artigo sobre formulários e RGPD neste blog.",
      },
      {
        type: "p",
        text: "O formato está em Serviços. Para ensaiar o pedido, use Marcar call. Para uma dúvida escrita, Contacto.",
      },
    ],
  },
  {
    slug: "como-escolher-agencia-de-websites",
    title: "Como escolher agência de websites",
    description:
      "Critérios observáveis para escolher quem faz o site: âmbito, prova, língua, o que fica de fora — sem teatro de prémios.",
    date: "2026-09-06",
    blocks: [
      {
        type: "p",
        text: "A escolha má costuma ser a mais rápida: o portefólio mais brilhante, o «a partir de» mais baixo, ou a agência que promete conversão sem ver o negócio. Há critérios mais chatos e mais úteis.",
      },
      {
        type: "h2",
        text: "Peça o âmbito por escrito",
      },
      {
        type: "p",
        text: "Páginas, formulários, marcações, prazo, o que não entra. Se a conversa foge para «depois vemos», o projecto vai crescer sem acordo. Uma proposta curta e clara vale mais do que um PDF de 40 páginas com stock photos.",
      },
      {
        type: "h2",
        text: "Olhe para a prova com cuidado",
      },
      {
        type: "ul",
        items: [
          "Casos com nome e contexto, ou a honestidade de dizer que ainda não há públicos",
          "Ausência de ratings 5.0 inventados e de filas de logótipos sem autorização",
          "Um site da própria agência que se percebe — se o deles é confuso, o vosso também será",
        ],
      },
      {
        type: "h2",
        text: "Língua e sítio",
      },
      {
        type: "p",
        text: "Se o negócio é em Portugal, a cópia em PT-PT não é pormenor. Uma agência que escreve «contato» e «você» sem acordo está a importar outro mercado. A Kiko Agency é um estúdio em Portugal, domínio kiko-agency.pt, textos neste site em português europeu.",
      },
      {
        type: "h2",
        text: "O que a call deve produzir",
      },
      {
        type: "p",
        text: "Não um pitch. Um brief: oferta, visitante, formato, prazo, sucesso. Depois uma proposta. Se não houver encaixe, deve dizer-se. Desconfie de quem só quer «mandar uma proposta» sem perguntas.",
      },
      {
        type: "p",
        text: "Pode começar por Sobre e Serviços. A conversa começa em Marcar call.",
      },
    ],
  },
  {
    slug: "o-que-incluir-num-site-de-empresa",
    title: "O que incluir num site de empresa (checklist)",
    description:
      "Checklist honesta para um site de empresa em Portugal: oferta, páginas, prova, formulário e o que não precisa de entrar.",
    date: "2026-09-06",
    blocks: [
      {
        type: "p",
        text: "Um site de empresa não precisa de tudo. Precisa do suficiente para um visitante novo perceber o que se faz e o que fazer a seguir. Esta lista é um ponto de partida — não um contrato.",
      },
      {
        type: "h2",
        text: "O essencial",
      },
      {
        type: "ul",
        items: [
          "Uma frase de oferta que uma pessoa de fora percebe",
          "Páginas ou secções: o que fazem, para quem, como se começa",
          "Contacto visível — formulário, telefone ou marcação, conforme o negócio",
          "Quem está por trás, sem biografia de TED Talk",
          "O que acontece depois do pedido (prazo de resposta real, não «imediato»)",
        ],
      },
      {
        type: "h2",
        text: "Prova, só se existir",
      },
      {
        type: "p",
        text: "Nomes, projectos, números — com autorização. Se ainda não há, o sítio fica vazio. Inventar clientes é pior do que um espaço reservado. A página Trabalho deste site mostra o padrão vazio de propósito.",
      },
      {
        type: "h2",
        text: "O que costuma sobrar",
      },
      {
        type: "ul",
        items: [
          "Slider de heróis que ninguém lê",
          "Contadores animados sem fonte",
          "Seis CTAs a competir na mesma dobra",
          "Blog que nunca terá um artigo",
          "Chat que ninguém atende",
        ],
      },
      {
        type: "h2",
        text: "Formulário e dados",
      },
      {
        type: "p",
        text: "Peça o mínimo. Nome, e-mail, contexto. Se for marcação, serviço e janela. Explique o que acontece aos dados. O artigo sobre RGPD neste blog desenvolve isto — sem substituir um jurista.",
      },
      {
        type: "note",
        text: "A Kiko Agency desenha landing pages, sites multi-página e fluxos de marcação. A checklist acima cabe nesses três formatos; o detalhe fica na proposta.",
      },
      {
        type: "p",
        text: "Para ver os formatos, Serviços. Para um brief, Marcar call.",
      },
    ],
  },
  {
    slug: "rgpd-e-formularios-de-contacto",
    title: "RGPD e formulários de contacto",
    description:
      "O que um formulário de contacto em Portugal deve ter em conta: menos campos, finalidade clara, e a honestidade de um stub.",
    date: "2026-09-06",
    blocks: [
      {
        type: "p",
        text: "Isto não é aconselhamento jurídico. É uma lista de higiene para quem pede dados num site em Portugal. O RGPD trata dados pessoais: um e-mail de contacto já o é.",
      },
      {
        type: "h2",
        text: "Peça menos",
      },
      {
        type: "p",
        text: "Cada campo a mais é um dado a mais para guardar, explicar e apagar. Nome, e-mail e uma mensagem chegam para um primeiro contacto. Telefone, NIF ou «como nos conheceu» só entram se tiverem um uso real.",
      },
      {
        type: "h2",
        text: "Diga o que acontece",
      },
      {
        type: "ul",
        items: [
          "Para que serve o pedido (orçamento, call, suporte)",
          "Quem lê (o estúdio, não uma lista de parceiros inventada)",
          "Quanto tempo se guarda, em termos que uma pessoa percebe",
          "Como pedir a eliminação",
        ],
      },
      {
        type: "h2",
        text: "Stubs e honestidade",
      },
      {
        type: "p",
        text: "Os formulários deste site — Contacto e Marcar call — não enviam. Validam no browser e mostram confirmação local. Enquanto for assim, a página deve dizê-lo. Prometer «recebemos o seu e-mail» sem backend é o contrário de conformidade: é mentira.",
      },
      {
        type: "h2",
        text: "Quando o envio existir",
      },
      {
        type: "p",
        text: "Aí entram o destino do e-mail, o alojamento, eventuais processadores (formulários, calendário) e a política visível. A proposta de criar o site deve mencionar se o envio e o calendário fazem parte — não assumir que «formulário» inclui tudo.",
      },
      {
        type: "note",
        text: "Para um projecto real, fale com quem trate de privacidade. A Kiko Agency desenha o fluxo e os textos do ecrã; não substitui DPO nem advogado.",
      },
      {
        type: "p",
        text: "Os ecrãs de ensaio estão em Contacto e Marcar call. O formato de marcações está em Serviços.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

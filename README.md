# Kiko Agency

Site wireframe da [Kiko Agency](https://kiko-agency.pt) — Next.js (App Router), TypeScript e Tailwind. Cópia em português de Portugal. Paleta: navy `#0B1220`, cream `#F4EFE6`, coral-âmbar `#E8A87C`.

Lema provisório: «Tinta com direção. Sites que convertem.»

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Hero (H1 SEO + Marcar call + Ver serviços), prova social, serviços, Brief → Proposta → Entrega, FAQ |
| `/servicos` | Landing pages, sites multi-página (com/sem formulário), agendamento |
| `/trabalho` | Portefólio reservado — sem casos inventados |
| `/sobre` | Estúdio + mascote Kiko |
| `/contacto` | Formulário stub (confirmação local) |
| `/marcar-call` | Pedido de call stub (confirmação local) |

O Kiko (gota de tinta viva) aparece no hero, junto ao envio dos formulários e na confirmação. PNG com alpha (`public/kiko.png`) e SVG (`public/kiko.svg`). O componente usa `data-kiko-slot` e `data-state` (`idle` / `point` / `think` / `celebrate`) — flutua, aponta nos CTAs e celebra no sucesso. Gancho `motion` reservado para Rive/Lottie.

Há schema stub de Organization, Service e FAQPage. Os formulários **não enviam** dados.

Os formulários **não enviam** dados. São protótipos de fluxo.

## Requisitos

- Node.js 18.14 ou superior (22 recomendado, alinhado com o `netlify.toml`)
- npm

## Correr localmente

```bash
git clone https://github.com/iJohnny95/kiko-agency.git
cd kiko-agency
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
npm run build   # produção local
npm run start   # servir o build
npm run lint    # ESLint
```

Para testar redirects e o runtime Netlify no computador:

```bash
npm install -g netlify-cli
netlify dev
```

## Publicar na Netlify

O repositório já inclui `netlify.toml`:

- comando de build: `npm run build`
- pasta de publicação: `.next`
- Node 22

Netlify detecta Next.js e instala o runtime `@netlify/next` automaticamente. Não é preciso adaptador extra.

### A partir do GitHub (recomendado)

1. Entre em [app.netlify.com](https://app.netlify.com) e escolha **Add new site → Import an existing project**.
2. Ligue o repositório `iJohnny95/kiko-agency`.
3. Confirme o build (`npm run build`) e o publish (`.next`). Os valores do `netlify.toml` devem preencher-se sozinhos.
4. Deploy. Cada push à branch de produção actualiza o site; cada pull request gera um Deploy Preview.

O domínio previsto é `kiko-agency.pt`. Configure o DNS e o domínio personalizado no painel da Netlify quando o site existir.

### Pela CLI (deploy manual)

```bash
npm install -g netlify-cli
netlify login
netlify init          # ligar o site e o Git, ou
netlify init --manual # só deploy local
npm run build
netlify deploy        # rascunho
netlify deploy --prod # produção
```

Não commite a pasta `.netlify` (já está no `.gitignore`). Não coloque segredos no `netlify.toml`.

## Marca

- Nome: Kiko Agency
- Serviços: landing pages, sites multi-página, agendamento/marcações
- UI: PT-PT
- Mascote: Kiko — geometria macia, corpo navy, pontas âmbar, um olho a piscar

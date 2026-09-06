import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { Kiko } from "@/components/kiko";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { pages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.sobre.title,
  description: pages.sobre.description,
};

export default function SobrePage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Reveal className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Sobre</Eyebrow>
            <h1 className="text-4xl leading-[1.08] md:text-6xl">
              {pages.sobre.h1}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              A {site.name} faz sites high-end para negócios em Portugal —
              para serem percebidos, não para parecer ocupados. {site.domain}{" "}
              é o domínio previsto.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Os textos são provisórios. Não há biografia inflada nem «equipa
              de 40 pessoas».
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Kiko slot="hero" state="idle" size="md" />
          </Reveal>
        </div>
      </Section>
      <Section className="pb-24">
        <Reveal>
          <div className="grid gap-12 border-t border-foreground/8 pt-12 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl">Kiko</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A mascote é uma gota de tinta viva — geometria macia, corpo
                navy, pontas coral-âmbar, um olho a piscar. Vive no hero, no
                envio e na confirmação. Estados: idle, point, think, celebrate.
                PNG com alpha e SVG; Rive/Lottie podem entrar no mesmo
                `data-kiko-slot`.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl">Como trabalhamos</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Brief, proposta, entrega. Preferimos menos páginas bem
                escritas do que um site largo e vago. A conversão é um próximo
                passo óbvio — não um pop-up.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-12">
          <Cta href="/marcar-call">Marcar call</Cta>
        </Reveal>
      </Section>
    </>
  );
}

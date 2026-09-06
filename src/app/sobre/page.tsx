import type { Metadata } from "next";
import Link from "next/link";
import { Kiko } from "@/components/kiko";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem é a Kiko Agency e o que a mascote representa.",
};

export default function SobrePage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Sobre</Eyebrow>
            <h1 className="text-4xl leading-tight md:text-5xl">
              Um estúdio pequeno. Tinta com direção.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              A {site.name} faz sites para negócios que precisam de ser
              percebidos — não de parecer ocupados. Estamos em Portugal.
              {` `}
              {site.domain} é o domínio previsto.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Este site é um wireframe navegável: a estrutura, a paleta e o
              tom. Os textos são provisórios. Não há biografia inflada nem
              «equipa de 40 pessoas».
            </p>
          </div>
          <Kiko slot="hero" size="md" className="lg:mt-6" />
        </div>
      </Section>
      <Section className="pb-24">
        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl">Kiko</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A mascote é uma gota de tinta viva — geometria macia, corpo
              navy, pontas coral-âmbar, um olho a piscar. Aparece no hero, no
              envio de formulários e na confirmação. Por agora é estática; o
              componente já tem ganchos para Rive ou Lottie por slot.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl">Como trabalhamos</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Brief, proposta, entrega. Preferimos menos páginas bem
              escritas do que um site largo e vago. A conversão é um próximo
              passo óbvio — não um pop-up.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Button
            render={<Link href="/marcar-call" />}
            nativeButton={false}
            className="h-11 px-5"
          >
            Marcar call
          </Button>
        </div>
      </Section>
    </>
  );
}

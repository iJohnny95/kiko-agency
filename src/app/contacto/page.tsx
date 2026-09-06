import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.contacto.title,
  description: pages.contacto.description,
};

export default function ContactoPage() {
  return (
    <Section className="pt-16 pb-24 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="flex max-w-md flex-col gap-5">
          <Eyebrow>Contacto</Eyebrow>
          <h1 className="text-4xl leading-[1.08] md:text-6xl">
            {pages.contacto.h1}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Formulário-protótipo: valida no browser e mostra a confirmação com
            o Kiko. Não há backend de e-mail. Para pedir uma conversa, use
            Marcar call — também um stub.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-foreground/8 bg-card/70 p-5 shadow-[0_1px_0_color-mix(in_srgb,white_55%,transparent)_inset,0_24px_60px_-36px_color-mix(in_srgb,var(--navy)_28%,transparent)] backdrop-blur-md md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

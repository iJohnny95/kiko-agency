import type { Metadata } from "next";
import { ContactFaq } from "@/components/contact-faq";
import { ContactForm } from "@/components/contact-form";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/motion-primitives";
import { NextSteps } from "@/components/next-steps";
import { Band, Eyebrow, Section } from "@/components/section";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.contacto.title,
  description: pages.contacto.description,
};

export default function ContactoPage() {
  return (
    <Band flush>
      <Section className="section-y pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-8">
            <Reveal className="flex max-w-md flex-col gap-5">
              <Eyebrow>Contacto</Eyebrow>
              <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
                Contacto da{" "}
                <span className="text-gradient">Kiko Agency</span>
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground">
                Tinta com direção. Sites que convertem. Formulário-protótipo:
                valida no browser e mostra a confirmação local. Não há backend
                de e-mail. Para pedir uma conversa, use Marcar call — também um
                stub.
              </p>
            </Reveal>
            <NextSteps variant="contacto" />
            <ContactFaq />
            <Reveal>
              <Cta href="/marcar-call" variant="ctaOutline">
                Prefiro marcar call
              </Cta>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-cream/12 bg-card/80 p-5 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)] backdrop-blur-md md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </Band>
  );
}

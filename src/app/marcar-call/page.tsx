import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.marcarCall.title,
  description: pages.marcarCall.description,
};

export default function MarcarCallPage() {
  return (
    <Section className="pt-16 pb-24 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="flex max-w-md flex-col gap-5">
          <Eyebrow>Marcar call</Eyebrow>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
            Marcar call com a{" "}
            <span className="text-gradient">Kiko Agency</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Este pedido não cria um evento nem envia convite. Serve para
            ensaiar o fluxo: serviço, janela, contexto, confirmação.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-white/8 bg-card/80 p-5 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)] backdrop-blur-md md:p-8">
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

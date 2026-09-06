import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Eyebrow, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Marcar call",
  description: "Pedido de call — stub de agendamento, sem calendário ligado.",
};

export default function MarcarCallPage() {
  return (
    <Section className="pt-16 pb-24 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex max-w-md flex-col gap-5">
          <Eyebrow>Marcar call</Eyebrow>
          <h1 className="text-4xl leading-tight md:text-5xl">
            Uma conversa curta. Sem calendário ainda.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Este pedido não cria um evento nem envia convite. Serve para
            ensaiar o fluxo: serviço, janela, contexto, confirmação. O Kiko
            aparece no envio e no ecrã seguinte.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <BookingForm />
        </div>
      </div>
    </Section>
  );
}

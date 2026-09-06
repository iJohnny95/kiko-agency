import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Formulário de contacto — stub, sem envio real.",
};

export default function ContactoPage() {
  return (
    <Section className="pt-16 pb-24 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex max-w-md flex-col gap-5">
          <Eyebrow>Contacto</Eyebrow>
          <h1 className="text-4xl leading-tight md:text-5xl">
            Escreva. A resposta ainda não sai daqui.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Formulário-protótipo: valida no browser e mostra a confirmação com
            o Kiko. Não há backend de e-mail neste wireframe. Para pedir uma
            conversa com calendário, use Marcar call — também um stub.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

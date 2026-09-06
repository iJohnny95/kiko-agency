"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { faqs } from "@/lib/site";

export function FaqSection() {
  return (
    <Section id="faq" className="py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal className="flex max-w-md flex-col gap-5">
          <Eyebrow>Perguntas</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-5xl">
            Respostas curtas. Sem números inventados.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Bloco FAQ com schema FAQPage. Os preços e prazos ficam na proposta
            — não neste texto.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion>
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="font-heading py-4 text-left text-lg font-normal hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}

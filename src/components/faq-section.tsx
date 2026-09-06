"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Kiko } from "@/components/kiko";
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
            Preço, prazo e o que{" "}
            <span className="text-gradient">não inventamos</span>.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            FAQ com schema FAQPage. O preço sai da proposta depois do brief —
            sem tabela de montra.
          </p>
          <Kiko slot="faq" state="faq" size="md" className="mt-2 self-start" />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion>
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-4 text-left text-lg font-medium hover:no-underline">
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

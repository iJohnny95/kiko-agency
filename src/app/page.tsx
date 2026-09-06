import { Cta } from "@/components/cta";
import { FaqSection } from "@/components/faq-section";
import { HomeHero } from "@/components/hero";
import { ServiceIcon } from "@/components/icons";
import { faqSchema, JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/motion-primitives";
import { ProcessSection } from "@/components/process-section";
import { Eyebrow, Section } from "@/components/section";
import { SocialProof } from "@/components/social-proof";
import { Surface } from "@/components/surface";
import { services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <HomeHero />

      <div className="border-y border-foreground/8 bg-card/35">
        <SocialProof />
      </div>

      <Section className="py-20 md:py-28">
        <div className="flex flex-col gap-12">
          <Reveal className="flex max-w-xl flex-col gap-5">
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="text-3xl leading-tight md:text-5xl">
              Três formatos, um critério: clareza que converte.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08}>
                <Surface>
                  <ServiceIcon name={service.icon} className="text-foreground" />
                  <h3 className="font-heading text-2xl md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                </Surface>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Cta href="/servicos" variant="ctaOutline">
              Ver serviços
            </Cta>
          </Reveal>
        </div>
      </Section>

      <div className="border-t border-foreground/8">
        <ProcessSection />
      </div>

      <div className="border-y border-foreground/8">
        <FaqSection />
      </div>

      <div className="bg-primary text-primary-foreground">
        <Section className="py-20 md:py-24">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex max-w-xl flex-col gap-3">
              <h2 className="text-3xl leading-tight md:text-5xl">
                Uma call. Sem pitch longo.
              </h2>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                Pedido de marcação — ainda um stub. Serve para ensaiar o
                caminho até à conversa.
              </p>
            </div>
            <Cta href="/marcar-call" variant="ctaInverse">
              Marcar call
            </Cta>
          </Reveal>
        </Section>
      </div>
    </>
  );
}

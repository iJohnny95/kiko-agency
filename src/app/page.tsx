import { Audience } from "@/components/audience";
import { Cta } from "@/components/cta";
import { FaqSection } from "@/components/faq-section";
import { HomeHero } from "@/components/hero";
import { faqSchema, JsonLd } from "@/components/json-ld";
import { LogoStrip } from "@/components/logo-strip";
import { Reveal } from "@/components/motion-primitives";
import { ProcessSection } from "@/components/process-section";
import { Band, Section } from "@/components/section";
import { ServicesTabs } from "@/components/services-tabs";
import { StatsBand } from "@/components/stats-band";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Band flush>
        <HomeHero />
      </Band>
      <Band tone="alt">
        <Audience />
      </Band>
      <Band>
        <StatsBand />
      </Band>
      <Band tone="alt">
        <LogoStrip />
      </Band>
      <Band>
        <ServicesTabs />
      </Band>
      <Band tone="alt">
        <ProcessSection />
      </Band>
      <Band>
        <Testimonials />
      </Band>
      <Band tone="alt">
        <FaqSection />
      </Band>
      <Band>
        <Section className="section-y">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex max-w-xl flex-col gap-3">
              <h2 className="text-3xl leading-tight md:text-5xl">
                Uma call.{" "}
                <span className="text-gradient">Sem pitch longo.</span>
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Brief, proposta, entrega. O pedido de marcação neste site ainda
                é um stub — o caminho até à conversa é este.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Cta href="/marcar-call" className="w-full sm:w-auto">
                Marcar call
              </Cta>
              <Cta
                href="/contacto"
                variant="ctaOutline"
                className="w-full sm:w-auto"
              >
                Escrever
              </Cta>
            </div>
          </Reveal>
        </Section>
      </Band>
    </>
  );
}

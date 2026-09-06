import { Cta } from "@/components/cta";
import { FaqSection } from "@/components/faq-section";
import { HomeHero } from "@/components/hero";
import { faqSchema, JsonLd } from "@/components/json-ld";
import { LogoStrip } from "@/components/logo-strip";
import { Reveal } from "@/components/motion-primitives";
import { ProcessSection } from "@/components/process-section";
import { Section } from "@/components/section";
import { ServicesTabs } from "@/components/services-tabs";
import { StatsBand } from "@/components/stats-band";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <HomeHero />
      <StatsBand />
      <LogoStrip />
      <ServicesTabs />

      <div className="border-t border-white/8">
        <ProcessSection />
      </div>

      <div className="border-t border-white/8 bg-card/25">
        <Testimonials />
      </div>

      <div className="border-t border-white/8">
        <FaqSection />
      </div>

      <div className="border-t border-white/8 bg-card/40">
        <Section className="py-20 md:py-24">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex max-w-xl flex-col gap-3">
              <h2 className="text-3xl leading-tight md:text-5xl">
                Uma call.{" "}
                <span className="text-gradient">Sem pitch longo.</span>
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Pedido de marcação — ainda um stub. Serve para ensaiar o
                caminho até à conversa.
              </p>
            </div>
            <Cta href="/marcar-call">Marcar call</Cta>
          </Reveal>
        </Section>
      </div>
    </>
  );
}

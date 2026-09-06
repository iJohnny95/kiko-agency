import { Cta } from "@/components/cta";
import { FaqSection } from "@/components/faq-section";
import { HomeHero } from "@/components/hero";
import { ServiceIcon } from "@/components/icons";
import { faqSchema, JsonLd } from "@/components/json-ld";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { ProcessSection } from "@/components/process-section";
import { Eyebrow, Section } from "@/components/section";
import { StatsBand } from "@/components/stats-band";
import { Surface } from "@/components/surface";
import { Testimonials } from "@/components/testimonials";
import { services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <HomeHero />
      <StatsBand />

      <Section className="py-20 md:py-28">
        <div className="flex flex-col gap-12">
          <Reveal className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="text-3xl leading-tight md:text-5xl">
              Três formatos. Um critério:{" "}
              <span className="text-gradient">clareza que converte</span>.
            </h2>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Surface>
                  <ServiceIcon name={service.icon} className="text-foreground" />
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                </Surface>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <Cta href="/servicos" variant="ctaOutline">
              Ver serviços
            </Cta>
          </Reveal>
        </div>
      </Section>

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

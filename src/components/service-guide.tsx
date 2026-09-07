import { Cta } from "@/components/cta";
import { ServiceIcon } from "@/components/icons";
import { Reveal } from "@/components/motion-primitives";
import { Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { services } from "@/lib/site";

export function ServiceGuide() {
  return (
    <div className="border-t border-white/8">
      {services.map((service, index) => (
        <Section
          key={service.slug}
          id={service.slug}
          className="py-16 md:py-24"
        >
          <Reveal delay={index * 0.04} className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <ServiceIcon name={service.icon} className="text-foreground" />
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {service.title}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <Surface>
                <h3 className="text-lg font-semibold">Para quem é</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.forWho}
                </p>
              </Surface>
              <Surface>
                <h3 className="text-lg font-semibold">Processo</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.process}
                </p>
              </Surface>
            </div>
            <Surface>
              <h3 className="text-lg font-semibold">O que entra</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {service.includes.map((item) => (
                  <li key={item} className="border-l-2 border-accent pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
            <div className="grid gap-4 md:grid-cols-2">
              {service.objections.map((item) => (
                <Surface key={item.q}>
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </Surface>
              ))}
            </div>
            <div>
              <Cta href="/marcar-call">Pedir proposta</Cta>
            </div>
          </Reveal>
        </Section>
      ))}
    </div>
  );
}

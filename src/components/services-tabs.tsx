"use client";

import { Cta } from "@/components/cta";
import { ServiceIcon } from "@/components/icons";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/lib/site";

export function ServicesTabs({
  heading = true,
}: {
  heading?: boolean;
}) {
  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-10">
        {heading ? (
          <Reveal className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="text-3xl leading-tight md:text-5xl">
              Três formatos. Um critério:{" "}
              <span className="text-gradient">clareza que converte</span>.
            </h2>
          </Reveal>
        ) : null}

        <Reveal delay={0.06}>
          <Tabs defaultValue={services[0].slug} className="gap-6">
            <TabsList
              variant="line"
              className="flex h-auto w-full flex-wrap justify-start gap-1 border-b border-white/10 pb-0"
            >
              {services.map((service) => (
                <TabsTrigger
                  key={service.slug}
                  value={service.slug}
                  className="min-h-11 flex-none px-4 text-sm md:text-base"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.slug} value={service.slug}>
                <Surface className="md:flex-row md:items-start md:gap-10">
                  <ServiceIcon
                    name={service.icon}
                    className="shrink-0 text-foreground"
                  />
                  <div className="flex min-w-0 flex-col gap-5">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                    <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-accent pl-3 leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Cta href="/marcar-call">Pedir proposta</Cta>
                    </div>
                  </div>
                </Surface>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </Section>
  );
}

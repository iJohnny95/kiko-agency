"use client";

import { useState } from "react";
import { Cta } from "@/components/cta";
import { ServiceIcon } from "@/components/icons";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServicesTabs({
  heading = true,
}: {
  heading?: boolean;
}) {
  const [active, setActive] = useState<(typeof services)[number]["slug"]>(
    services[0].slug
  );
  const current =
    services.find((service) => service.slug === active) ?? services[0];

  return (
    <Section className="section-y">
      <div className="flex flex-col gap-10">
        {heading ? (
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="text-3xl leading-tight md:text-5xl">
              Três formatos. Um critério:{" "}
              <span className="text-gradient">clareza que converte</span>.
            </h2>
          </div>
        ) : null}

        <div className="flex flex-col gap-6">
          <div
            role="tablist"
            aria-label="Formatos de serviço"
            className="flex flex-nowrap gap-1 overflow-x-auto border-b border-white/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => {
              const selected = service.slug === active;
              return (
                <button
                  key={service.slug}
                  type="button"
                  role="tab"
                  id={`tab-${service.slug}`}
                  aria-selected={selected}
                  aria-controls={`panel-${service.slug}`}
                  data-active={selected ? "true" : "false"}
                  onClick={() => setActive(service.slug)}
                  className={cn(
                    "relative z-10 min-h-11 shrink-0 px-4 text-sm font-medium tracking-tight transition-colors md:text-base",
                    selected
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {service.title}
                  {selected ? (
                    <span className="absolute inset-x-3 bottom-0 h-0.5 bg-foreground" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${current.slug}`}
            aria-labelledby={`tab-${current.slug}`}
            data-service={current.slug}
          >
            <Surface className="md:flex-row md:items-start md:gap-10">
              <ServiceIcon
                name={current.icon}
                className="shrink-0 text-foreground"
              />
              <div className="flex min-w-0 flex-col gap-5">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {current.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {current.summary}
                </p>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {current.includes.map((item) => (
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
          </div>
        </div>
      </div>
    </Section>
  );
}

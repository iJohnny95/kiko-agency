import { Reveal } from "@/components/motion-primitives";
import { Section } from "@/components/section";
import { stats } from "@/lib/site";

export function StatsBand() {
  return (
    <div className="border-y border-white/8 bg-card/40">
      <Section className="py-14 md:py-16">
        <Reveal>
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <li key={stat.label} className="flex flex-col gap-2">
                <p className="text-gradient font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                  {stat.value}
                </p>
                <p className="text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </div>
  );
}

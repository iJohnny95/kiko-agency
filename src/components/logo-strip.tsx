import { Reveal } from "@/components/motion-primitives";
import { Section } from "@/components/section";
import { reservedMarks } from "@/lib/site";

export function LogoStrip() {
  return (
    <div className="border-b border-white/8">
      <Section className="py-10 md:py-12">
        <Reveal className="flex flex-col gap-6">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Marcas — só com autorização
          </p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {reservedMarks.map((mark) => (
              <li
                key={mark}
                className="flex min-h-16 items-center justify-center rounded-xl border border-dashed border-white/12 px-3 text-[0.65rem] tracking-[0.16em] text-white/35 uppercase"
              >
                Por publicar
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </div>
  );
}

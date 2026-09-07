import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { includedRows } from "@/lib/site";

export function IncludesTable() {
  return (
    <Section className="section-y">
      <Reveal className="mb-10 flex max-w-2xl flex-col gap-5">
        <Eyebrow>Âmbito</Eyebrow>
        <h2 className="text-3xl leading-tight md:text-5xl">
          O que inclui{" "}
          <span className="text-gradient">cada formato</span>.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          O detalhe fica na proposta. Esta tabela é o mapa honesto — sem extras
          de catálogo.
        </p>
      </Reveal>
      <Reveal delay={0.06} className="overflow-x-auto rounded-3xl border border-cream/12">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            O que inclui landing page, site multi-página e marcações
          </caption>
          <thead className="bg-navy-alt/80 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
            <tr>
              <th className="px-4 py-4 font-medium md:px-6">O que inclui</th>
              <th className="px-4 py-4 font-medium md:px-6">Landing</th>
              <th className="px-4 py-4 font-medium md:px-6">Multi-página</th>
              <th className="px-4 py-4 font-medium md:px-6">Marcações</th>
            </tr>
          </thead>
          <tbody>
            {includedRows.map((row) => (
              <tr key={row.label} className="border-t border-cream/10">
                <th className="px-4 py-3.5 font-medium text-foreground md:px-6">
                  {row.label}
                </th>
                <td className="px-4 py-3.5 text-muted-foreground md:px-6">
                  {row.landing}
                </td>
                <td className="px-4 py-3.5 text-muted-foreground md:px-6">
                  {row.multi}
                </td>
                <td className="px-4 py-3.5 text-muted-foreground md:px-6">
                  {row.booking}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}

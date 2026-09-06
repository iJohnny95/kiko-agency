import { cn } from "@/lib/utils";
import { collageTiles } from "@/lib/site";

const tones = {
  amber: "from-[#2a2118] to-[#151018]",
  navy: "from-[#121a2c] to-[#0b1020]",
  mist: "from-[#1a2230] to-[#10151f]",
} as const;

export function WorkCollage() {
  return (
    <div
      aria-label="Grelha de trabalho reservado"
      className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3"
    >
      {collageTiles.map((tile, index) => (
        <article
          key={tile.id}
          className={cn(
            "relative min-h-[210px] max-h-[220px] min-w-0 overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br p-3 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.7)] transition-transform duration-500",
            "md:max-h-none md:min-h-44",
            index === 0 && "lg:min-h-64",
            "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.8)]",
            tones[tile.tone]
          )}
        >
          <div className="mb-3 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/8" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
            <div className="h-2 w-1/2 rounded-full bg-white/10" />
            <div className="mt-1 grid grid-cols-3 gap-1.5">
              <div className="aspect-4/3 rounded-lg bg-white/8" />
              <div className="aspect-4/3 rounded-lg bg-white/12" />
              <div className="aspect-4/3 rounded-lg bg-[color-mix(in_srgb,var(--amber)_35%,transparent)]" />
            </div>
          </div>
          <p className="absolute right-3 bottom-3 text-[0.65rem] tracking-[0.16em] text-white/55 uppercase">
            {tile.label}
          </p>
        </article>
      ))}
    </div>
  );
}

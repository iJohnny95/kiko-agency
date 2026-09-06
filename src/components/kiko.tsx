import Image from "next/image";
import { cn } from "@/lib/utils";

export type KikoSlot = "hero" | "submit" | "confirmation";

export type KikoMotion = {
  kind: "rive" | "lottie";
  src: string;
};

type KikoProps = {
  slot: KikoSlot;
  className?: string;
  /** Reserved for a later Rive/Lottie runtime. Ignored while the asset is static. */
  motion?: KikoMotion;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "w-28",
  md: "w-44",
  lg: "w-72 md:w-80",
} as const;

/**
 * Kiko — living ink-drop mascot.
 * Static PNG for now. `data-kiko-slot` and `motion` are the hooks for a
 * future per-slot animation (Rive or Lottie) without changing call sites.
 */
export function Kiko({
  slot,
  className,
  motion,
  priority = false,
  size = "md",
}: KikoProps) {
  return (
    <div
      data-kiko-slot={slot}
      data-kiko-motion={motion ? `${motion.kind}:${motion.src}` : "static"}
      className={cn("relative mx-auto select-none", sizeClass[size], className)}
    >
      <Image
        src="/kiko.png"
        alt="Kiko, a mascote da Kiko Agency — uma gota de tinta viva"
        width={640}
        height={640}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

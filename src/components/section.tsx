import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  contained?: boolean;
};

export function Section({
  id,
  children,
  className,
  contained = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        contained && "mx-auto max-w-6xl px-6 md:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

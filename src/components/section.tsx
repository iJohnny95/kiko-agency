import { type ReactNode, type Ref } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  contained?: boolean;
  ref?: Ref<HTMLElement>;
};

export function Section({
  id,
  children,
  className,
  contained = true,
  ref,
}: SectionProps) {
  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "w-full",
        contained && "mx-auto max-w-6xl px-5 sm:px-6 md:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.22em] text-muted-foreground uppercase">
      <span className="inline-block h-px w-6 bg-accent" />
      {children}
    </p>
  );
}

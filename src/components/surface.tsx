import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Surface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/surface flex h-full flex-col gap-5 rounded-2xl border border-foreground/8 bg-card/65 p-6 shadow-[0_1px_0_color-mix(in_srgb,white_55%,transparent)_inset,0_24px_60px_-36px_color-mix(in_srgb,var(--navy)_28%,transparent)] backdrop-blur-md transition-[transform,box-shadow] duration-500 ease-out md:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}

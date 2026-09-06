"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site";

export function NavLinks({
  onNavigate,
  className,
  stacked = false,
}: {
  onNavigate?: () => void;
  className?: string;
  stacked?: boolean;
}) {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        stacked ? "flex flex-col gap-1" : "flex items-center gap-8",
        className
      )}
    >
      {navItems.map((item) => {
        const active = pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "relative inline-flex min-h-11 items-center tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-400 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
                stacked ? "text-3xl font-semibold" : "text-[0.85rem] font-medium",
                active
                  ? "text-foreground after:scale-x-100"
                  : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
              )}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

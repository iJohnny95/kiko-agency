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
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "relative inline-flex min-h-11 items-center tracking-wide transition-colors",
                stacked ? "text-3xl font-semibold" : "text-[0.85rem] font-medium",
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
              {active ? (
                <span className="absolute inset-x-0 -bottom-1 h-px bg-accent" />
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

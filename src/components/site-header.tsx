"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { Cta } from "@/components/cta";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 12);
      if (reduce) {
        setHidden(false);
      } else {
        const goingDown = y > last && y > 80;
        setHidden(goingDown);
      }
      last = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl transition-[transform,background-color,border-color,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        compact
          ? "border-white/12 bg-background/85"
          : "border-white/8 bg-background/70",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav className="hidden md:block" aria-label="Principal">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Cta href="/marcar-call" className="min-h-11 px-5 text-sm">
              Marcar call
            </Cta>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

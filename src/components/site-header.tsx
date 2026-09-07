"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Cta } from "@/components/cta";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { Wordmark } from "@/components/wordmark";
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
        "sticky top-0 z-40 border-b backdrop-blur-xl transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        compact
          ? "border-cream/12 bg-background/85"
          : "border-cream/10 bg-background/70",
        hidden ? "max-lg:translate-y-0 lg:-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center gap-4 px-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:px-6 md:px-8">
        <Wordmark />
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <nav aria-label="Principal">
            <NavLinks />
          </nav>
          <Cta
            href="/marcar-call"
            variant="ctaOutline"
            arrow
            className="min-h-10 px-5 text-sm"
          >
            Marcar call
          </Cta>
        </div>
        <div className="ml-auto lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

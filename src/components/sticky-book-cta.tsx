"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "motion/react";
import { Cta } from "@/components/cta";
import { cn } from "@/lib/utils";

export function StickyBookCta() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [floating, setFloating] = useState(false);
  const hide = pathname === "/marcar-call";

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hide) return null;

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/8 bg-background/80 px-[max(1.25rem,env(safe-area-inset-left))] pt-3 pr-[max(1.25rem,env(safe-area-inset-right))] pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <Cta href="/marcar-call" className="min-h-11 w-full">
          Marcar call
        </Cta>
      </div>
      <div
        className={cn(
          "fixed right-6 bottom-6 z-30 hidden md:block",
          reduce ? "" : "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          floating
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        <Cta href="/marcar-call">Marcar call</Cta>
      </div>
    </>
  );
}

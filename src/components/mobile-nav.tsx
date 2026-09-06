"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Cta } from "@/components/cta";
import { NavLinks } from "@/components/nav-links";
import { site } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-11 md:hidden"
          />
        }
      >
        <MenuGlyph open={open} />
        <span className="sr-only">{open ? "Fechar navegação" : "Abrir navegação"}</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-none border-l-foreground/8 bg-background/95 backdrop-blur-xl sm:max-w-sm"
      >
        <SheetHeader>
          <SheetTitle className="font-heading text-2xl tracking-[-0.04em]">
            {site.wordmark}
          </SheetTitle>
          <SheetDescription>Navegação do site.</SheetDescription>
        </SheetHeader>
        <nav className="px-5 pt-4">
          <NavLinks
            stacked
            onNavigate={() => setOpen(false)}
          />
        </nav>
        <div className="mt-auto p-5 pb-8">
          <Cta
            href="/marcar-call"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Marcar call
          </Cta>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 22 14" className="size-5" aria-hidden>
      <motion.rect
        x="0"
        width="22"
        height="1.6"
        rx="0.8"
        fill="currentColor"
        animate={open ? { y: 6.2, rotate: 40 } : { y: 1, rotate: 0 }}
        style={{ originX: "11px", originY: "0.8px" }}
      />
      <motion.rect
        x="0"
        width="22"
        height="1.6"
        rx="0.8"
        fill="currentColor"
        animate={open ? { y: 6.2, rotate: -40 } : { y: 11.4, rotate: 0 }}
        style={{ originX: "11px", originY: "0.8px" }}
      />
    </svg>
  );
}

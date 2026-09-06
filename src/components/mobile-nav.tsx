"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/components/nav-links";
import { site } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" />}
      >
        <MenuIcon />
        <span className="sr-only">Abrir navegação</span>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background">
        <SheetHeader>
          <SheetTitle>{site.name}</SheetTitle>
          <SheetDescription>Navegação do site.</SheetDescription>
        </SheetHeader>
        <nav className="px-4">
          <NavLinks
            className="flex-col items-start gap-5 py-2"
            onNavigate={() => setOpen(false)}
          />
        </nav>
        <div className="mt-auto p-4">
          <Button
            render={<Link href="/marcar-call" />}
            nativeButton={false}
            className="h-11 w-full px-5"
            onClick={() => setOpen(false)}
          >
            Marcar call
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

import Link from "next/link";
import { Cta } from "@/components/cta";
import { KikoMark } from "@/components/kiko";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <KikoMark className="h-7" />
          <span className="font-heading text-xl tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav className="hidden md:block" aria-label="Principal">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Cta href="/marcar-call" className="min-h-10 px-5 text-sm">
              Marcar call
            </Cta>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

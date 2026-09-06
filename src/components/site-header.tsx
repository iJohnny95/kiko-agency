import Link from "next/link";
import { Cta } from "@/components/cta";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 md:px-8">
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

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-[4.25rem] md:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-heading text-xl tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav className="hidden md:block" aria-label="Principal">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/marcar-call" />}
            nativeButton={false}
            className="hidden h-10 px-4 md:inline-flex"
          >
            Marcar call
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

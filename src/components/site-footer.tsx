import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Wordmark } from "@/components/wordmark";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-cream/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-16 sm:px-6 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="flex max-w-sm flex-col gap-3">
            <Wordmark />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
            <p className="text-sm text-muted-foreground">{site.domain}</p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/marcar-call"
                  className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Marcar call
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>Textos provisórios — sem métricas inventadas.</p>
          <p>Portugal · PT-PT</p>
        </div>
      </div>
    </footer>
  );
}

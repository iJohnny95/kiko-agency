import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="flex max-w-sm flex-col gap-3">
            <p className="font-heading text-2xl">{site.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
            <p className="text-sm text-muted-foreground">{site.domain}</p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/marcar-call"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Marcar call
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>Wireframe. Textos provisórios — sem métricas inventadas.</p>
          <p>Portugal · PT-PT</p>
        </div>
      </div>
    </footer>
  );
}

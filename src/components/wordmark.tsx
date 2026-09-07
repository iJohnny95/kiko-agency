import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Wordmark({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
    >
      <img
        src="/kiko-logo.svg"
        alt={site.name}
        width={108}
        height={40}
        className="h-7 w-auto md:h-8"
      />
    </Link>
  );
}

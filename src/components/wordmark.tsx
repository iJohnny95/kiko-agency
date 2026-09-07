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
      className={cn(
        "font-heading inline-flex items-start text-[1.35rem] font-semibold tracking-[-0.04em]",
        className
      )}
    >
      <span aria-hidden>KiKO</span>
      <svg
        viewBox="0 0 8 8"
        className="mt-1 ml-1 size-1.5 shrink-0"
        aria-hidden
      >
        <circle cx="4" cy="4" r="4" fill="#F08A3A" />
      </svg>
      <span className="sr-only">{site.name}</span>
    </Link>
  );
}

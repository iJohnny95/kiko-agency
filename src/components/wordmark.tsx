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
        "font-heading text-[1.35rem] font-semibold tracking-[-0.04em]",
        className
      )}
    >
      {site.wordmark}
      <span className="sr-only">{site.name}</span>
    </Link>
  );
}

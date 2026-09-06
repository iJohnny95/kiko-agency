"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";

type CtaProps = {
  href?: string;
  children: ReactNode;
  variant?: "cta" | "ctaOutline" | "ctaInverse";
  className?: string;
  type?: "button" | "submit";
  arrow?: boolean;
  onHoverChange?: (hovered: boolean) => void;
  onClick?: () => void;
};

export function Cta({
  href,
  children,
  variant = "cta",
  className,
  type = "button",
  arrow = false,
  onHoverChange,
  onClick,
}: CtaProps) {
  const hover = {
    onMouseEnter: () => onHoverChange?.(true),
    onMouseLeave: () => onHoverChange?.(false),
    onFocus: () => onHoverChange?.(true),
    onBlur: () => onHoverChange?.(false),
  };

  const button = href ? (
    <Button
      render={<Link href={href} />}
      nativeButton={false}
      variant={variant}
      className={cn("min-h-12 px-7", className)}
      onClick={onClick}
      {...hover}
    >
      {children}
      {arrow ? <span aria-hidden className="ml-1.5">→</span> : null}
    </Button>
  ) : (
    <Button
      type={type}
      variant={variant}
      className={cn("min-h-12 px-7", className)}
      onClick={onClick}
      {...hover}
    >
      {children}
      {arrow ? <span aria-hidden className="ml-1.5">→</span> : null}
    </Button>
  );

  return <Magnetic>{button}</Magnetic>;
}

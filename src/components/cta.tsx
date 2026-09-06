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
  onHoverChange?: (hovered: boolean) => void;
  onClick?: () => void;
};

export function Cta({
  href,
  children,
  variant = "cta",
  className,
  type = "button",
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
    </Button>
  );

  return <Magnetic>{button}</Magnetic>;
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  title?: string;
};

function Frame({
  className,
  title,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("size-12", className)}
      role="img"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconLanding({ className, title = "Landing page" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <rect x="12" y="6" width="24" height="36" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 14h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 20h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".55" />
      <circle cx="24" cy="33" r="4" fill="#E8A87C" />
    </Frame>
  );
}

export function IconPages({ className, title = "Site multi-página" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <rect x="8" y="12" width="18" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" opacity=".45" />
      <rect x="15" y="8" width="18" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" opacity=".7" />
      <rect x="22" y="5" width="18" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M27 14h8" stroke="#E8A87C" strokeWidth="1.6" strokeLinecap="round" />
    </Frame>
  );
}

export function IconBooking({ className, title = "Agendamento" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <rect x="8" y="11" width="32" height="28" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 20h32" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 8v6M32 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20" cy="28" r="2" fill="#E8A87C" />
      <circle cx="28" cy="28" r="2" fill="currentColor" opacity=".35" />
    </Frame>
  );
}

export function IconBrief({ className, title = "Brief" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <path
        d="M10 16c0-4 4-7 10-7 5 0 8 2 10 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M38 20c0 8-7 14-16 14H16l-6 7v-9c-2-2-4-6-4-10 0-8 7-14 16-14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="24" r="1.6" fill="#E8A87C" />
      <circle cx="26" cy="24" r="1.6" fill="#E8A87C" />
      <circle cx="32" cy="24" r="1.6" fill="#E8A87C" />
    </Frame>
  );
}

export function IconProposal({ className, title = "Proposta" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <path d="M12 8h18l8 8v24H12V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M30 8v8h8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18 24h12M18 30h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="31" cy="34" r="5" fill="#E8A87C" />
    </Frame>
  );
}

export function IconDelivery({ className, title = "Entrega" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <path d="M8 30V14l16-8 16 8v16l-16 8-16-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 14l16 8 16-8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 22v16" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 31l4 4 8-8" stroke="#E8A87C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

export function IconQuote({ className, title = "Depoimento" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <path d="M10 32c0-10 6-18 14-20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 32c0-10 6-18 14-20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="30" r="5.5" fill="#0B1220" />
      <circle cx="30" cy="30" r="5.5" fill="#0B1220" />
      <circle cx="17.5" cy="28.5" r="1.6" fill="#E8A87C" />
      <circle cx="31.5" cy="28.5" r="1.6" fill="#E8A87C" />
    </Frame>
  );
}

export function IconCase({ className, title = "Caso" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <rect x="7" y="10" width="34" height="26" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 18h34" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="13" cy="14" r="1.2" fill="#E8A87C" />
      <circle cx="18" cy="14" r="1.2" fill="currentColor" opacity=".35" />
      <path d="M14 26h12M14 31h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Frame>
  );
}

export function IconMark({ className, title = "Logótipo" }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M24 13c6 6 8 12 0 22C16 25 18 19 24 13Z"
        fill="#0B1220"
      />
      <circle cx="24" cy="20" r="2.2" fill="#E8A87C" />
    </Frame>
  );
}

const serviceIcons = {
  landing: IconLanding,
  pages: IconPages,
  booking: IconBooking,
} as const;

const processIcons = {
  brief: IconBrief,
  proposal: IconProposal,
  delivery: IconDelivery,
} as const;

export function ServiceIcon({
  name,
  className,
}: {
  name: keyof typeof serviceIcons;
  className?: string;
}) {
  const Cmp = serviceIcons[name];
  return <Cmp className={className} />;
}

export function ProcessIcon({
  name,
  className,
}: {
  name: keyof typeof processIcons;
  className?: string;
}) {
  const Cmp = processIcons[name];
  return <Cmp className={className} />;
}

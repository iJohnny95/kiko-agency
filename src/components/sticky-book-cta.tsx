import { Cta } from "@/components/cta";

export function StickyBookCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/8 bg-background/80 px-[max(1.25rem,env(safe-area-inset-left))] pt-3 pr-[max(1.25rem,env(safe-area-inset-right))] pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <Cta href="/marcar-call" className="min-h-11 w-full">
        Marcar call
      </Cta>
    </div>
  );
}

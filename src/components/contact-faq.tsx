import Link from "next/link";
import { Reveal } from "@/components/motion-primitives";
import { Surface } from "@/components/surface";
import { contactFaqs } from "@/lib/site";

export function ContactFaq() {
  return (
    <Reveal className="flex flex-col gap-4">
      <h2 className="text-2xl leading-tight md:text-3xl">
        Perguntas curtas
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground">
        A FAQ completa — preço, prazo, o que inclui — está na{" "}
        <Link
          href="/#faq"
          className="text-foreground underline decoration-accent/60 underline-offset-3 hover:decoration-accent"
        >
          página inicial
        </Link>
        .
      </p>
      <div className="flex flex-col gap-3">
        {contactFaqs.map((item) => (
          <Surface key={item.q} className="gap-2 p-5 md:p-6">
            <h3 className="text-base font-semibold tracking-tight">{item.q}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </Surface>
        ))}
      </div>
    </Reveal>
  );
}

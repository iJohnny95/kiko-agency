"use client";

import { useState } from "react";
import { Cta } from "@/components/cta";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [phase, setPhase] = useState<"edit" | "submit" | "done">("edit");

  if (phase === "submit") {
    return (
      <div className="flex flex-col items-center gap-5 py-8 text-center">
        <p className="text-sm text-muted-foreground">A confirmar neste ecrã…</p>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="flex flex-col items-center gap-6 py-6 text-center">
        <div className="flex max-w-md flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Recebido — neste ecrã.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Este formulário é um stub: a mensagem não foi enviada. Quando o
            envio estiver ligado, a confirmação real usa este mesmo ecrã.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Cta
            variant="ctaOutline"
            className="w-full sm:w-auto"
            onClick={() => setPhase("edit")}
          >
            Escrever outra
          </Cta>
          <Cta href="/" className="w-full sm:w-auto">
            Voltar ao início
          </Cta>
        </div>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(event) => {
        event.preventDefault();
        setPhase("submit");
        window.setTimeout(() => setPhase("done"), 800);
      }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="nome">Nome</FieldLabel>
          <Input
            id="nome"
            name="nome"
            required
            autoComplete="name"
            className="h-12 px-3.5"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-12 px-3.5"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="mensagem">Mensagem</FieldLabel>
          <Textarea
            id="mensagem"
            name="mensagem"
            required
            rows={6}
            className="min-h-36 px-3.5"
            placeholder="O que precisa, o prazo, e como prefere ser contactado."
          />
          <FieldDescription>
            Stub de contacto: o envio só confirma no browser.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <Cta type="submit" className="w-full sm:w-auto">
        Enviar mensagem
      </Cta>
    </form>
  );
}

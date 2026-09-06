"use client";

import { useState } from "react";
import { Cta } from "@/components/cta";
import { Kiko, type KikoState } from "@/components/kiko";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [state, setState] = useState<KikoState>("think");

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-6 py-6 text-center">
        <Kiko slot="confirmation" state="celebrate" size="md" />
        <div className="flex max-w-md flex-col gap-3">
          <h2 className="text-3xl md:text-4xl">Recebido — neste ecrã.</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Este formulário é um stub: a mensagem não foi enviada. Quando o
            envio estiver ligado, a confirmação real usa este mesmo sítio do
            Kiko.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Cta variant="ctaOutline" className="w-full sm:w-auto" onClick={() => setSent(false)}>
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
        setSent(true);
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
            onFocus={() => setState("think")}
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
            onFocus={() => setState("think")}
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
            onFocus={() => setState("think")}
          />
          <FieldDescription>
            Stub de contacto: o envio só confirma no browser.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
        <Kiko slot="submit" state={state} size="sm" />
        <Cta
          type="submit"
          className="w-full sm:w-auto"
          onHoverChange={(hovered) => setState(hovered ? "point" : "think")}
        >
          Enviar mensagem
        </Cta>
      </div>
    </form>
  );
}

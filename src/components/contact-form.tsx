"use client";

import { useState } from "react";
import Link from "next/link";
import { Kiko } from "@/components/kiko";
import { Button } from "@/components/ui/button";
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

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <Kiko slot="confirmation" size="md" />
        <div className="flex max-w-md flex-col gap-3">
          <h2 className="text-3xl">Recebido — neste ecrã.</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Este formulário é um stub: a mensagem não foi enviada para lado
            nenhum. Quando o envio estiver ligado, a confirmação real usa este
            mesmo sítio do Kiko.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            className="h-11 px-5"
            onClick={() => setSent(false)}
          >
            Escrever outra
          </Button>
          <Button
            render={<Link href="/" />}
            nativeButton={false}
            className="h-11 px-5"
          >
            Voltar ao início
          </Button>
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
          <Input id="nome" name="nome" required autoComplete="name" className="h-11 px-3" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-11 px-3"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="mensagem">Mensagem</FieldLabel>
          <Textarea
            id="mensagem"
            name="mensagem"
            required
            rows={6}
            className="min-h-36 px-3"
            placeholder="O que precisa, o prazo, e como prefere ser contactado."
          />
          <FieldDescription>
            Stub de contacto: o envio só confirma no browser.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <div className="flex items-end justify-between gap-6">
        <Kiko slot="submit" size="sm" className="hidden sm:block" />
        <Button type="submit" className="h-11 px-6">
          Enviar mensagem
        </Button>
      </div>
    </form>
  );
}

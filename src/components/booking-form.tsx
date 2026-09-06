"use client";

import { useState } from "react";
import { Cta } from "@/components/cta";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const serviceOptions = [
  { value: "landing", label: "Landing page" },
  { value: "multi", label: "Site multi-página" },
  { value: "booking", label: "Agendamento" },
  { value: "outro", label: "Ainda não sei" },
] as const;

export function BookingForm() {
  const [phase, setPhase] = useState<"edit" | "submit" | "done">("edit");
  const [service, setService] = useState("landing");

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
            Pedido de call registado aqui.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Ainda não há calendário ligado. Este ecrã é o sítio da confirmação
            para quando o pedido passar a chegar de verdade.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Cta
            variant="ctaOutline"
            className="w-full sm:w-auto"
            onClick={() => setPhase("edit")}
          >
            Novo pedido
          </Cta>
          <Cta href="/servicos" variant="ctaOutline" className="w-full sm:w-auto">
            Ver serviços
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
          <FieldLabel htmlFor="booking-nome">Nome</FieldLabel>
          <Input
            id="booking-nome"
            name="nome"
            required
            autoComplete="name"
            className="h-12 px-3.5"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="booking-email">E-mail</FieldLabel>
          <Input
            id="booking-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-12 px-3.5"
          />
        </Field>
        <Field>
          <FieldTitle id="servico-label">Serviço em mente</FieldTitle>
          <ToggleGroup
            aria-labelledby="servico-label"
            value={[service]}
            onValueChange={(value) => {
              if (value[0]) setService(value[0]);
            }}
            spacing={2}
            className="flex-wrap"
          >
            {serviceOptions.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                variant="outline"
                className="min-h-11 px-3"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <input type="hidden" name="servico" value={service} />
        </Field>
        <Field>
          <FieldLabel htmlFor="horario">Janela preferida</FieldLabel>
          <Input
            id="horario"
            name="horario"
            className="h-12 px-3.5"
            placeholder="Ex.: terças de manhã, hora de Lisboa"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contexto">Contexto</FieldLabel>
          <Textarea
            id="contexto"
            name="contexto"
            rows={5}
            className="min-h-28 px-3.5"
            placeholder="O que está a vender, se já tem site, e o prazo."
          />
          <FieldDescription>
            Stub de marcação: não cria evento nem envia e-mail.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <Cta type="submit" className="w-full sm:w-auto">
        Pedir call
      </Cta>
    </form>
  );
}

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
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("landing");

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <Kiko slot="confirmation" size="md" />
        <div className="flex max-w-md flex-col gap-3">
          <h2 className="text-3xl">Pedido de call registado aqui.</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Ainda não há calendário ligado. Este ecrã é o sítio da confirmação
            — com o Kiko — para quando o pedido passar a chegar de verdade.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            className="h-11 px-5"
            onClick={() => setSent(false)}
          >
            Novo pedido
          </Button>
          <Button
            render={<Link href="/servicos" />}
            nativeButton={false}
            variant="outline"
            className="h-11 px-5"
          >
            Ver serviços
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
          <FieldLabel htmlFor="booking-nome">Nome</FieldLabel>
          <Input
            id="booking-nome"
            name="nome"
            required
            autoComplete="name"
            className="h-11 px-3"
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
            className="h-11 px-3"
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
                className="h-10 px-3"
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
            className="h-11 px-3"
            placeholder="Ex.: terças de manhã, hora de Lisboa"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contexto">Contexto</FieldLabel>
          <Textarea
            id="contexto"
            name="contexto"
            rows={5}
            className="min-h-28 px-3"
            placeholder="O que está a vender, se já tem site, e o prazo."
          />
          <FieldDescription>
            Stub de marcação: não cria evento nem envia e-mail.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <div className="flex items-end justify-between gap-6">
        <Kiko slot="submit" size="sm" className="hidden sm:block" />
        <Button type="submit" className="h-11 px-6">
          Pedir call
        </Button>
      </div>
    </form>
  );
}

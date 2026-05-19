"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const connectionOptions = [
  "Conhecer melhor o projeto",
  "Conversar sobre parceria",
  "Conhecer a LIR",
  "Carta de intenção",
  "ESG e sustentabilidade",
  "Economia circular"
];

export function LandingInterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      role: String(formData.get("role") || ""),
      email: String(formData.get("email") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      interests: formData.getAll("interests").map(String),
      message: String(formData.get("message") || "")
    };

    if (!payload.interests.length) {
      setError("Selecione pelo menos uma opção de interesse.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/landing-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(result?.message || "Não foi possível enviar o formulário.");
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Não foi possível enviar agora. Tente novamente em instantes ou fale pelo WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit} data-form="ecocredito-lead">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" name="name" autoComplete="name" required />
        <Field label="Empresa" name="company" autoComplete="organization" required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Cargo" name="role" autoComplete="organization-title" />
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
      </div>
      <Field label="WhatsApp" name="whatsapp" autoComplete="tel" required />

      <fieldset className="grid gap-3 rounded-lg border bg-eco-warm/60 p-4">
        <legend className="px-1 text-sm font-semibold text-eco-deep">
          Como sua organização gostaria de se conectar com a EcoCrédito?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {connectionOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-muted-foreground">
              <input name="interests" value={option} type="checkbox" className="h-4 w-4 accent-eco-gold" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-2">
        <Label htmlFor="message">Mensagem opcional</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="min-h-28 rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm outline-none transition placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-eco-gold"
          placeholder="Conte rapidamente como sua organização deseja se conectar com a EcoCrédito."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-eco-gold text-eco-deep hover:bg-eco-amber md:w-fit"
        data-track="landing-form-submit"
        data-intent="lead-capture"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Quero continuar essa conversa
      </Button>

      {submitted ? (
        <p className="rounded-md border border-eco-moss/25 bg-eco-mint px-4 py-3 text-sm font-medium text-eco-deep" role="status">
          Obrigada pelo interesse na EcoCrédito. Recebemos sua manifestação e entraremos em contato em breve.
        </p>
      ) : null}
      {error ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} autoComplete={autoComplete} required={required} className="bg-white" />
    </div>
  );
}

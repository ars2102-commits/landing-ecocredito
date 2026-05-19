"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { FileText, Handshake, Presentation, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const materials = [
  {
    title: "Apresentação EcoCrédito",
    description: "Conheça a visão, estrutura e proposta da EcoCrédito.",
    action: "Visualizar apresentação",
    href: "/documents/apresentacao-ecocredito.pdf",
    previewClass: "brand-gradient",
    icon: Presentation
  },
  {
    title: "One Page EcoCrédito LIR",
    description: "Resumo institucional do projeto em análise na Lei de Incentivo à Reciclagem.",
    action: "Visualizar material",
    preview: "/images/one-page-ecocredito-lir.png",
    icon: FileText
  },
  {
    title: "Por que emitir uma carta de intenção?",
    description: "Entenda como sua organização pode fortalecer a implantação da EcoCrédito.",
    action: "Visualizar material",
    preview: "/images/one-page-carta-intencao.png",
    icon: Handshake
  }
];

export function LandingInstitutionalMaterials() {
  const [active, setActive] = useState<(typeof materials)[number] | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {materials.map((material) => (
          <Card
            key={material.title}
            className="group overflow-hidden border-eco-deep/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-eco-gold/50 hover:shadow-premium"
          >
            <div className={`relative aspect-[4/3] overflow-hidden bg-eco-deep ${material.previewClass || ""}`}>
              {material.preview ? (
                <img src={material.preview} alt="" className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.035]" />
              ) : (
                <div className="flex h-full items-center justify-center p-8 text-center text-white">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-eco-amber">Apresentação executiva</p>
                    <h3 className="mt-3 font-display text-3xl font-black leading-tight">Apresentação EcoCrédito</h3>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-eco-deep/88 via-eco-deep/10 to-transparent" />
              <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-md bg-eco-gold text-eco-deep shadow-glow">
                <material.icon className="h-5 w-5" />
              </span>
            </div>
            <CardContent className="flex min-h-64 flex-col p-6">
              <h3 className="font-display text-2xl font-black leading-tight text-eco-deep">{material.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{material.description}</p>
              {material.href ? (
                <Button asChild className="mt-auto w-full bg-eco-gold text-eco-deep hover:bg-eco-amber" data-track="material-presentation" data-intent="presentation-material">
                  <a href={material.href} target="_blank" rel="noreferrer">
                    {material.action}
                  </a>
                </Button>
              ) : (
                <Button
                  type="button"
                  className="mt-auto w-full bg-eco-deep text-white hover:bg-eco-forest"
                  onClick={() => setActive(material)}
                  data-track={`material-${material.title.toLowerCase().replaceAll(" ", "-")}`}
                  data-intent="institutional-material"
                >
                  {material.action}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {active?.preview ? (
        <ModalFrame onClose={() => setActive(null)} label={active.title}>
          <div className="grid max-h-[88vh] overflow-y-auto bg-eco-warm lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-eco-gold">Material institucional</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight text-eco-deep">{active.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{active.description}</p>
              <Button asChild className="mt-6 bg-eco-gold text-eco-deep hover:bg-eco-amber" data-track="material-contact" data-intent="qualified-lead">
                <a href="#contato" onClick={() => setActive(null)}>
                  Conversar sobre este material
                </a>
              </Button>
            </div>
            <div className="bg-white p-4">
              <img src={active.preview} alt={active.title} className="h-full max-h-[82vh] w-full rounded-md object-contain object-top" />
            </div>
          </div>
        </ModalFrame>
      ) : null}
    </>
  );
}

function ModalFrame({ children, onClose, label }: { children: ReactNode; onClose: () => void; label: string }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-eco-deep/72 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={label}>
      <div className="relative w-full max-w-6xl overflow-hidden rounded-lg shadow-glow">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-eco-deep shadow-sm transition hover:bg-eco-gold"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

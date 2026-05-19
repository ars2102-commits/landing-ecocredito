"use client";

import { useState } from "react";
import { BarChart3, Building2, Gift, Maximize2, Minus, Plus, Recycle, Truck, Wallet, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const callouts = [
  { label: "Destinação", icon: Recycle },
  { label: "EcoCréditos", icon: Wallet },
  { label: "ESG", icon: Building2 },
  { label: "Operação", icon: Truck },
  { label: "Inteligência", icon: BarChart3 },
  { label: "Benefícios", icon: Gift }
];

export function LandingEcosystemMap() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1.12);

  return (
    <>
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div className="group relative overflow-hidden rounded-lg border border-eco-deep/10 bg-white shadow-premium">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block w-full text-left"
            data-track="ecosystem-map-preview"
            data-intent="explore-ecosystem"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-white">
              <img
                src="/images/mapa-ecossistema-ecocredito.png"
                alt="Mapa do Ecossistema EcoCrédito"
                className="h-full w-full scale-[1.08] object-cover object-center opacity-95 transition duration-700 group-hover:scale-[1.12]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-deep/82 via-eco-deep/8 to-white/0" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-xl text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-eco-amber">Preview do ecossistema</p>
                  <h3 className="mt-2 font-display text-2xl font-black">Uma visão integrada da operação.</h3>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-md bg-eco-gold px-4 py-3 text-sm font-bold text-eco-deep shadow-glow transition group-hover:bg-eco-amber">
                  <Maximize2 className="h-4 w-4" />
                  Explorar ecossistema
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {callouts.map(({ label, icon: Icon }) => (
            <div key={label} className="rounded-lg border bg-white p-4 shadow-sm transition duration-300 hover:border-eco-gold/40 hover:shadow-premium">
              <Icon className="h-5 w-5 text-eco-leaf" />
              <p className="mt-3 text-sm font-semibold text-eco-deep">{label}</p>
            </div>
          ))}
          <div className="rounded-lg border border-eco-gold/40 bg-secondary p-4 sm:col-span-2">
            <p className="text-sm font-semibold leading-6 text-eco-deep">
              Ecossistema em implantação via Lei de Incentivo à Reciclagem (LIR).
            </p>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[90] bg-eco-warm/96 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label="Explorar ecossistema EcoCrédito">
          <div className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-lg border bg-white shadow-glow">
            <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-eco-gold">Ecossistema EcoCrédito</p>
                <h2 className="font-display text-2xl font-black text-eco-deep">Explore a infraestrutura em implantação</h2>
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" variant="outline" size="icon" onClick={() => setZoom((value) => Math.max(0.8, value - 0.16))} aria-label="Reduzir zoom">
                  <Minus className="h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" size="icon" onClick={() => setZoom((value) => Math.min(1.8, value + 0.16))} aria-label="Aumentar zoom">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" size="icon" onClick={() => setOpen(false)} aria-label="Fechar mapa">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto bg-eco-warm p-4">
              <div className="min-h-full min-w-full rounded-lg bg-white p-4 shadow-sm">
                <img
                  src="/images/mapa-ecossistema-ecocredito.png"
                  alt="Mapa completo do Ecossistema EcoCrédito"
                  className="mx-auto max-w-none rounded-md transition duration-300"
                  style={{ width: `${zoom * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

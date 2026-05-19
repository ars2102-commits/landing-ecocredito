"use client";

import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingImagePreview({
  src,
  alt,
  buttonLabel = "Ampliar visualização",
  track = "image-preview"
}: {
  src: string;
  alt: string;
  buttonLabel?: string;
  track?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-white shadow-premium">
        <div className="relative max-h-[620px] overflow-hidden bg-eco-warm">
          <img src={src} alt={alt} className="w-full object-contain object-top" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-eco-deep/88 to-transparent p-5">
            <Button
              type="button"
              className="bg-eco-gold text-eco-deep hover:bg-eco-amber"
              onClick={() => setOpen(true)}
              data-track={track}
              data-intent="image-expand"
            >
              <Maximize2 className="h-4 w-4" />
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[90] bg-eco-warm/96 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={alt}>
          <div className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-lg border bg-white shadow-glow">
            <div className="flex items-center justify-between border-b p-4">
              <p className="font-display text-2xl font-black text-eco-deep">{alt}</p>
              <Button type="button" variant="outline" size="icon" onClick={() => setOpen(false)} aria-label="Fechar visualização">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto bg-eco-warm p-4">
              <img src={src} alt={alt} className="mx-auto max-h-none max-w-full rounded-md bg-white object-contain shadow-sm" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

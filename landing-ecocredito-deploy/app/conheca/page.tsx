import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Database,
  FileText,
  Handshake,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Recycle,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  type LucideIcon
} from "lucide-react";
import { LandingEcosystemMap } from "@/components/landing-ecosystem-map";
import { LandingImagePreview } from "@/components/landing-image-preview";
import { LandingInstitutionalMaterials } from "@/components/landing-institutional-materials";
import { LandingInterestForm } from "@/components/landing-interest-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "EcoCrédito | Hub Institucional LIR",
  description:
    "Hub institucional da EcoCrédito para parceiros, empresas, investidores de impacto, ESG e apoiadores da Lei de Incentivo à Reciclagem.",
  openGraph: {
    title: "EcoCrédito — Transformando resíduos em oportunidades",
    description:
      "Ecossistema ESG em análise na LIR para economia circular, inclusão social, logística reversa, rastreabilidade e impacto sustentável.",
    type: "website"
  }
};

const ecosystemPillars: { title: string; icon: LucideIcon }[] = [
  { title: "Incentivo econômico", icon: Recycle },
  { title: "Logística reversa", icon: Truck },
  { title: "ESG", icon: BarChart3 },
  { title: "Rastreabilidade", icon: ShieldCheck },
  { title: "Inclusão financeira", icon: Wallet },
  { title: "Dados inteligentes", icon: Database },
  { title: "Economia circular", icon: Leaf }
];

const flow: { title: string; icon: LucideIcon }[] = [
  { title: "Pessoa/Empresa", icon: Users },
  { title: "Destinação correta", icon: Recycle },
  { title: "EcoCrédito valida", icon: ShieldCheck },
  { title: "Benefícios", icon: Wallet },
  { title: "ESG e dados", icon: BarChart3 },
  { title: "Impacto territorial", icon: MapPin }
];

const b2bCards: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Logística reversa", text: "Estrutura para apoiar programas, parceiros e obrigações ambientais.", icon: Recycle },
  { title: "ESG", text: "Indicadores para comunicação, decisão e prestação de contas.", icon: BarChart3 },
  { title: "Responsabilidade compartilhada", text: "Aderência ao princípio de corresponsabilidade entre atores da cadeia.", icon: Scale },
  { title: "Dados e rastreabilidade", text: "Base para inteligência territorial, compliance e operação SISREV-ready.", icon: TrendingUp }
];

const trustBadges = ["SISREV-ready", "ESG & Compliance", "Responsabilidade Compartilhada", "Rastreabilidade de Impacto"];

const regulatoryChallenges = [
  "PNRS exige responsabilidade compartilhada",
  "SISREV demanda registro e rastreabilidade",
  "Baixa adesão territorial reduz escala",
  "Rastreabilidade fragmentada dificulta comprovação",
  "Operação sem capilaridade limita impacto real",
  "Vão de execução entre regra, território e comprovação"
];

const partnershipCards: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Incentivador via LIR", text: "Apoio institucional e incentivo para implantação do ecossistema.", icon: Building2 },
  { title: "Parceiro Estratégico", text: "Tecnologia, operação, território, comunicação ou estruturação executiva.", icon: Handshake },
  { title: "Empresa ESG", text: "Logística reversa, rastreabilidade, compliance e indicadores de impacto.", icon: Leaf },
  { title: "Carta de Intenção", text: "Manifestação de interesse que fortalece a análise e a aprovação do projeto.", icon: FileText }
];

export default function ConhecaPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-eco-ink">
      <header className="sticky top-0 z-50 border-b bg-eco-warm/92 px-6 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center rounded-md p-2" aria-label="EcoCrédito Valor Sustentável">
            <img src="/images/brand/ecocredito-logo.png" alt="EcoCrédito Valor Sustentável" className="h-16 w-auto object-contain sm:h-[72px]" />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {[
              ["Vídeo", "#video"],
              ["Ecossistema", "#ecossistema"],
              ["Mapa", "#mapa-ecossistema"],
              ["LIR", "#status"],
              ["Apresentação", "#arquitetura"],
              ["Materiais", "#materiais"],
              ["Contato", "#contato"]
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-eco-deep/78 transition hover:bg-eco-deep/10 hover:text-eco-deep"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden bg-eco-gold text-eco-deep hover:bg-eco-amber sm:inline-flex" data-track="header-whatsapp" data-intent="partner-talk">
            <a href="https://wa.me/5527996236706" target="_blank" rel="noreferrer">
              Conversar
            </a>
          </Button>
        </div>
      </header>

      <section className="eco-grid relative overflow-hidden border-b">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/90 to-transparent" />
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[1fr_0.74fr] lg:py-16">
          <div className="relative z-10 reveal-soft">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/92 px-3 py-1 text-sm font-bold text-eco-deep shadow-sm">
              <Sparkles className="h-4 w-4 text-eco-gold" />
              Projeto em análise na Lei de Incentivo à Reciclagem (LIR)
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-black tracking-normal text-eco-deep sm:text-5xl lg:text-6xl">
              Transformando resíduos em renda, inclusão e impacto sustentável.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A EcoCrédito conecta economia circular, logística reversa e impacto ESG para transformar resíduos em valor real para pessoas,
              empresas e territórios.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-eco-gold text-eco-deep shadow-glow hover:bg-eco-amber" data-track="hero-know" data-intent="learn">
                <Link href="#video">
                  Conheça a EcoCrédito <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white" data-track="hero-partnership" data-intent="partner-talk">
                <a href="https://wa.me/5527996236706" target="_blank" rel="noreferrer">
                  Conversar sobre parceria
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-full border bg-white/82 px-3 py-1.5 text-xs font-semibold text-eco-deep shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-eco-leaf" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 reveal-soft">
            <div className="rounded-lg border border-eco-deep/10 bg-white/94 p-6 shadow-sm backdrop-blur transition duration-300 hover:shadow-premium">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-eco-gold">Estrutura em implantação</p>
              <div className="mt-5 grid gap-3">
                {[
                  ["LIR", "Projeto em análise para implantação incentivada."],
                  ["ESG", "Rastreabilidade, dados e relatórios de impacto."],
                  ["Impacto", "Renda, inclusão e circularidade territorial."]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-md border border-eco-deep/10 bg-eco-warm/80 p-4 transition duration-300 hover:border-eco-gold/50 hover:bg-white">
                    <p className="font-bold text-eco-deep">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-eco-leaf via-eco-gold to-eco-moss" />
      </section>

      <Section id="video" eyebrow="Apresentação" title="Conheça a EcoCrédito em minutos">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="overflow-hidden rounded-lg border bg-eco-deep shadow-premium">
            <video
              className="aspect-video w-full bg-eco-deep"
              src="/videos/video-residuos-em-oportunidades.mp4"
              poster="/images/video-residuos-oportunidades-cover.png"
              controls
              playsInline
            />
            <div className="border-t border-white/10 bg-eco-deep p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-eco-gold">Conheça nossa visão de implantação</p>
              <Button asChild className="mt-3 w-full bg-eco-gold text-eco-deep hover:bg-eco-amber" data-track="video-architecture-pdf" data-intent="architecture-material">
                <a href="/documents/apresentacao-ecocredito.pdf" target="_blank" rel="noreferrer">
                  Apresentação EcoCrédito
                </a>
              </Button>
            </div>
          </div>
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              Entenda como a EcoCrédito pretende transformar resíduos recicláveis em benefícios financeiros, rastreabilidade,
              impacto ESG e inclusão social.
            </p>
            <Button asChild className="mt-6 bg-eco-gold text-eco-deep hover:bg-eco-amber" data-track="video-contact" data-intent="learn-more">
              <Link href="#contato">
                Quero conhecer melhor
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section id="ecossistema" eyebrow="O que é a EcoCrédito" title="Uma infraestrutura de incentivo econômico para economia circular.">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              A EcoCrédito foi criada para transformar a destinação correta de resíduos em valor real para pessoas, empresas e
              cidades, conectando tecnologia, operação, benefícios, dados e impacto socioambiental.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ecosystemPillars.map(({ title, icon: Icon }) => (
                <div key={title} className="flex items-center gap-3 rounded-lg border bg-white p-4 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-eco-mint text-eco-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold text-eco-deep">{title}</p>
                </div>
              ))}
            </div>
          </div>
          <LandingImagePreview
            src="/images/one-page-ecocredito.png"
            alt="One Page EcoCrédito"
            buttonLabel="Ampliar visualização"
            track="one-page-ecocredito-expand"
          />
        </div>
      </Section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-lg border border-eco-deep/10 bg-white px-6 py-8 shadow-sm md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-eco-gold">Storytelling do impacto</p>
            <h2 className="mt-3 font-display text-3xl font-black text-eco-deep">Da destinação correta ao impacto real.</h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-muted-foreground md:grid-cols-4">
              {[
                "Pessoas destinam resíduos.",
                "Empresas fortalecem ESG.",
                "Parceiros incentivam comportamento sustentável.",
                "Tudo conectado em um único ecossistema."
              ].map((item) => (
                <div key={item} className="rounded-md border border-eco-deep/10 bg-eco-warm/70 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mapa-ecossistema" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-eco-gold">Mapa do ecossistema</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-normal text-eco-deep sm:text-4xl">
                O Ecossistema EcoCrédito em ação
              </h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground">
              Uma infraestrutura integrada conectando pessoas, empresas, benefícios, rastreabilidade e impacto socioambiental.
            </p>
          </div>
          <LandingEcosystemMap />
        </div>
      </section>

      <Section id="como-funciona" eyebrow="Como funciona" title="Da destinação correta ao indicador ESG rastreável.">
        <div className="rounded-lg border bg-white p-4 shadow-premium sm:p-6">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {flow.map(({ title, icon: Icon }, index) => (
              <div key={title} className="relative">
                <Card className="h-full bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-eco-gold/40 hover:shadow-premium">
                  <CardContent className="p-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-eco-deep text-eco-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-sm font-semibold leading-6 text-eco-deep">{title}</p>
                  </CardContent>
                </Card>
                {index < flow.length - 1 ? (
                  <div className="pointer-events-none absolute left-[calc(100%-0.25rem)] top-1/2 hidden h-px w-8 bg-eco-gold/60 xl:block">
                    <div className="flow-line h-px w-full bg-eco-gold" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="empresas" eyebrow="B2B e parceiros" title="Também criada para empresas e parceiros">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {b2bCards.map(({ title, text, icon: Icon }) => (
            <Card key={title} className="bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-eco-gold/40 hover:shadow-premium">
              <CardContent className="p-5">
                <Icon className="h-7 w-7 text-eco-leaf" />
                <h3 className="mt-5 font-display text-xl font-black text-eco-deep">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <section id="status" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid overflow-hidden rounded-lg border border-eco-gold/40 bg-white shadow-premium lg:grid-cols-[0.95fr_1.05fr]">
            <div className="brand-gradient p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-eco-amber">Fase atual</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-tight">Em análise na LIR</h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                A EcoCrédito encontra-se em fase de análise na Lei de Incentivo à Reciclagem para implantação do ecossistema.
              </p>
            </div>
            <div className="p-8 sm:p-10">
              <p className="font-semibold text-eco-deep">Os recursos captados serão destinados à:</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Estruturação tecnológica", "Implantação territorial", "Integração operacional", "Geração de impacto socioambiental"].map((item) => (
                  <div key={item} className="rounded-md border bg-eco-warm p-4 text-sm font-semibold text-eco-deep">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-eco-gold/50 bg-secondary p-5">
                <p className="text-lg font-black text-eco-deep">Cartas de intenção fortalecem significativamente a aprovação do projeto.</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Não representam obrigação financeira imediata, mas demonstram apoio institucional e relevância de mercado.
                </p>
              </div>
              <Button asChild className="mt-6 bg-eco-gold text-eco-deep hover:bg-eco-amber" data-track="status-letter-contact" data-intent="letter-intent">
                <Link href="#contato">
                  Conversar sobre carta de intenção
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="arquitetura" eyebrow="Apresentação EcoCrédito" title="Inteligência garante conformidade. Operação garante impacto.">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-display text-2xl font-black text-eco-deep">O desafio da execução regulatória</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Entre a obrigação regulatória e o impacto comprovado existe um vão de execução: adesão territorial, rastreabilidade,
                operação contínua e inteligência para tomada de decisão.
              </p>
              <div className="mt-5 grid gap-3">
                {regulatoryChallenges.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border bg-eco-warm p-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco-leaf" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-5 md:grid-cols-2">
            <LayerCard
              title="Camada 1 — EcoCrédito"
              subtitle="Inteligência"
              items={["Rastreabilidade", "Dashboards ESG", "Compliance", "Indicadores", "Auditoria", "SISREV-ready"]}
              icon={Database}
            />
            <LayerCard
              title="Camada 2 — EcoReversa"
              subtitle="Operação"
              items={["Relacionamento", "Coleta", "Segregação", "Destinação correta", "Capilaridade territorial", "Integração local"]}
              icon={Route}
            />
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Força motriz territorial", "EcoReversa cria relacionamento, coleta, segregação e capilaridade local."],
            ["Motor analítico", "EcoCrédito organiza indicadores, compliance, dashboards, auditoria e rastreabilidade."],
            ["Expansão do ecossistema", "A integração permite escalar benefícios, dados ESG e logística reversa em novos territórios."]
          ].map(([title, text]) => (
            <Card key={title} className="bg-white shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-display text-xl font-black text-eco-deep">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild className="mt-8 bg-eco-gold text-eco-deep hover:bg-eco-amber" data-track="presentation-pdf" data-intent="presentation-material">
          <a href="/documents/apresentacao-ecocredito.pdf" target="_blank" rel="noreferrer">
            Ver visão executiva completa
          </a>
        </Button>
      </Section>

      <Section id="materiais" eyebrow="Materiais institucionais" title="Conteúdos oficiais para análise e avanço da conversa institucional.">
        <LandingInstitutionalMaterials />
      </Section>

      <section id="parceria" className="border-y bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-eco-gold">Convite à parceria</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-normal text-eco-deep sm:text-4xl">
                Vamos construir essa transformação juntos?
              </h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground">
              Buscamos organizações comprometidas com sustentabilidade, impacto social, logística reversa e inovação ESG.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {partnershipCards.map(({ title, text, icon: Icon }) => (
              <Card key={title} className="border-eco-deep/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-eco-gold/40 hover:shadow-premium">
                <CardContent className="p-5">
                  <Icon className="h-8 w-8 text-eco-leaf" />
                  <h3 className="mt-5 font-display text-xl font-black text-eco-deep">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 bg-eco-gold text-eco-deep hover:bg-eco-amber" data-track="partnership-whatsapp" data-intent="partner-talk">
            <a href="https://wa.me/5527996236706" target="_blank" rel="noreferrer">
              Conversar com a EcoCrédito <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Section id="contato" eyebrow="Formulário curto" title="Demonstre interesse na EcoCrédito">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <Card className="bg-eco-deep text-white shadow-premium">
            <CardContent className="p-6">
              <Mail className="h-10 w-10 text-eco-amber" />
              <h3 className="mt-5 text-2xl font-semibold">Destino dos QR Codes institucionais</h3>
              <p className="mt-4 text-sm leading-7 text-white/74">
                Este hub organiza o primeiro contato com empresas, investidores, ESG, órgãos públicos e potenciais apoiadores da LIR.
              </p>
              <div className="mt-8 flex items-start gap-3 text-sm text-white/78">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-eco-amber" />
                <span>Contato comercial e institucional: (27) 99623-6706</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <LandingInterestForm />
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex items-center gap-4">
            <img src="/images/brand/ecocredito-logo.png" alt="EcoCrédito Valor Sustentável" className="h-20 w-auto object-contain" />
            <div>
              <p className="text-lg font-bold text-eco-leaf">EcoCrédito Valor Sustentável</p>
              <p className="mt-1 text-sm text-muted-foreground">Economia circular com renda, rastreabilidade e impacto institucional.</p>
              <span className="mt-3 inline-flex rounded-full border border-eco-gold/40 bg-secondary px-3 py-1 text-xs font-bold text-eco-deep">
                Projeto em análise na LIR
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground lg:justify-end">
            <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 transition hover:border-eco-gold/50 hover:bg-eco-warm hover:text-eco-deep" href="https://wa.me/5527996236706" target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4 text-eco-leaf" />
              WhatsApp
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 transition hover:border-eco-gold/50 hover:bg-eco-warm hover:text-eco-deep" href="mailto:ecocredito.2025@gmail.com">
              <Mail className="h-4 w-4 text-eco-leaf" />
              E-mail
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 transition hover:border-eco-gold/50 hover:bg-eco-warm hover:text-eco-deep" href="https://www.instagram.com/ecocredito" target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4 text-eco-leaf" />
              Instagram
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 transition hover:border-eco-gold/50 hover:bg-eco-warm hover:text-eco-deep" href="https://www.linkedin.com/company/ecocredito" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4 text-eco-leaf" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-eco-gold">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-normal text-eco-deep sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function LayerCard({
  title,
  subtitle,
  items,
  icon: Icon
}: {
  title: string;
  subtitle: string;
  items: string[];
  icon: LucideIcon;
}) {
  return (
    <Card className="bg-white shadow-premium">
      <CardContent className="p-6">
        <Icon className="h-9 w-9 text-eco-leaf" />
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-eco-gold">{subtitle}</p>
        <h3 className="mt-2 font-display text-2xl font-black text-eco-deep">{title}</h3>
        <div className="mt-5 grid gap-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <BadgeCheck className="h-4 w-4 text-eco-leaf" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

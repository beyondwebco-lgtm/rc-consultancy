import Image from "next/image";
import Link from "next/link";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  FileCheck,
  ShieldCheck,
  CheckCircle,
  Headphones,
  FileSearch,
  Send,
  Sparkles,
  MapPin,
  Calendar,
  Building,
} from "lucide-react";

export default function HomePage() {
  const whyPillars = [
    {
      title: "Clear Guidance",
      description:
        "Transparent explanations of government rules, HS codes, and statutory procedures without legal jargon or confusion.",
      icon: FileSearch,
    },
    {
      title: "Accurate Documentation",
      description:
        "Meticulous verification of commercial papers and applications before submission to minimize port hold-ups and rejections.",
      icon: FileCheck,
    },
    {
      title: "Compliance-Focused",
      description:
        "Dedicated strictly to legitimate statutory requirements under DGFT, Customs, Legal Metrology, and environmental boards.",
      icon: ShieldCheck,
    },
    {
      title: "Responsive Support",
      description:
        "Direct communication with knowledgeable trade advisors who track and address your queries during business hours.",
      icon: Headphones,
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Share Your Requirement",
      description:
        "Tell us about your commodity, intended trading country, and whether you need new registrations or shipment documentation.",
      icon: Send,
    },
    {
      step: "02",
      title: "Document Review",
      description:
        "We audit your entity records, invoices, bank letters, or licenses to ensure complete alignment with government portals.",
      icon: FileCheck,
    },
    {
      step: "03",
      title: "Application & Filing Support",
      description:
        "We prepare the filing dossier, verify DSC/credentials, and submit through the designated authority system.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Completion & Guidance",
      description:
        "You receive your approved registration, certificates, or checklist, along with guidance on recurring statutory updates.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FB] to-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E9F0] bg-white px-3.5 py-1.5 shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-[#0E9AA7]" />
                <span className="text-xs font-semibold text-[#0B2545]">
                  Import Export & Regulatory Compliance
                </span>
              </div>

              <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-[#0B2545] sm:text-5xl sm:leading-tight lg:text-[52px]">
                Import Export & Compliance,{" "}
                <span className="text-[#0E9AA7]">Made Simple.</span>
              </h1>

              <p className="mt-5 text-base font-medium text-[#0B2545]/90 sm:text-lg">
                {companyData.tagline}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#64748B] sm:text-base">
                We assist exporters, importers, and manufacturers with registrations, statutory documentation, and regulatory compliance to streamline their cross-border operations.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B2545] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#133966] hover:shadow-md active:scale-98"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={companyData.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E9F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#0B2545] shadow-2xs transition-all hover:border-[#25D366] hover:bg-[#F7F9FB] active:scale-98"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Verified Trust points */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#E5E9F0] pt-6 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0E9AA7]" />
                  <span>DGFT & Customs Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0E9AA7]" />
                  <span>Pre-filing Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0E9AA7]" />
                  <span>Direct Advisor Contact</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Frame */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB] shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                    alt="Commercial container ship at port handling international freight and cargo"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/40 via-transparent to-transparent" />
                </div>

                {/* Soft overlay badge */}
                <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto rounded-xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6F7] text-[#0E9AA7]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0B2545]">
                        Est. {companyData.established}
                      </p>
                      <p className="text-xs text-[#64748B]">
                        Bhiwandi, Maharashtra · India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW (10 minimal cards) */}
      <section className="bg-white py-20 sm:py-24" id="services">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              badge="Our Services"
              title="Comprehensive Import-Export Solutions"
              subtitle="Focused strictly on statutory trade registrations, portal filings, and cargo documentation support."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E9AA7] hover:text-[#0B2545] transition-colors"
            >
              <span>Explore all services in detail</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY RC (4 Honest Pillars) */}
      <section className="border-t border-[#E5E9F0] bg-[#F7F9FB] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Work With Us"
            title="A Pragmatic, Compliance-First Approach"
            subtitle="We build our reputation on meticulous paperwork, transparent facts, and prompt advisory without exaggerated promises."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-[#E5E9F0] bg-white p-7 shadow-2xs transition-all hover:shadow-xs"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2545] text-white">
                    <Icon className="h-6 w-6 text-[#0E9AA7]" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#0B2545]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (4 Steps Timeline) */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple Process"
            title="How We Work With You"
            subtitle="A structured 4-step workflow that keeps your trade applications clear, documented, and traceable."
            align="center"
          />

          {/* Timeline */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4 relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-[#E5E9F0] z-0" />

            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white bg-[#0B2545] text-white shadow-md">
                    <Icon className="h-6 w-6 text-[#0E9AA7]" />
                  </div>
                  <span className="mt-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
                    Step {step.step}
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-[#0B2545]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B] max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. IMAGE BAND */}
      <section className="relative overflow-hidden bg-[#0B2545] py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
          alt="Modern logistics freight container terminal supporting global maritime trade"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0E9AA7]">
            Global Commerce Support
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Supporting businesses in global trade.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Providing reliable documentation, proactive compliance guidance, and seamless portal processing for traders in India and international supply networks.
          </p>
        </div>
      </section>

      {/* 6. FOUNDER CARD */}
      <section className="border-t border-[#E5E9F0] bg-[#F7F9FB] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#E5E9F0] bg-white p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#0B2545] text-white font-heading text-2xl font-bold">
                RC
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
                  Leadership & Guidance
                </span>
                <h3 className="mt-1 font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  {companyData.founder.name}
                </h3>
                <p className="text-xs font-medium text-[#64748B]">
                  {companyData.founder.designation} · {companyData.name}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#334155] sm:text-sm">
                  {companyData.founder.shortBio}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E9F0] pt-5 text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-[#0B2545]" />
                <span>Headquartered in Bhiwandi, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0B2545]" />
                <span>Founded {companyData.established}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BAND (Navy background) */}
      <section className="bg-[#0B2545] py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
            Need help with import-export registration or compliance?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            Get straightforward advice from our trade documentation specialist. No automated bots, direct professional support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={companyData.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0B2545] shadow-xs transition-all hover:bg-slate-100 active:scale-98"
            >
              <Phone className="h-4 w-4 text-[#0E9AA7]" />
              <span>Call {companyData.contact.phone}</span>
            </a>

            <a
              href={companyData.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#20ba5a] active:scale-98"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { documentationCategories } from "@/data/documentationCategories";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { InstagramIcon } from "@/components/InstagramIcon";
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
  Award,
  Layers,
  Clock,
  Users,
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
      {/* 1. HERO MAIN BANNER SECTION (As requested in user instructions) */}
      <section className="relative w-full overflow-hidden bg-[#07192F] text-white">
        {/* Banner Image with high-contrast gradient overlays for desktop and mobile */}
        <div className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] w-full flex items-center">
          <Image
            src="/images/hero-banner.jpg"
            alt="Commercial cargo container ship at deepwater port harbor during sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Multi-layered cinematic gradient overlay to ensure text is crisply legible on any device */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07192F]/95 via-[#0B2545]/85 to-[#07192F]/60 sm:via-[#0B2545]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-black/30" />

          {/* Banner Hero Content */}
          <div className="relative z-10 mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-2xl sm:max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#0E9AA7] animate-pulse" />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  Import Export & Regulatory Compliance
                </span>
              </div>

              {/* Prominent Banner Heading */}
              <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl sm:leading-tight lg:text-6xl">
                <span className="text-[#38BDF8]">Welcome to</span>{" "}
                <span className="text-[#0E9AA7] bg-gradient-to-r from-[#0E9AA7] to-[#40C9FF] bg-clip-text text-transparent">
                  RC CONSULTANCY
                </span>
              </h1>

              <p className="mt-4 text-base font-medium text-slate-200 drop-shadow sm:text-xl">
                {companyData.tagline}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm max-w-xl">
                Professional guidance for DGFT licensing, customs documentation, RCMC councils, EPR environmental filings, and bilateral trade agreements.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E9AA7] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#0c8894] hover:shadow-cyan-900/40 active:scale-98"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={companyData.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-emerald-400 active:scale-98"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/20 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <Layers className="h-4 w-4 text-[#0E9AA7]" />
                  <span>Documentation Services</span>
                </Link>
              </div>

              {/* Fast trust ticks */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-[11px] sm:text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#0E9AA7]" />
                  <span>Verified DGFT & Customs Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#0E9AA7]" />
                  <span>Transparent Pre-filing Audit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#0E9AA7]" />
                  <span>Direct Professional Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROVEN TRACK RECORD / STATS SECTION (User requested: Experience 8 months+, Documents Completed 250+, Business Clients Served 50+) */}
      <section className="relative z-20 -mt-6 sm:-mt-8 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 rounded-2xl border border-[#E5E9F0] bg-white p-4 sm:p-6 shadow-xl">
          {companyData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 p-3 sm:p-4 ${
                idx !== 0 ? "sm:border-l sm:border-[#E5E9F0]" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F6F7] text-[#0E9AA7]">
                {idx === 0 && <Clock className="h-6 w-6" />}
                {idx === 1 && <FileCheck className="h-6 w-6" />}
                {idx === 2 && <Users className="h-6 w-6" />}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#0B2545] uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DOCUMENTATION SERVICES PREVIEW (Categorized Directory Preview) */}
      <section className="bg-white py-16 sm:py-24" id="services">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              badge="Our Services"
              title="Documentation Services Directory"
              subtitle="Statutory registrations, foreign trade agreements, export promotion councils, and specialized cargo documentation."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E9AA7] hover:text-[#0B2545] transition-colors"
            >
              <span>Explore full directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Quick Categories Overview Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documentationCategories.slice(0, 6).map((cat) => (
              <div
                key={cat.id}
                className="group rounded-2xl border border-[#E5E9F0] bg-[#FAFBFC] p-6 shadow-2xs transition-all hover:border-[#0E9AA7]/50 hover:bg-white hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-lg bg-[#FAF0F0] px-2.5 py-1 text-[11px] font-bold text-[#991B1B] uppercase tracking-wider">
                      {cat.title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#64748B]">
                      {cat.items.length} Services
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-[#64748B] leading-relaxed">
                    {cat.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-[#E5E9F0] pt-3 text-xs text-[#334155]">
                    {cat.items.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0E9AA7]" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                    {cat.items.length > 4 && (
                      <li className="text-[11px] font-medium text-[#0E9AA7] pt-1">
                        + {cat.items.length - 4} more in this category
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E5E9F0]">
                  <Link
                    href={`/services#${cat.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2545] group-hover:text-[#0E9AA7] transition-colors"
                  >
                    <span>View Category Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B2545] px-6 py-3 text-xs font-semibold text-white shadow-xs hover:bg-[#133966] transition-colors"
            >
              <span>View All Documentation Categories & Portals</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY RC (4 Honest Pillars) */}
      <section className="border-t border-[#E5E9F0] bg-[#F7F9FB] py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
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

      {/* 5. HOW IT WORKS (4 Steps Timeline) */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple Process"
            title="How We Work With You"
            subtitle="A structured 4-step workflow that keeps your trade applications clear, documented, and traceable."
            align="center"
          />

          {/* Timeline */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4 relative">
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

      {/* 6. FOUNDER CARD SECTION (Executive Spotlight - Clean, Spacious & Prominent) */}
      <section className="border-t border-[#E2E8F0] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/60 to-[#F8FAFC] py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0E9AA7]/20 bg-[#E7F6F7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
              Leadership & Advisory
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0B2545] sm:text-3xl lg:text-4xl">
              Direct Trade Guidance & Operations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B] sm:text-base">
              Every client filing and documentation strategy is directly guided with statutory precision, verified trade accuracy, and transparent client communication.
            </p>
          </div>

          {/* Elevated Executive Spotlight Card */}
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-xl shadow-slate-200/60">
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-12">
                {/* Founder Photo Column */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-2 border-white bg-[#F7F9FB] shadow-md ring-1 ring-[#0B2545]/10 sm:h-52 sm:w-52 lg:h-56 lg:w-56">
                    <Image
                      src={companyData.founder.photo}
                      alt={companyData.founder.name}
                      width={240}
                      height={240}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-xs font-medium text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Direct Regulatory Oversight</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col items-center justify-between gap-3 sm:flex-row md:items-center">
                    <span className="inline-flex items-center rounded-full bg-[#0E9AA7]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
                      Trade Advisor & Operations
                    </span>
                    {/* Official Instagram Link */}
                    <a
                      href={companyData.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#E1306C]/30 bg-[#FDF2F4] px-4 py-1.5 text-xs font-semibold text-[#E1306C] shadow-xs transition-all hover:bg-[#E1306C] hover:text-white"
                    >
                      <InstagramIcon className="h-3.5 w-3.5" />
                      <span>Follow on Instagram</span>
                    </a>
                  </div>

                  <h3 className="mt-4 font-heading text-2xl font-bold text-[#0B2545] sm:text-3xl lg:text-4xl">
                    {companyData.founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#0E9AA7] sm:text-base">
                    {companyData.founder.designation}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">
                    {companyData.founder.shortBio}
                  </p>

                  {/* Trust Highlights */}
                  <div className="mt-6 grid grid-cols-1 gap-2.5 pt-5 border-t border-slate-100 sm:grid-cols-3">
                    <div className="flex items-center justify-center md:justify-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
                      <ShieldCheck className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                      <span>Statutory Accuracy</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
                      <FileCheck className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                      <span>Verified Trade Filing</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
                      <Users className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                      <span>Transparent Guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E9F0] bg-[#F8FAFC] px-8 py-4 sm:px-12 sm:py-5 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-center gap-2.5 font-medium">
                <Building className="h-4 w-4 text-[#0B2545]" />
                <span>Headquartered in Bhiwandi, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Calendar className="h-4 w-4 text-[#0B2545]" />
                <span>Established {companyData.established}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BAND */}
      <section className="bg-[#0B2545] py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
            Need help with import-export registration or compliance?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            Get straightforward advice from our trade documentation specialist. Direct guidance, verified filing.
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

            <a
              href={companyData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-98"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>Instagram Profile</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

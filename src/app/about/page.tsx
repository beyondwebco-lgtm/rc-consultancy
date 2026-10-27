import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";
import { InstagramIcon } from "@/components/InstagramIcon";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  Phone,
  MessageCircle,
  FileText,
  CheckCircle2,
  Clock,
  FileCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | RC CONSULTANCY",
  description:
    "Learn about RC CONSULTANCY – Professional import export documentation and regulatory compliance consultancy based in Bhiwandi, Maharashtra. Led by Rohit Ramdas Chaher.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F7F9FB] to-white py-16 sm:py-20 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About RC CONSULTANCY"
            title="Dedicated Exclusively to Cross-Border Compliance"
            subtitle="Providing transparent documentation guidance, accurate regulatory filing, and reliable advisory for importers, exporters, and manufacturers."
          />
        </div>
      </section>

      {/* Stats Bar (8 months+, 250+ documents, 50+ clients) */}
      <section className="bg-white py-8 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {companyData.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 p-4 rounded-xl border border-[#E5E9F0] bg-[#FAFBFC]`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F6F7] text-[#0E9AA7]">
                  {idx === 0 && <Clock className="h-6 w-6" />}
                  {idx === 1 && <FileCheck className="h-6 w-6" />}
                  {idx === 2 && <Users className="h-6 w-6" />}
                </div>
                <div>
                  <span className="font-heading text-2xl font-extrabold text-[#0B2545]">
                    {stat.value}
                  </span>
                  <p className="text-xs font-bold text-[#0B2545] uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-[#64748B]">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative & Mission */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-[#0B2545] sm:text-3xl">
                Who We Are & What We Stand For
              </h2>
              <p className="text-base leading-relaxed text-[#334155]">
                {companyData.about.primaryText}
              </p>

              <div className="rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB] p-6 sm:p-8">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="h-6 w-6 text-[#0E9AA7] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#0B2545]">
                      Our Core Mission
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                      {companyData.about.mission}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0B2545]">
                  Our Operating Principles
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-[#334155]">
                  <div className="flex items-center gap-2 rounded-xl border border-[#E5E9F0] p-3">
                    <CheckCircle2 className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                    <span>No unverified claims or false promises</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#E5E9F0] p-3">
                    <CheckCircle2 className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                    <span>Strict adherence to statutory checklists</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#E5E9F0] p-3">
                    <CheckCircle2 className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                    <span>Transparent fee structure and timelines</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#E5E9F0] p-3">
                    <CheckCircle2 className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                    <span>Client data confidentiality & security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Key Facts card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB] shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
                  alt="Documentation analysis and advisory consultation desk"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="rounded-2xl border border-[#E5E9F0] bg-white p-6 shadow-xs space-y-4">
                <h3 className="font-heading text-base font-bold text-[#0B2545]">
                  Company Highlights
                </h3>
                <dl className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-[#E5E9F0] pb-2">
                    <dt className="text-[#64748B]">Entity</dt>
                    <dd className="font-semibold text-[#0B2545]">{companyData.name}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E9F0] pb-2">
                    <dt className="text-[#64748B]">Established</dt>
                    <dd className="font-semibold text-[#0B2545]">{companyData.established}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E9F0] pb-2">
                    <dt className="text-[#64748B]">Leadership</dt>
                    <dd className="font-semibold text-[#0B2545]">{companyData.founder.name}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E9F0] pb-2">
                    <dt className="text-[#64748B]">Social Profile</dt>
                    <dd>
                      <a
                        href={companyData.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#E1306C] hover:underline inline-flex items-center gap-1"
                      >
                        <InstagramIcon className="h-3 w-3" />
                        <span>{companyData.contact.instagramHandle}</span>
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E9F0] pb-2">
                    <dt className="text-[#64748B]">Jurisdiction</dt>
                    <dd className="font-semibold text-[#0B2545]">Maharashtra, India</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#64748B]">Specialization</dt>
                    <dd className="font-semibold text-[#0E9AA7]">Foreign Trade & Compliance</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Photo & Updated Designation */}
      <section className="border-t border-[#E2E8F0] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/60 to-[#F8FAFC] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership"
            title="Principal Consultant & Advisory"
            subtitle="Direct responsibility for trade documentation accuracy, verified filings, and regulatory compliance."
            align="center"
          />

          <div className="mt-12 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-xl shadow-slate-200/60">
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-12">
                {/* Photo */}
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

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col items-center justify-between gap-3 sm:flex-row md:items-center">
                    <span className="inline-flex items-center rounded-full bg-[#0E9AA7]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
                      Trade Advisory & Operations
                    </span>
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

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E9F0] bg-[#F8FAFC] px-8 py-4 sm:px-12 sm:py-5 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-center gap-2.5 font-medium">
                <Building2 className="h-4 w-4 text-[#0B2545]" />
                <span>Office: Bhiwandi, Thane, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Calendar className="h-4 w-4 text-[#0B2545]" />
                <span>Established {companyData.established}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2545] py-16 text-white text-center">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl text-white">
            Have questions about our documentation process?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            Reach out directly to discuss your specific import-export paperwork requirements.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-semibold text-[#0B2545] shadow-xs hover:bg-slate-100"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={companyData.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-semibold text-white shadow-xs hover:bg-[#20ba5a]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

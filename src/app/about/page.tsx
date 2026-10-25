import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  Phone,
  MessageCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | RC CONSULTANCY",
  description:
    "Learn about RC CONSULTANCY – Professional import export documentation and regulatory compliance consultancy based in Bhiwandi, Maharashtra. Founded by Rohit Ramdas Chaher.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F7F9FB] to-white py-16 sm:py-20 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About RC CONSULTANCY"
            title="Dedicated Exclusively to Cross-Border Compliance"
            subtitle="Providing transparent documentation guidance, accurate regulatory filing, and reliable advisory for importers, exporters, and manufacturers."
          />
        </div>
      </section>

      {/* Main Narrative & Mission */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
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
                    <dt className="text-[#64748B]">Founder</dt>
                    <dd className="font-semibold text-[#0B2545]">{companyData.founder.name}</dd>
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

      {/* Founder Section */}
      <section className="border-t border-[#E5E9F0] bg-[#F7F9FB] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership"
            title="Founder & Principal Consultant"
            subtitle="Direct responsibility for trade documentation accuracy and regulatory advisory."
          />

          <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-[#E5E9F0] bg-white p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#0B2545] text-white font-heading text-2xl font-bold">
                RC
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
                  Founder
                </span>
                <h3 className="mt-1 font-heading text-2xl font-bold text-[#0B2545]">
                  {companyData.founder.name}
                </h3>
                <p className="text-xs font-medium text-[#64748B]">
                  {companyData.founder.designation} · {companyData.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                  {companyData.founder.shortBio}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E9F0] pt-4 text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#0B2545]" />
                <span>Office: Bhiwandi, Thane, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0B2545]" />
                <span>Established {companyData.established}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services link & CTA */}
      <section className="bg-white py-16 sm:py-20 border-t border-[#E5E9F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-[#0B2545] sm:text-3xl">
            Explore Our Comprehensive Services
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#64748B]">
            From initial IEC issuance to port AD Code activation and packaging compliance, review our complete 10-point service suite.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B2545] px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-[#133966]"
            >
              <FileText className="h-4 w-4" />
              <span>View All 10 Services</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5E9F0] bg-white px-6 py-3.5 text-sm font-semibold text-[#0B2545] shadow-xs hover:bg-[#F7F9FB]"
            >
              <span>Contact Our Office</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

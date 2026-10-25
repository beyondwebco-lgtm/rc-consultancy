import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { companyData } from "@/data/company";
import { AlertCircle, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Import Export Services | RC CONSULTANCY",
  description:
    "Explore our complete suite of 10 specialized import-export services including IEC Registration, DGFT Services, AD Code, LMPC, CPCB, RCMC, COO, and Customs Documentation.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F7F9FB] to-white py-16 sm:py-20 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Services Portfolio"
            title="Import-Export & Regulatory Compliance Services"
            subtitle="Reliable advisory and document processing for Indian exporters, importers, and international trading businesses."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Statutory Note Banner */}
          <div className="mt-14 rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB] p-6 text-xs text-[#64748B] flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[#0E9AA7] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-[#0B2545]">
                Government Rules Notice:
              </p>
              <p>
                {companyData.disclaimer} RC CONSULTANCY acts as an independent consultancy providing professional document preparation and advisory support. Final approvals and certification timeframes remain at the discretion of the designated government departments and statutory bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2545] py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Not sure which trade registration is required for your shipment?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            Share your Harmonized System (HS) code or cargo description. We will guide you through the exact regulatory clearances required.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0B2545] shadow-xs hover:bg-slate-100"
            >
              <span>Get Free Assessment</span>
            </Link>

            <a
              href={companyData.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-[#20ba5a]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

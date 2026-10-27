import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { documentationCategories } from "@/data/documentationCategories";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { companyData } from "@/data/company";
import { InstagramIcon } from "@/components/InstagramIcon";
import {
  AlertCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Clock,
  Users,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation Services | RC CONSULTANCY",
  description:
    "Comprehensive directory of all documentation services provided by RC CONSULTANCY: Trade Agreements, LMPC Packaging, Import Monitoring Systems, EPR Registration, Port ICEGATE, DGFT, and RCMC Councils.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F7F9FB] to-white py-16 sm:py-20 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Documentation Services Directory"
            title="Comprehensive Documentation Services"
            subtitle="Browse all regulatory compliance categories, trade agreements, export promotion councils, and port documentation services below."
          />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white py-6 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-[#334155]">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#0E9AA7]" />
              <span className="font-bold text-[#0B2545]">Experience:</span>
              <span>8 months+ dedicated foreign trade consultancy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#0E9AA7]" />
              <span className="font-bold text-[#0B2545]">Documents Completed:</span>
              <span>250+ statutory filings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#0E9AA7]" />
              <span className="font-bold text-[#0B2545]">Clients Served:</span>
              <span>50+ active business enterprises</span>
            </div>
            <a
              href={companyData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#E1306C] hover:underline"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              <span>Instagram: {companyData.contact.instagramHandle}</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN DOCUMENTATION SERVICES SECTION (Exact layout matching user requirement screenshot) */}
      <section className="bg-[#F7F9FB] py-16 sm:py-20" id="directory">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="rounded-full bg-[#E7F6F7] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
              Complete Statutory Catalog
            </span>
            <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Documentation Services by Category
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#64748B]">
              Structured overview of all statutory registrations, portal filings, and export council documentation handled by RC CONSULTANCY.
            </p>
          </div>

          {/* 5-Column Grid Layout matching client screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Column 1: Trade Agreement */}
            <div className="space-y-6">
              {documentationCategories.slice(0, 1).map((cat) => (
                <div key={cat.id} id={cat.id} className="rounded-xl border border-[#E5E9F0] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3.5 py-3">
                    <h3 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="divide-y divide-[#E5E9F0] text-xs text-[#334155]">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="px-3.5 py-2 hover:bg-[#F0FDF4] transition-colors flex items-center justify-between group">
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-[#FAFBFC] border-t border-[#E5E9F0]">
                    <a
                      href={`https://wa.me/919322174270?text=Hello%20RC%20Consultancy,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(cat.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center rounded-lg bg-white border border-[#E5E9F0] px-2.5 py-1.5 text-[11px] font-semibold text-[#0B2545] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                    >
                      Inquire on WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2: Packaging, Import Monitoring, EPR, Port Registration */}
            <div className="space-y-6">
              {documentationCategories.slice(1, 5).map((cat) => (
                <div key={cat.id} id={cat.id} className="rounded-xl border border-[#E5E9F0] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3.5 py-3">
                    <h3 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="divide-y divide-[#E5E9F0] text-xs text-[#334155]">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="px-3.5 py-2 hover:bg-[#F0FDF4] transition-colors flex items-center justify-between">
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-[#FAFBFC] border-t border-[#E5E9F0]">
                    <a
                      href={`https://wa.me/919322174270?text=Hello%20RC%20Consultancy,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(cat.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center rounded-lg bg-white border border-[#E5E9F0] px-2.5 py-1.5 text-[11px] font-semibold text-[#0B2545] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                    >
                      Inquire on WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3: Import Export */}
            <div className="space-y-6">
              {documentationCategories.slice(5, 6).map((cat) => (
                <div key={cat.id} id={cat.id} className="rounded-xl border border-[#E5E9F0] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3.5 py-3">
                    <h3 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="divide-y divide-[#E5E9F0] text-xs text-[#334155]">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="px-3.5 py-2 hover:bg-[#F0FDF4] transition-colors flex items-center justify-between">
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-[#FAFBFC] border-t border-[#E5E9F0]">
                    <a
                      href={`https://wa.me/919322174270?text=Hello%20RC%20Consultancy,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(cat.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center rounded-lg bg-white border border-[#E5E9F0] px-2.5 py-1.5 text-[11px] font-semibold text-[#0B2545] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                    >
                      Inquire on WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 4: RCMC-Board Registration */}
            <div className="space-y-6">
              {documentationCategories.slice(6, 7).map((cat) => (
                <div key={cat.id} id={cat.id} className="rounded-xl border border-[#E5E9F0] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3.5 py-3">
                    <h3 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="divide-y divide-[#E5E9F0] text-xs text-[#334155]">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="px-3.5 py-2 hover:bg-[#F0FDF4] transition-colors flex items-center justify-between">
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-[#FAFBFC] border-t border-[#E5E9F0]">
                    <a
                      href={`https://wa.me/919322174270?text=Hello%20RC%20Consultancy,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(cat.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center rounded-lg bg-white border border-[#E5E9F0] px-2.5 py-1.5 text-[11px] font-semibold text-[#0B2545] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                    >
                      Inquire on WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 5: Serviceable Port & Fast Consultation */}
            <div className="space-y-6">
              {documentationCategories.slice(7, 8).map((cat) => (
                <div key={cat.id} id={cat.id} className="rounded-xl border border-[#E5E9F0] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3.5 py-3">
                    <h3 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="divide-y divide-[#E5E9F0] text-xs text-[#334155]">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="px-3.5 py-2 hover:bg-[#F0FDF4] transition-colors flex items-center justify-between">
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-[#FAFBFC] border-t border-[#E5E9F0]">
                    <a
                      href={`https://wa.me/919322174270?text=Hello%20RC%20Consultancy,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(cat.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center rounded-lg bg-white border border-[#E5E9F0] px-2.5 py-1.5 text-[11px] font-semibold text-[#0B2545] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                    >
                      Inquire on WhatsApp →
                    </a>
                  </div>
                </div>
              ))}

              {/* Consultation Assistance Box */}
              <div className="rounded-xl border border-teal-200 bg-gradient-to-br from-[#E7F6F7] to-white p-5 text-center shadow-xs">
                <h4 className="font-heading text-sm font-bold text-[#0B2545]">
                  Need Custom Trade Documentation?
                </h4>
                <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                  We handle custom DGFT registrations, ministry clearances, and port applications tailored to your consignment.
                </p>
                <div className="mt-4 space-y-2">
                  <Link
                    href="/contact"
                    className="block rounded-lg bg-[#0B2545] px-3 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#133966] transition-colors"
                  >
                    Request Consultation Form
                  </Link>
                  <a
                    href="https://wa.me/919322174270?text=Hello%20RC%20Consultancy,%20I%20need%20assistance%20with%20custom%20import-export%20documentation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-[#25D366] bg-white px-3 py-2 text-xs font-semibold text-[#25D366] hover:bg-[#F0FDF4] transition-colors"
                  >
                    WhatsApp: +91 93221 74270
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship In-Depth Services */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flagship Services"
            title="In-Depth Process & Documentation Guides"
            subtitle="Explore prerequisites, required paperwork, and step-by-step procedures for our most requested trade services."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
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

            <a
              href={companyData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20"
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

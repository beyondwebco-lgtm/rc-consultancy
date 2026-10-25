import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import { companyData } from "@/data/company";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  AlertCircle,
  HelpCircle,
  Phone,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | RC CONSULTANCY`,
    description: `${service.shortDescription} Professional advisory and documentation assistance by RC CONSULTANCY, Bhiwandi, Maharashtra.`,
    alternates: {
      canonical: `${companyData.contact.website}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | RC CONSULTANCY`,
      description: service.shortDescription,
      url: `${companyData.contact.website}/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumbs & Hero */}
      <section className="bg-gradient-to-b from-[#F7F9FB] to-white py-12 sm:py-16 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-[#64748B] mb-6"
          >
            <Link href="/" className="hover:text-[#0B2545] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/services"
              className="hover:text-[#0B2545] transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-[#0B2545] truncate max-w-xs sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#E7F6F7] px-3.5 py-1.5 text-xs font-semibold text-[#0E9AA7]">
                <ServiceIcon name={service.iconName} className="h-4 w-4" />
                <span>Statutory Compliance Service</span>
              </div>
              <h1 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#0B2545] sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 text-base text-[#64748B] sm:text-lg">
                {service.heroSubtitle}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-center rounded-xl bg-[#0B2545] px-6 py-3.5 text-xs font-semibold text-white shadow-xs hover:bg-[#133966]"
              >
                Inquire For This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  Service Overview
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#334155]">
                  {service.overview}
                </p>
              </div>

              {/* Who Needs It */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  Who Needs This Service
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.whoNeedsIt.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border border-[#E5E9F0] bg-[#F7F9FB]/60 p-3.5 text-xs text-[#334155]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#0E9AA7] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  Documents Typically Required
                </h2>
                <p className="mt-1 text-xs text-[#64748B]">
                  Exact documents may differ based on your constitution (Sole Proprietorship, LLP, Pvt Ltd) and commodity category.
                </p>
                <div className="mt-4 rounded-2xl border border-[#E5E9F0] bg-white p-6 shadow-2xs">
                  <ul className="space-y-3">
                    {service.documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#334155]">
                        <FileText className="h-4 w-4 text-[#0B2545] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How We Help */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  How RC CONSULTANCY Helps
                </h2>
                <div className="mt-4 space-y-3">
                  {service.howWeHelp.map((help, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-[#E5E9F0] bg-white p-4 text-xs sm:text-sm text-[#334155] shadow-2xs"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7F6F7] text-[#0E9AA7]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="leading-relaxed">{help}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  Standard Process Steps
                </h2>
                <div className="mt-6 space-y-4">
                  {service.processSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex items-start gap-4 rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB]/50 p-5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B2545] text-xs font-bold text-white">
                        0{step.step}
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-[#0B2545]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E5E9F0] bg-white p-5 shadow-2xs"
                    >
                      <h3 className="font-heading text-sm font-bold text-[#0B2545] flex items-start gap-2.5">
                        <HelpCircle className="h-4 w-4 text-[#0E9AA7] shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </h3>
                      <p className="mt-2 pl-6 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Disclaimer Box */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 text-xs text-amber-900 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-950">Statutory Notice</p>
                  <p>
                    {companyData.disclaimer} Applications are subject to government verification, portal uptime, and designated statutory regulations. RC CONSULTANCY does not guarantee government approval timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Consultation Card */}
              <div className="sticky top-28 rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB] p-6 shadow-xs space-y-5">
                <h3 className="font-heading text-base font-bold text-[#0B2545]">
                  Need Help With This Service?
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Connect directly with our compliance desk for verified document requirements and fee schedule.
                </p>

                <div className="space-y-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="flex w-full items-center justify-center rounded-xl bg-[#0B2545] px-4 py-3 text-xs font-semibold text-white shadow-xs hover:bg-[#133966]"
                  >
                    Submit Requirement
                  </Link>

                  <a
                    href={`https://wa.me/919322174270?text=Hello%20RC%20Consultancy,%20I%20need%20assistance%20with%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-semibold text-white shadow-xs hover:bg-[#20ba5a]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href={companyData.contact.phoneHref}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E5E9F0] bg-white px-4 py-3 text-xs font-semibold text-[#0B2545] shadow-xs hover:bg-[#F7F9FB]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#0E9AA7]" />
                    <span>Call {companyData.contact.phone}</span>
                  </a>
                </div>

                <div className="border-t border-[#E5E9F0] pt-4 text-xs text-[#64748B] space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#0E9AA7]" />
                    <span>Independent Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-[#0E9AA7]" />
                    <span>Mon - Sat: 10:30 AM – 6:30 PM</span>
                  </div>
                </div>

                {/* Other Services link */}
                <div className="border-t border-[#E5E9F0] pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
                    Other Trade Services
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {servicesData
                      .filter((s) => s.slug !== service.slug)
                      .slice(0, 4)
                      .map((other) => (
                        <li key={other.slug}>
                          <Link
                            href={`/services/${other.slug}`}
                            className="text-[#64748B] hover:text-[#0E9AA7] transition-colors line-clamp-1"
                          >
                            • {other.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

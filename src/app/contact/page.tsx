import type { Metadata } from "next";
import { Suspense } from "react";
import { companyData } from "@/data/company";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Consultation | RC CONSULTANCY",
  description:
    "Contact RC CONSULTANCY for professional import-export consultancy, IEC registration, DGFT, and regulatory compliance support in Bhiwandi, Thane, Maharashtra.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F7F9FB] to-white py-14 sm:py-20 border-b border-[#E5E9F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Consultation & Inquiries"
            title="Get In Touch With Our Compliance Advisor"
            subtitle="Submit your trade inquiry, schedule a document assessment, or visit our office in Kalher, Bhiwandi."
          />
        </div>
      </section>

      {/* Main Grid: Form + Side Panel */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="font-heading text-xl font-bold text-[#0B2545] sm:text-2xl">
                  Send Your Requirement
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                  Fill out the form below. We will review your commodity details and contact you directly.
                </p>
              </div>

              <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Side Panel: Office & Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0B2545]">
                    Office Details
                  </h3>
                  <p className="mt-1 text-xs text-[#64748B]">
                    Direct consultation available during working hours.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#334155]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#0E9AA7] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B2545]">Office Address</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                        {companyData.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-[#E5E9F0] pt-4">
                    <Phone className="h-5 w-5 text-[#0E9AA7] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B2545]">Phone / WhatsApp</p>
                      <p className="mt-1">
                        <a
                          href={companyData.contact.phoneHref}
                          className="font-medium text-[#0B2545] hover:text-[#0E9AA7] transition-colors"
                        >
                          {companyData.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-[#E5E9F0] pt-4">
                    <Mail className="h-5 w-5 text-[#0E9AA7] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B2545]">Direct Email</p>
                      <p className="mt-1">
                        <a
                          href={companyData.contact.emailHref}
                          className="font-medium text-[#0B2545] hover:text-[#0E9AA7] transition-colors"
                        >
                          {companyData.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-[#E5E9F0] pt-4">
                    <Clock className="h-5 w-5 text-[#0E9AA7] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B2545]">Working Hours</p>
                      <p className="mt-1 text-xs text-[#64748B]">
                        {companyData.workingHours.display}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Call to Action */}
                <div className="border-t border-[#E5E9F0] pt-5">
                  <a
                    href={companyData.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-semibold text-white shadow-xs hover:bg-[#20ba5a]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="overflow-hidden rounded-2xl border border-[#E5E9F0] bg-white shadow-xs">
                <div className="border-b border-[#E5E9F0] bg-[#F7F9FB] px-4 py-3 text-xs font-bold text-[#0B2545]">
                  Location Map · Kalher, Bhiwandi
                </div>
                <div className="relative aspect-video w-full bg-slate-100">
                  <iframe
                    title="RC CONSULTANCY Office Location"
                    src="https://maps.google.com/maps?q=Kalher%20Bhiwandi%20Maharashtra%20421302&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Map showing Kalher, Bhiwandi location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

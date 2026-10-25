import Link from "next/link";
import { Logo } from "./Logo";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-slate-300">
      {/* Upper Footer */}
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Logo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-sm">
              {companyData.tagline}
            </p>
            <p className="mt-2 text-xs text-slate-400 leading-normal">
              {companyData.seoLockup}
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-xs text-slate-300 max-w-sm">
              <ShieldCheck className="h-4 w-4 text-[#0E9AA7] shrink-0" />
              <span>Independent Compliance & Documentation Consultancy</span>
            </div>
          </div>

          {/* Quick links & Services */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5">
            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact & Inquiries
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Core Services Links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Import-Export Services
              </h3>
              <ul className="mt-4 space-y-2 text-xs">
                {servicesData.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-[#0E9AA7] transition-colors line-clamp-1 text-slate-300"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-[#0E9AA7] font-medium hover:underline inline-block pt-1"
                  >
                    View all 10 services →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Office & Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0E9AA7] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyData.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                <a
                  href={companyData.contact.phoneHref}
                  className="hover:text-white transition-colors font-medium text-slate-200"
                >
                  {companyData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                <a
                  href={companyData.contact.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#0E9AA7] shrink-0" />
                <span>{companyData.workingHours.display}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory Disclaimer Band */}
        <div className="mt-12 rounded-xl bg-white/5 border border-white/10 p-4 text-xs text-slate-300 leading-relaxed">
          <span className="font-semibold text-white">Statutory Note: </span>
          {companyData.disclaimer} RC CONSULTANCY is an independent professional consultancy and does not represent or act as a government authority.
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="border-t border-white/10 bg-[#07192F] py-6 text-xs text-slate-400">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© {companyData.established} {companyData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service | RC CONSULTANCY",
  description: "Terms and conditions governing consultancy services provided by RC CONSULTANCY.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs text-[#64748B]">Last updated: October 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#334155]">
          <p>
            Welcome to the official website of <strong>{companyData.name}</strong>. By accessing our website or retaining our consultancy services, you acknowledge and agree to the following terms and conditions.
          </p>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            1. Nature of Consultancy
          </h2>
          <p>
            RC CONSULTANCY operates as an independent trade documentation and regulatory compliance consultancy. We are not a government agency, department of foreign trade, or custom house authority. We provide advisory, drafting, and portal assistance on behalf of clients.
          </p>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            2. Client Responsibilities for Accurate Information
          </h2>
          <p>
            Clients are solely responsible for ensuring that all trade invoices, certificates of origin, manufacturing details, and statutory identity records provided to us are authentic, accurate, and current. Any liability resulting from misleading or fraudulent submissions to government authorities rests entirely with the applicant.
          </p>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            3. Government Rules & Disclaimers
          </h2>
          <p>
            {companyData.disclaimer} Statutory approval timeframes, website uptime, duty tariff modifications, and portal technicalities are governed by respective authorities. We do not guarantee approval timeframes that lie outside our procedural control.
          </p>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            4. Jurisdiction & Applicable Law
          </h2>
          <p>
            Any disputes arising out of the services rendered shall be subject to the exclusive jurisdiction of the competent courts in Thane / Maharashtra, India.
          </p>
        </div>
      </div>
    </div>
  );
}

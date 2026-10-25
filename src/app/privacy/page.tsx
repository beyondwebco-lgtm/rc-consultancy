import type { Metadata } from "next";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | RC CONSULTANCY",
  description: "Privacy policy and client data handling practices of RC CONSULTANCY.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-extrabold text-[#0B2545] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-[#64748B]">Last updated: October 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#334155]">
          <p>
            At <strong>{companyData.name}</strong>, we respect your privacy and are committed to protecting the proprietary trade data, personal information, and business documents you share with us.
          </p>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you contact us for import-export consultancy or submit inquiries via our website, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Contact details such as your name, email address, and phone number.</li>
            <li>Business details including firm name, entity constitution, and commercial commodity description.</li>
            <li>Statutory documentation provided voluntarily for application verification (PAN, GSTIN, bank certificates).</li>
          </ul>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use your data solely for providing professional consultancy, preparing government portal applications (DGFT, ICEGATE, LMPC, CPCB), communicating regarding service updates, and issuing legitimate receipts. We do not sell, rent, or trade your data to third parties.
          </p>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            3. Document Security & Confidentiality
          </h2>
          <p>
            All trade records, invoices, and entity documents transmitted for advisory purposes are handled with strict confidentiality. Access is restricted exclusively to the consultant handling your filing.
          </p>

          <h2 className="font-heading text-lg font-bold text-[#0B2545] pt-4">
            4. Contact Regarding Privacy
          </h2>
          <p>
            If you have questions regarding our data practices, please reach out to us at{" "}
            <a href={companyData.contact.emailHref} className="text-[#0E9AA7] underline">
              {companyData.contact.email}
            </a>{" "}
            or write to our registered office: {companyData.address.full}.
          </p>
        </div>
      </div>
    </div>
  );
}

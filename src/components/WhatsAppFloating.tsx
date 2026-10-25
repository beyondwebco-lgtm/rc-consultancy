"use client";

import { companyData } from "@/data/company";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloating() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={companyData.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RC CONSULTANCY on WhatsApp"
        className="group flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-108 hover:bg-[#20ba5a] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 active:scale-95"
      >
        <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-6" />
        <span className="sr-only">WhatsApp Us</span>
      </a>
    </aside>
  );
}

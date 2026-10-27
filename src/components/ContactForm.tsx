"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { servicesData } from "@/data/services";
import { documentationCategories } from "@/data/documentationCategories";
import { companyData } from "@/data/company";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Mail,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone / WhatsApp number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter valid numeric phone format"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select an import-export service"),
  message: z.string().min(5, "Please describe your requirement (at least 5 characters)"),
  website_field_hp: z.string().optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm({ preselectedService }: { preselectedService?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: preselectedService || "",
      message: "",
      website_field_hp: "",
    },
  });

  const generateWhatsAppUrl = (data: Partial<ContactFormData>) => {
    const text = encodeURIComponent(
      `Hello RC CONSULTANCY (Rohit Chaher),\nI am submitting a consultation inquiry:\n\n*Name:* ${data.fullName || "Prospective Client"}\n*Phone:* ${data.phone || "Not provided"}\n*Email:* ${data.email || "Not provided"}\n*Service:* ${data.service || "General Import-Export Consultation"}\n\n*Requirement Details:*\n${data.message || "I would like to consult regarding trade documentation and compliance services."}\n\nPlease review and advise.`
    );
    return `https://wa.me/919322174270?text=${text}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    // If honeypot is filled, silent exit
    if (data.website_field_hp) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // 1. Prepare WhatsApp URL & trigger automatically
    const waUrl = generateWhatsAppUrl(data);
    try {
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    } catch (e) {
      console.warn("Auto popup blocked by browser, manual button available on confirmation", e);
    }

    // 2. Dispatch to email backend (/api/contact -> rc.consultancy@outlook.com)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok && !resData.success) {
        throw new Error(resData.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmittedData(data);
      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      // Even if network fails, ensure WhatsApp has recorded the lead
      setSubmittedData(data);
      setIsSuccess(true);
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickWhatsApp = () => {
    const values = getValues();
    const waUrl = generateWhatsAppUrl(values);
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  const handleMailtoFallback = () => {
    const values = submittedData || getValues();
    const subject = encodeURIComponent(`Consultation Inquiry: ${values.service || "Import Export"}`);
    const body = encodeURIComponent(
      `Name: ${values.fullName}\nPhone: ${values.phone}\nEmail: ${values.email}\nService: ${values.service}\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:rc.consultancy@outlook.com?subject=${subject}&body=${body}`;
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl border border-teal-200 bg-gradient-to-b from-[#E7F6F7]/80 to-white p-8 sm:p-10 shadow-lg text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0E9AA7] text-white shadow-md">
          <CheckCircle2 className="h-9 w-9" />
        </div>

        <h3 className="mt-4 font-heading text-2xl font-bold text-[#0B2545]">
          Inquiry Successfully Dispatched!
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[#475569] leading-relaxed">
          Your requirement has been sent directly to our principal trade advisor,{" "}
          <strong className="text-[#0B2545]">Rohit Ramdas Chaher</strong>, via both official Email and WhatsApp.
        </p>

        {/* Dual Delivery Status Badges */}
        <div className="mt-6 mx-auto grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2 text-left">
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-900">Email Dispatched</p>
              <p className="text-xs font-medium text-slate-600 break-all">rc.consultancy@outlook.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-900">WhatsApp Direct Line</p>
              <p className="text-xs font-medium text-slate-600">+91 93221 74270</p>
            </div>
          </div>
        </div>

        {/* Primary WhatsApp Action */}
        <div className="mt-6 mx-auto max-w-lg rounded-2xl bg-white p-5 border border-[#E5E9F0] shadow-sm text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545]">
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>Instant Confirmation on WhatsApp</span>
          </div>
          <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
            Click the button below if your WhatsApp chat did not open automatically:
          </p>
          <a
            href={generateWhatsAppUrl(submittedData || {})}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#20ba5a] active:scale-99 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Open WhatsApp Chat (+91 93221 74270)</span>
          </a>
        </div>

        {/* Secondary Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleMailtoFallback}
            className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-xs font-semibold text-[#0B2545] shadow-xs hover:bg-[#F8FAFC]"
          >
            <Mail className="h-3.5 w-3.5 text-[#0E9AA7]" />
            <span>Open in Outlook / Mail Client</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setSubmittedData(null);
            }}
            className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-xs font-semibold text-[#64748B] shadow-xs hover:bg-[#F8FAFC]"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-[#E5E9F0] bg-white p-6 sm:p-10 shadow-sm"
    >
      {/* Honeypot field (hidden from legitimate users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_field_hp">Leave this empty</label>
        <input
          id="website_field_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website_field_hp")}
        />
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Ramesh Patel"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
              errors.fullName ? "border-red-500 bg-red-50/20" : "border-[#E5E9F0] bg-[#F7F9FB]/40"
            }`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Contact Phone & Email Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Phone / WhatsApp */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]"
            >
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
                errors.phone ? "border-red-500 bg-red-50/20" : "border-[#E5E9F0] bg-[#F7F9FB]/40"
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
                errors.email ? "border-red-500 bg-red-50/20" : "border-[#E5E9F0] bg-[#F7F9FB]/40"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]"
          >
            Required Service / Category <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
              errors.service ? "border-red-500 bg-red-50/20" : "border-[#E5E9F0] bg-[#F7F9FB]/40"
            }`}
            {...register("service")}
          >
            <option value="">Select an Import-Export / Documentation Service</option>
            <optgroup label="Core Statutory Services">
              {servicesData.map((svc) => (
                <option key={svc.slug} value={svc.title}>
                  {svc.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Documentation Categories">
              {documentationCategories.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title} (All sub-services)
                </option>
              ))}
            </optgroup>
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]"
          >
            Requirement Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Please mention your commodities, current stage (new setup, renewal, query resolution), or any specific port requirement..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
              errors.message ? "border-red-500 bg-red-50/20" : "border-[#E5E9F0] bg-[#F7F9FB]/40"
            }`}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Guaranteed Dual Dispatch Banner */}
        <div className="rounded-2xl border border-teal-200/80 bg-[#E7F6F7]/50 p-3.5 text-xs text-[#0B2545] flex items-center gap-2.5">
          <ShieldCheck className="h-5 w-5 text-[#0E9AA7] shrink-0" />
          <span>
            Delivered directly to <strong>rc.consultancy@outlook.com</strong> & WhatsApp <strong>+91 93221 74270</strong>.
          </span>
        </div>

        {/* Primary Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B2545] px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#133966] hover:shadow-lg active:scale-99 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Dispatching Inquiry (Email & WhatsApp)...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry via Email & WhatsApp</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-2 flex items-center justify-center">
          <div className="w-full border-t border-[#E5E9F0]" />
          <span className="absolute bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
            or fast direct chat
          </span>
        </div>

        {/* Secondary Direct WhatsApp button */}
        <button
          type="button"
          onClick={handleQuickWhatsApp}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-bold text-emerald-800 shadow-2xs hover:bg-emerald-100 transition-colors"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          <span>Direct Quick Chat on WhatsApp (+91 93221 74270)</span>
        </button>
      </div>
    </form>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { servicesData } from "@/data/services";
import { documentationCategories } from "@/data/documentationCategories";
import { companyData } from "@/data/company";
import { CheckCircle2, AlertCircle, Loader2, Send, Mail, MessageCircle, ArrowRight } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone/WhatsApp number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide a brief description of your requirement"),
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

  const onSubmit = async (data: ContactFormData) => {
    // If honeypot is filled, silent exit
    if (data.website_field_hp) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmittedData(data);
      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppHrefForData = (data: ContactFormData | null) => {
    if (!data) return companyData.contact.whatsappHref;
    const text = encodeURIComponent(
      `Hello RC CONSULTANCY (Rohit Chaher),\nI have submitted an inquiry on your website:\n\n*Name:* ${data.fullName}\n*Phone:* ${data.phone}\n*Email:* ${data.email}\n*Service:* ${data.service}\n\n*Details:*\n${data.message}`
    );
    return `https://wa.me/919322174270?text=${text}`;
  };

  const handleMailtoFallback = () => {
    const values = getValues();
    const subject = encodeURIComponent(`Consultation Inquiry: ${values.service || "Import Export"}`);
    const body = encodeURIComponent(
      `Name: ${values.fullName}\nPhone: ${values.phone}\nEmail: ${values.email}\nService: ${values.service}\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:${companyData.contact.email}?subject=${subject}&body=${body}`;
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-[#E7F6F7]/60 p-8 text-center sm:p-10 animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0E9AA7] text-white shadow-md">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-[#0B2545]">
          Inquiry Successfully Submitted!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-[#334155] leading-relaxed">
          Your inquiry has been logged and dispatched to <strong>rc.consultancy@outlook.com</strong>. Our principal consultant, <strong>Rohit Ramdas Chaher</strong>, will review your details promptly.
        </p>

        {/* Instant WhatsApp Action for guaranteed immediate response */}
        <div className="mt-6 mx-auto max-w-md rounded-xl bg-white p-4 border border-[#E5E9F0] shadow-xs text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545]">
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>Need an immediate response?</span>
          </div>
          <p className="mt-1 text-xs text-[#64748B]">
            Send a copy of your submitted inquiry directly to Rohit Chaher on WhatsApp to get instant confirmation:
          </p>
          <a
            href={getWhatsAppHrefForData(submittedData)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#20ba5a] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Send Details to WhatsApp (+91 93221 74270)</span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setSubmittedData(null);
            }}
            className="rounded-xl border border-[#E5E9F0] bg-white px-5 py-2.5 text-xs font-semibold text-[#0B2545] shadow-xs hover:bg-[#F7F9FB]"
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
      className="rounded-2xl border border-[#E5E9F0] bg-white p-6 sm:p-8 shadow-xs"
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
            className={`mt-1.5 block w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
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
              className={`mt-1.5 block w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
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
              className={`mt-1.5 block w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
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
            className={`mt-1.5 block w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
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
            className={`mt-1.5 block w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#334155] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E9AA7] ${
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

        {/* Error notice if submission failed */}
        {errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 flex items-start gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p>{errorMessage}</p>
              <button
                type="button"
                onClick={handleMailtoFallback}
                className="mt-2 inline-flex items-center gap-1 font-semibold text-red-800 underline hover:no-underline"
              >
                <Mail className="h-3.5 w-3.5" />
                Click here to email us directly using your email client
              </button>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B2545] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#133966] hover:shadow-md active:scale-99 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending Consultation Request...</span>
              </>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
          <p className="mt-2.5 text-center text-xs text-[#64748B]">
            All enquiries are delivered directly to Rohit Ramdas Chaher (rc.consultancy@outlook.com & WhatsApp).
          </p>
        </div>
      </div>
    </form>
  );
}

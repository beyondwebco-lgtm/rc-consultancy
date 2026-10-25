import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center">
      <div className="rounded-2xl border border-[#E5E9F0] bg-[#F7F9FB] p-8 sm:p-12 max-w-md shadow-xs">
        <span className="font-heading text-6xl font-extrabold text-[#0B2545]">
          404
        </span>
        <h1 className="mt-3 font-heading text-xl font-bold text-[#0B2545]">
          Page Not Found
        </h1>
        <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
          The trade compliance resource or page you are looking for does not exist or has been relocated.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B2545] px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#133966]"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E5E9F0] bg-white px-4 py-2.5 text-xs font-semibold text-[#0B2545] shadow-xs hover:bg-[#F7F9FB]"
          >
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

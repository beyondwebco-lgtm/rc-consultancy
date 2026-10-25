"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { companyData } from "@/data/company";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E9F0]"
          : "bg-white/80 backdrop-blur-md border-b border-[#E5E9F0]/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#0B2545] ${
                  isActive
                    ? "text-[#0B2545] font-semibold"
                    : "text-[#64748B]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={companyData.contact.phoneHref}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#0B2545] hover:text-[#0E9AA7] transition-colors"
            title="Call RC Consultancy"
          >
            <Phone className="h-3.5 w-3.5 text-[#0E9AA7]" />
            <span>{companyData.contact.phoneDisplay}</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#0B2545] px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#133966] hover:shadow-md active:scale-98"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E9F0] text-[#0B2545] hover:bg-[#F7F9FB] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E5E9F0] bg-white px-4 pt-3 pb-6 md:hidden shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F7F9FB] text-[#0B2545] font-semibold"
                      : "text-[#64748B] hover:bg-[#F7F9FB] hover:text-[#0B2545]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#E5E9F0] flex flex-col gap-3">
              <a
                href={companyData.contact.phoneHref}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0B2545]"
              >
                <Phone className="h-4 w-4 text-[#0E9AA7]" />
                <span>{companyData.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-xl bg-[#0B2545] px-4 py-3 text-sm font-semibold text-white shadow-sm"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

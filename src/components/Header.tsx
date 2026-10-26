"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import { Menu, X, ArrowRight, Phone, ChevronDown, ChevronRight, Layers } from "lucide-react";
import { companyData } from "@/data/company";
import { documentationCategories } from "@/data/documentationCategories";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDocsOpen, setMobileDocsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E9F0]"
          : "bg-white/90 backdrop-blur-md border-b border-[#E5E9F0]/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#0B2545] ${
              pathname === "/" ? "text-[#0B2545] font-semibold" : "text-[#64748B]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-[#0B2545] ${
              pathname === "/about" ? "text-[#0B2545] font-semibold" : "text-[#64748B]"
            }`}
          >
            About
          </Link>

          {/* Documentation Services with Mega-Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center">
              <Link
                href="/services"
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#0B2545] py-2 ${
                  isServicesActive ? "text-[#0B2545] font-semibold" : "text-[#64748B]"
                }`}
              >
                <span>Documentation Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180 text-[#0E9AA7]" : "text-slate-400"
                  }`}
                />
              </Link>
            </div>

            {/* Mega Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[98vw] max-w-[1180px] rounded-2xl border border-[#E5E9F0] bg-white p-6 shadow-2xl transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2"
                role="menu"
              >
                <div className="flex items-center justify-between border-b border-[#E5E9F0] pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#0E9AA7]" />
                    <h3 className="font-heading text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                      RC CONSULTANCY Documentation Services Directory
                    </h3>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0E9AA7] hover:text-[#0B2545] transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>View All Documentation Services</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* 5-Column Mega Grid matching reference screenshot structure */}
                <div className="grid grid-cols-5 gap-4 max-h-[68vh] overflow-y-auto pr-1">
                  {/* Column 1: Trade Agreement */}
                  <div className="space-y-4">
                    {documentationCategories.slice(0, 1).map((cat) => (
                      <div key={cat.id} className="rounded-xl border border-[#E5E9F0] bg-[#FAFBFC] overflow-hidden shadow-2xs">
                        <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3 py-2">
                          <h4 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                            {cat.title}
                          </h4>
                        </div>
                        <ul className="divide-y divide-[#E5E9F0] text-[11px] text-[#334155] bg-white">
                          {cat.items.map((item, idx) => (
                            <li key={idx} className="hover:bg-[#F0FDF4] transition-colors">
                              <Link
                                href={`/services#${cat.id}`}
                                className="block px-3 py-1.5 hover:text-[#0B2545] leading-tight"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 2: Packaging, Import Monitoring, EPR, Port Registration */}
                  <div className="space-y-4">
                    {documentationCategories.slice(1, 5).map((cat) => (
                      <div key={cat.id} className="rounded-xl border border-[#E5E9F0] bg-[#FAFBFC] overflow-hidden shadow-2xs">
                        <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3 py-2">
                          <h4 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                            {cat.title}
                          </h4>
                        </div>
                        <ul className="divide-y divide-[#E5E9F0] text-[11px] text-[#334155] bg-white">
                          {cat.items.map((item, idx) => (
                            <li key={idx} className="hover:bg-[#F0FDF4] transition-colors">
                              <Link
                                href={`/services#${cat.id}`}
                                className="block px-3 py-1.5 hover:text-[#0B2545] leading-tight"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 3: Import Export */}
                  <div className="space-y-4">
                    {documentationCategories.slice(5, 6).map((cat) => (
                      <div key={cat.id} className="rounded-xl border border-[#E5E9F0] bg-[#FAFBFC] overflow-hidden shadow-2xs">
                        <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3 py-2">
                          <h4 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                            {cat.title}
                          </h4>
                        </div>
                        <ul className="divide-y divide-[#E5E9F0] text-[11px] text-[#334155] bg-white max-h-[380px] overflow-y-auto">
                          {cat.items.map((item, idx) => (
                            <li key={idx} className="hover:bg-[#F0FDF4] transition-colors">
                              <Link
                                href={`/services#${cat.id}`}
                                className="block px-3 py-1.5 hover:text-[#0B2545] leading-tight"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 4: RCMC-Board Registration */}
                  <div className="space-y-4">
                    {documentationCategories.slice(6, 7).map((cat) => (
                      <div key={cat.id} className="rounded-xl border border-[#E5E9F0] bg-[#FAFBFC] overflow-hidden shadow-2xs">
                        <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3 py-2">
                          <h4 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                            {cat.title}
                          </h4>
                        </div>
                        <ul className="divide-y divide-[#E5E9F0] text-[11px] text-[#334155] bg-white max-h-[380px] overflow-y-auto">
                          {cat.items.map((item, idx) => (
                            <li key={idx} className="hover:bg-[#F0FDF4] transition-colors">
                              <Link
                                href={`/services#${cat.id}`}
                                className="block px-3 py-1.5 hover:text-[#0B2545] leading-tight"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 5: Hazardous & Dangerous Goods + Serviceable Port */}
                  <div className="space-y-4">
                    {documentationCategories.slice(7, 9).map((cat) => (
                      <div key={cat.id} className="rounded-xl border border-[#E5E9F0] bg-[#FAFBFC] overflow-hidden shadow-2xs">
                        <div className="bg-[#FAF0F0] border-b border-[#F3D5D5] px-3 py-2">
                          <h4 className="font-heading text-xs font-bold text-[#991B1B] uppercase tracking-wide">
                            {cat.title}
                          </h4>
                        </div>
                        <ul className="divide-y divide-[#E5E9F0] text-[11px] text-[#334155] bg-white max-h-[200px] overflow-y-auto">
                          {cat.items.map((item, idx) => (
                            <li key={idx} className="hover:bg-[#F0FDF4] transition-colors">
                              <Link
                                href={`/services#${cat.id}`}
                                className="block px-3 py-1.5 hover:text-[#0B2545] leading-tight"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Fast Action Bar */}
                <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between text-xs text-[#64748B]">
                  <p>
                    Need an unlisted statutory registration or custom DGFT filing?
                  </p>
                  <Link
                    href="/contact"
                    className="font-semibold text-[#0B2545] hover:text-[#0E9AA7] inline-flex items-center gap-1"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Contact Documentation Desk <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-[#0B2545] ${
              pathname === "/contact" ? "text-[#0B2545] font-semibold" : "text-[#64748B]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA & Social */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Instagram Link */}
          <a
            href={companyData.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E5E9F0] text-[#E1306C] hover:bg-[#FDF2F4] hover:border-[#E1306C]/40 transition-colors"
            title="Follow RC CONSULTANCY on Instagram"
            aria-label="RC CONSULTANCY Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>

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
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={companyData.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E9F0] text-[#E1306C]"
            title="Instagram"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E9F0] text-[#0B2545] hover:bg-[#F7F9FB]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E5E9F0] bg-white px-4 pt-3 pb-6 lg:hidden shadow-lg animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            <Link
              href="/"
              className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                pathname === "/"
                  ? "bg-[#F7F9FB] text-[#0B2545] font-semibold"
                  : "text-[#64748B] hover:bg-[#F7F9FB] hover:text-[#0B2545]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                pathname === "/about"
                  ? "bg-[#F7F9FB] text-[#0B2545] font-semibold"
                  : "text-[#64748B] hover:bg-[#F7F9FB] hover:text-[#0B2545]"
              }`}
            >
              About
            </Link>

            {/* Mobile Documentation Services Accordion */}
            <div>
              <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#F7F9FB]">
                <Link
                  href="/services"
                  className={`text-base font-medium ${
                    isServicesActive ? "text-[#0B2545] font-semibold" : "text-[#64748B]"
                  }`}
                >
                  Documentation Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileDocsOpen(!mobileDocsOpen)}
                  className="p-1 text-slate-500 hover:text-[#0B2545]"
                  aria-label="Toggle services list"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileDocsOpen ? "rotate-180 text-[#0E9AA7]" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDocsOpen && (
                <div className="mt-2 ml-3 space-y-3 border-l-2 border-[#0E9AA7]/30 pl-3">
                  {documentationCategories.map((cat) => (
                    <div key={cat.id}>
                      <Link
                        href={`/services#${cat.id}`}
                        className="block text-xs font-bold text-[#991B1B] uppercase tracking-wider py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {cat.title}
                      </Link>
                      <p className="text-[11px] text-[#64748B] mb-1">
                        {cat.items.slice(0, 3).join(", ")}
                        {cat.items.length > 3 ? "..." : ""}
                      </p>
                    </div>
                  ))}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0E9AA7] pt-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Browse complete categorized directory</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                pathname === "/contact"
                  ? "bg-[#F7F9FB] text-[#0B2545] font-semibold"
                  : "text-[#64748B] hover:bg-[#F7F9FB] hover:text-[#0B2545]"
              }`}
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-[#E5E9F0] flex flex-col gap-3">
              <a
                href={companyData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#E1306C] hover:bg-[#FDF2F4] rounded-lg transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>Follow {companyData.contact.instagramHandle}</span>
              </a>

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

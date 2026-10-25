import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { SmoothScroll } from "@/components/SmoothScroll";
import { JsonLd } from "@/components/JsonLd";
import { companyData } from "@/data/company";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(companyData.contact.website),
  title: {
    default: `${companyData.name} | Import Export & Regulatory Compliance Services`,
    template: `%s | ${companyData.name}`,
  },
  description:
    "RC CONSULTANCY provides professional import-export consultancy, IEC registration, DGFT services, AD Code, LMPC, CPCB, RCMC, Certificate of Origin, and customs documentation in Bhiwandi, Thane, Maharashtra.",
  keywords: [
    "import export consultant Bhiwandi",
    "IEC registration",
    "DGFT",
    "AD code",
    "LMPC",
    "CPCB",
    "RCMC",
    "certificate of origin",
    "customs documentation",
    "RC CONSULTANCY",
    "Rohit Ramdas Chaher",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.founder.name,
  publisher: companyData.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: companyData.contact.website,
  },
  openGraph: {
    title: `${companyData.name} | Import Export & Regulatory Compliance Services`,
    description: companyData.about.primaryText,
    url: companyData.contact.website,
    siteName: companyData.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${companyData.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyData.name,
    description: companyData.tagline,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-[#334155] selection:bg-[#0E9AA7] selection:text-white">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </SmoothScroll>
      </body>
    </html>
  );
}

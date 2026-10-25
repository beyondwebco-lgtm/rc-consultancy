# RC CONSULTANCY – Official Website

Production-ready, minimal, clean, smooth, single-brand website for **RC CONSULTANCY** – an Import Export & Regulatory Compliance consultancy based in Bhiwandi, Thane, Maharashtra, India.

## Tech Stack
- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Animation & Motion**: Framer Motion + Lenis Smooth Scroll (respects `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form + Zod + Honeypot spam defense
- **Email Support**: Nodemailer API route (`/api/contact`) with fallback mailto
- **SEO & Structured Data**: Dynamic metadata, OpenGraph, Twitter cards, sitemap.xml, robots.txt, JSON-LD Schema (`ProfessionalService` / `LocalBusiness`)

---

## Brand Details
- **Company**: RC CONSULTANCY
- **Tagline**: Your Trusted Partner in Import Export & Compliance Services
- **Founder**: Rohit Ramdas Chaher, Founder
- **Established**: 2026
- **Address**: FLAT NO. 002, B.S. MALI APARTMENT, KALHER PADA, KALHER, BHIWANDI, THANE, MAHARASHTRA – 421302, INDIA
- **Phone / WhatsApp**: +91 9322174270
- **Email**: rc.consultancy@outlook.com
- **Website**: https://rcconsultancy.co.in
- **Working Hours**: Monday to Saturday, 10:30 AM to 6:30 PM

---

## 10 Specialized Import-Export Services
1. Import Export Code (IEC) Registration (`/services/iec-registration`)
2. DGFT Registration & Services (`/services/dgft-registration-services`)
3. AD Code Registration (`/services/ad-code-registration`)
4. LMPC Registration & Compliance (`/services/lmpc-registration-compliance`)
5. CPCB Registration & Compliance (`/services/cpcb-registration-compliance`)
6. RCMC Registration (`/services/rcmc-registration`)
7. Certificate of Origin (COO) (`/services/certificate-of-origin-coo`)
8. Import Export Documentation (`/services/import-export-documentation`)
9. Customs Documentation Support (`/services/customs-documentation-support`)
10. Import Export Regulatory Compliance Guidance (`/services/regulatory-compliance-guidance`)

---

## Getting Started

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Environment Setup (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## Deploying to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Framework Preset will auto-detect as **Next.js**.
4. (Optional) Set environment variables:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` for direct email notifications.
5. Click **Deploy**.

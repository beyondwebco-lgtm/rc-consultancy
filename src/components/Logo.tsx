import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "header" | "footer";
  className?: string;
}

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const isFooter = variant === "footer";

  if (isFooter) {
    return (
      <Link
        href="/"
        className={`group inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-xs transition-opacity hover:opacity-95 ${className}`}
        aria-label="RC CONSULTANCY – Home"
      >
        <Image
          src="/images/logo.png"
          alt="RC CONSULTANCY – Import • Export • Consultancy"
          width={220}
          height={55}
          className="h-9 w-auto object-contain"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label="RC CONSULTANCY – Home"
    >
      <Image
        src="/images/logo.png"
        alt="RC CONSULTANCY – Import • Export • Consultancy"
        width={240}
        height={60}
        priority
        className="h-11 sm:h-12 w-auto object-contain"
      />
    </Link>
  );
}

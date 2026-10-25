interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl ${
        isCenter ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full bg-[#E7F6F7] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E9AA7]">
          {badge}
        </span>
      )}
      <h2
        className={`font-heading text-2xl font-bold tracking-tight text-[#0B2545] sm:text-3xl lg:text-4xl ${
          badge ? "mt-3" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-[#64748B] sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

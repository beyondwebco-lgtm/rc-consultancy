import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-hover group flex flex-col justify-between rounded-2xl border border-[#E5E9F0] bg-white p-6 shadow-xs transition-all duration-200"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F6F7] text-[#0E9AA7] transition-colors duration-200 group-hover:bg-[#0B2545] group-hover:text-white">
            <ServiceIcon name={service.iconName} className="h-5 w-5" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors group-hover:text-[#0B2545]">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <h3 className="mt-5 font-heading text-base font-bold text-[#0B2545] transition-colors group-hover:text-[#0E9AA7] line-clamp-2">
          {service.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-[#64748B] line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#0E9AA7] transition-colors group-hover:text-[#0B2545]">
        <span>View procedure & checklist</span>
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

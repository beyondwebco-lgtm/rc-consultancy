import {
  FileCheck2,
  Globe2,
  Building2,
  Scale,
  ShieldAlert,
  Award,
  FileSpreadsheet,
  FileText,
  ClipboardCheck,
  Scale3D,
  HelpCircle,
} from "lucide-react";

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className = "h-5 w-5" }: ServiceIconProps) {
  switch (name) {
    case "FileCheck2":
      return <FileCheck2 className={className} />;
    case "Globe2":
      return <Globe2 className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "Scale":
      return <Scale className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "Award":
      return <Award className={className} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "ClipboardCheck":
      return <ClipboardCheck className={className} />;
    case "Scale3D":
      return <Scale3D className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
}

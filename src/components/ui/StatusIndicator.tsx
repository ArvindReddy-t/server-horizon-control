
import { cn } from "@/lib/utils";

type StatusType = "OK" | "Warning" | "Critical" | "Disabled" | "Unknown";

interface StatusIndicatorProps {
  status: StatusType;
  size?: "sm" | "md" | "lg";
  withLabel?: boolean;
  className?: string;
}

export function StatusIndicator({
  status,
  size = "md",
  withLabel = false,
  className,
}: StatusIndicatorProps) {
  const getStatusColor = () => {
    switch (status) {
      case "OK":
        return "bg-status-ok";
      case "Warning":
        return "bg-status-warning";
      case "Critical":
        return "bg-status-critical";
      case "Disabled":
        return "bg-status-disabled";
      default:
        return "bg-status-unknown";
    }
  };

  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("rounded-full", sizeClasses[size], getStatusColor())} />
      {withLabel && <span className="text-sm">{status}</span>}
    </div>
  );
}

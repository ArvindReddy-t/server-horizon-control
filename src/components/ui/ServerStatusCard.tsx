
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ReactNode } from "react";
import { Power, AlertCircle, HardDrive, Cpu, Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusItemProps {
  icon: ReactNode;
  label: string;
  status: "OK" | "Warning" | "Critical" | "Disabled" | "Unknown";
}

interface ServerStatusCardProps {
  className?: string;
}

const StatusItem = ({ icon, label, status }: StatusItemProps) => (
  <div className="flex items-center justify-between py-2 border-b last:border-0">
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
    <StatusIndicator status={status} withLabel />
  </div>
);

export function ServerStatusCard({ className }: ServerStatusCardProps) {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Server Health Summary</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-0">
          <StatusItem
            icon={<Power size={16} className="text-ilo-primary" />}
            label="Power"
            status="OK"
          />
          <StatusItem
            icon={<Cpu size={16} className="text-ilo-primary" />}
            label="Processor"
            status="OK"
          />
          <StatusItem
            icon={<Database size={16} className="text-ilo-primary" />}
            label="Memory"
            status="OK"
          />
          <StatusItem
            icon={<HardDrive size={16} className="text-ilo-primary" />}
            label="Storage"
            status="OK"
          />
          <StatusItem
            icon={<AlertCircle size={16} className="text-ilo-primary" />}
            label="Temperature"
            status="OK"
          />
        </div>
      </CardContent>
    </Card>
  );
}

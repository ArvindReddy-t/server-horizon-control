
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Power,
  HelpCircle,
  Settings,
  Bell,
  Copy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TopBarProps {
  serverName: string;
  ipAddress: string;
  healthStatus: "OK" | "Warning" | "Critical" | "Unknown";
}

export function TopBar({ serverName, ipAddress, healthStatus }: TopBarProps) {
  const getHealthColor = () => {
    switch (healthStatus) {
      case "OK":
        return "bg-status-ok";
      case "Warning":
        return "bg-status-warning";
      case "Critical":
        return "bg-status-critical";
      default:
        return "bg-status-unknown";
    }
  };

  return (
    <div className="bg-ilo-primary text-primary-foreground h-16 px-4 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium truncate">{serverName}</h2>
            <Button variant="ghost" size="icon" className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary/20">
              <Copy size={14} />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <span>{ipAddress}</span>
          </div>
        </div>
        <Separator orientation="vertical" className="h-8 bg-primary-foreground/20" />
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={cn("text-white border-white/20 px-2 py-1", getHealthColor())}>
            System Health: {healthStatus}
          </Badge>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20 hover:text-primary-foreground">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20 hover:text-primary-foreground">
          <Power size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20 hover:text-primary-foreground">
          <Settings size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20 hover:text-primary-foreground">
          <HelpCircle size={20} />
        </Button>
      </div>
    </div>
  );
}

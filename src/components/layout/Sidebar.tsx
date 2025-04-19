
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  Server,
  Home,
  Info,
  FileText,
  AlertCircle,
  Activity,
  Power,
  Monitor,
  Network,
  Settings,
} from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

type SidebarProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export const navItems: NavItem[] = [
  {
    id: "overview",
    label: "Overview",
    icon: <Home size={20} />,
  },
  {
    id: "system-information",
    label: "System Information",
    icon: <Info size={20} />,
  },
  {
    id: "firmware",
    label: "Firmware & OS Software",
    icon: <Server size={20} />,
  },
  {
    id: "ilo-event-log",
    label: "iLO Event Log",
    icon: <AlertCircle size={20} />,
  },
  {
    id: "integrated-log",
    label: "Integrated Management Log",
    icon: <Activity size={20} />,
  },
  {
    id: "power-management",
    label: "Power Management",
    icon: <Power size={20} />,
  },
  {
    id: "remote-console",
    label: "Remote Console",
    icon: <Monitor size={20} />,
  },
  {
    id: "network",
    label: "Network",
    icon: <Network size={20} />,
  },
  {
    id: "administration",
    label: "Administration",
    icon: <Settings size={20} />,
  },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={cn("flex items-center space-x-2", collapsed && "hidden")}>
          <Server className="text-sidebar-primary" size={24} />
          <span className="font-medium text-sidebar-foreground">iLO 4</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <ChevronLeft
            size={20}
            className={cn("transition-transform", collapsed && "rotate-180")}
          />
        </Button>
      </div>
      <Separator className="bg-sidebar-border" />
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                activeTab === item.id && "bg-sidebar-accent text-sidebar-primary font-medium",
                collapsed && "justify-center px-2"
              )}
            >
              {item.icon}
              <span className={cn(collapsed && "hidden")}>{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <div className={cn("text-xs text-sidebar-foreground/70", collapsed && "hidden")}>
          iLO 4 v2.82
        </div>
      </div>
    </div>
  );
}

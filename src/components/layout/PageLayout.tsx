
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface PageLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function PageLayout({ children, activeTab, onTabChange }: PageLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar serverName="ProLiant DL380 Gen10" ipAddress="192.168.1.120" healthStatus="OK" />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}

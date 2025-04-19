
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Overview } from "@/components/tabs/Overview";
import { SystemInformation } from "@/components/tabs/SystemInformation";
import { FirmwareAndSoftware } from "@/components/tabs/FirmwareAndSoftware";
import { EventLog } from "@/components/tabs/EventLog";
import { IntegratedLog } from "@/components/tabs/IntegratedLog";
import { PowerManagement } from "@/components/tabs/PowerManagement";
import { RemoteConsole } from "@/components/tabs/RemoteConsole";
import { Network } from "@/components/tabs/Network";
import { Administration } from "@/components/tabs/Administration";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "system-information":
        return <SystemInformation />;
      case "firmware":
        return <FirmwareAndSoftware />;
      case "ilo-event-log":
        return <EventLog />;
      case "integrated-log":
        return <IntegratedLog />;
      case "power-management":
        return <PowerManagement />;
      case "remote-console":
        return <RemoteConsole />;
      case "network":
        return <Network />;
      case "administration":
        return <Administration />;
      default:
        return <Overview />;
    }
  };

  return (
    <PageLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderActiveTab()}
    </PageLayout>
  );
};

export default Index;

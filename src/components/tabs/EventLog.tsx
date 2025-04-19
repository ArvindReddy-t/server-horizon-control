
import { LogTable, LogEntry } from "@/components/ui/LogTable";

// Mock data for the iLO Event Log
const mockEventLogData: LogEntry[] = [
  {
    id: "1",
    timestamp: "2025-04-19 14:32:10",
    severity: "OK",
    message: "Server power restored",
    category: "Power"
  },
  {
    id: "2",
    timestamp: "2025-04-19 13:15:22",
    severity: "OK",
    message: "Server power removed",
    category: "Power"
  },
  {
    id: "3",
    timestamp: "2025-04-18 22:43:11",
    severity: "Warning",
    message: "Temperature threshold exceeded on processor 1",
    category: "Temperature"
  },
  {
    id: "4",
    timestamp: "2025-04-18 22:40:05",
    severity: "Warning",
    message: "Fan 3 speed below threshold",
    category: "Cooling"
  },
  {
    id: "5",
    timestamp: "2025-04-17 09:12:33",
    severity: "OK",
    message: "iLO firmware update successful - version 2.82",
    category: "Firmware"
  },
  {
    id: "6",
    timestamp: "2025-04-15 16:24:19",
    severity: "OK",
    message: "User admin logged in from 192.168.1.100",
    category: "Security"
  },
  {
    id: "7",
    timestamp: "2025-04-15 15:42:51",
    severity: "Critical",
    message: "Multiple login failures detected",
    category: "Security"
  },
  {
    id: "8",
    timestamp: "2025-04-14 11:30:22",
    severity: "OK",
    message: "Network settings changed",
    category: "Network"
  }
];

export function EventLog() {
  return (
    <div className="space-y-6">
      <LogTable 
        title="iLO Event Log" 
        description="Displays recent iLO subsystem events" 
        data={mockEventLogData} 
      />
    </div>
  );
}

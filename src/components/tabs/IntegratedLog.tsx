
import { LogTable, LogEntry } from "@/components/ui/LogTable";

// Mock data for the Integrated Management Log
const mockIntegratedLogData: LogEntry[] = [
  {
    id: "1",
    timestamp: "2025-04-19 14:32:10",
    severity: "OK",
    message: "System Power On",
    category: "System Boot"
  },
  {
    id: "2",
    timestamp: "2025-04-19 13:15:22",
    severity: "OK",
    message: "System Power Off",
    category: "System Shutdown"
  },
  {
    id: "3",
    timestamp: "2025-04-18 22:45:17",
    severity: "Warning",
    message: "Correctable memory error threshold exceeded - DIMM 3",
    category: "Memory"
  },
  {
    id: "4",
    timestamp: "2025-04-18 11:22:05",
    severity: "OK",
    message: "BIOS configuration changed",
    category: "Configuration"
  },
  {
    id: "5",
    timestamp: "2025-04-17 09:10:33",
    severity: "OK",
    message: "System firmware updated",
    category: "Firmware"
  },
  {
    id: "6",
    timestamp: "2025-04-16 16:24:19",
    severity: "Warning",
    message: "Power supply 2 input lost",
    category: "Power"
  },
  {
    id: "7",
    timestamp: "2025-04-16 16:24:10",
    severity: "Warning",
    message: "Redundancy lost - Power supplies",
    category: "Power"
  },
  {
    id: "8",
    timestamp: "2025-04-15 08:30:22",
    severity: "Critical",
    message: "Drive array controller failure detected on slot 0",
    category: "Storage"
  },
  {
    id: "9",
    timestamp: "2025-04-14 12:15:43",
    severity: "OK",
    message: "Drive array - logical drive 1 created",
    category: "Storage"
  },
  {
    id: "10",
    timestamp: "2025-04-13 19:12:30",
    severity: "Warning",
    message: "Ambient temperature above threshold",
    category: "Temperature"
  }
];

export function IntegratedLog() {
  return (
    <div className="space-y-6">
      <LogTable 
        title="Integrated Management Log" 
        description="Displays server management and hardware events" 
        data={mockIntegratedLogData} 
      />
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerStatusCard } from "@/components/ui/ServerStatusCard";
import { StatusIndicator } from "@/components/ui/StatusIndicator";

export function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Server Status Card */}
        <ServerStatusCard />

        {/* Server Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Server Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Product Name</span>
                <span className="font-medium">ProLiant DL380 Gen10</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Serial Number</span>
                <span className="font-medium">CZ123456789</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Product ID</span>
                <span className="font-medium">123456-B21</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">UUID</span>
                <span className="font-medium">123e4567-e89b-12d3-a456-426614174000</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">BIOS Version</span>
                <span className="font-medium">U30 v2.42 (07/15/2023)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Power & Thermal Status */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Power & Thermal Status</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Power State</span>
                <div className="flex items-center gap-2">
                  <StatusIndicator status="OK" />
                  <span className="font-medium">On</span>
                </div>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Power Usage</span>
                <span className="font-medium">178 Watts</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Inlet Temp</span>
                <div className="flex items-center gap-2">
                  <StatusIndicator status="OK" />
                  <span className="font-medium">23°C / 73.4°F</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">CPU Temp</span>
                <div className="flex items-center gap-2">
                  <StatusIndicator status="OK" />
                  <span className="font-medium">41°C / 105.8°F</span>
                </div>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">UID Light</span>
                <span className="font-medium">Off</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* iLO Information */}
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">iLO Information</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">iLO Firmware Version</span>
                <span className="font-medium">2.82 Jun 30 2023</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">License Type</span>
                <span className="font-medium">iLO Advanced</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">IP Address</span>
                <span className="font-medium">192.168.1.120</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Hostname</span>
                <span className="font-medium">ilo-dl380gen10.local</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">MAC Address</span>
                <span className="font-medium">00:53:00:AA:BB:CC</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Last Update</span>
                <span className="font-medium">04/19/2025 14:32:10</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

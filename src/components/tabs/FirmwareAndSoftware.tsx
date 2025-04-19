
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Upload } from "lucide-react";

export function FirmwareAndSoftware() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="firmware" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-2">
          <TabsTrigger value="firmware">Firmware</TabsTrigger>
          <TabsTrigger value="os">OS Software</TabsTrigger>
          <TabsTrigger value="update">Update</TabsTrigger>
        </TabsList>
        
        <TabsContent value="firmware" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Installed Firmware</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Component</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Version</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Build Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">iLO 4</td>
                      <td className="px-4 py-3 text-sm">2.82</td>
                      <td className="px-4 py-3 text-sm">Jun 30 2023</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">System ROM</td>
                      <td className="px-4 py-3 text-sm">U30 v2.42</td>
                      <td className="px-4 py-3 text-sm">Jul 15 2023</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Power Management Controller</td>
                      <td className="px-4 py-3 text-sm">1.0.8</td>
                      <td className="px-4 py-3 text-sm">May 12 2023</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Smart Array P408i-a</td>
                      <td className="px-4 py-3 text-sm">3.53</td>
                      <td className="px-4 py-3 text-sm">Apr 22 2023</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Intel X710 NIC</td>
                      <td className="px-4 py-3 text-sm">20.5.13</td>
                      <td className="px-4 py-3 text-sm">Mar 05 2023</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <RefreshCw size={16} />
                  <span>Refresh</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="os" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Installed OS Software</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Version</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Install Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">Windows Server</td>
                      <td className="px-4 py-3 text-sm">2022 Datacenter</td>
                      <td className="px-4 py-3 text-sm">Jan 15 2025</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">HP System Management Homepage</td>
                      <td className="px-4 py-3 text-sm">9.10</td>
                      <td className="px-4 py-3 text-sm">Jan 15 2025</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">HP Smart Storage Administrator</td>
                      <td className="px-4 py-3 text-sm">5.20.17.0</td>
                      <td className="px-4 py-3 text-sm">Jan 15 2025</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">HP Agentless Management Service</td>
                      <td className="px-4 py-3 text-sm">11.4.0</td>
                      <td className="px-4 py-3 text-sm">Jan 15 2025</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="update" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Firmware Update</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Upload Firmware</h3>
                  <p className="text-sm text-muted-foreground mb-4">Select a firmware image file to upload and install.</p>
                  <div className="flex items-center gap-2">
                    <Button className="flex items-center gap-2">
                      <Upload size={16} />
                      <span>Browse & Upload</span>
                    </Button>
                    <span className="text-sm text-muted-foreground">No file selected</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Online Repository</h3>
                  <p className="text-sm text-muted-foreground mb-4">Check for updates from the HP online repository.</p>
                  <Button variant="outline">Check for Updates</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

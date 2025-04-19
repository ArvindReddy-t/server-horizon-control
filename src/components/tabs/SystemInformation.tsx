
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SystemInformation() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="processor" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="processor">Processor</TabsTrigger>
          <TabsTrigger value="memory">Memory</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="network">Network Adapters</TabsTrigger>
        </TabsList>
        
        <TabsContent value="processor" className="pt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Processor Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Processor 1</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Processor Name</span>
                      <span className="font-medium">Intel Xeon Gold 6248R</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Speed</span>
                      <span className="font-medium">3.0 GHz</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Cores</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Threads</span>
                      <span className="font-medium">48</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium">OK</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Processor 2</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Processor Name</span>
                      <span className="font-medium">Intel Xeon Gold 6248R</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Speed</span>
                      <span className="font-medium">3.0 GHz</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Cores</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Threads</span>
                      <span className="font-medium">48</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium">OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="memory" className="pt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Memory Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Memory</span>
                  <span className="font-medium">384 GB</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Location</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Size</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Speed</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-card divide-y divide-border">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">DIMM {i + 1}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">32 GB</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">3200 MHz</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">DDR4</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">OK</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storage" className="pt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Storage Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Controller</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Location</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Capacity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Interface</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">Smart Array P408i-a</td>
                      <td className="px-4 py-3 text-sm">Bay 1</td>
                      <td className="px-4 py-3 text-sm">1.92 TB</td>
                      <td className="px-4 py-3 text-sm">SSD SATA</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Smart Array P408i-a</td>
                      <td className="px-4 py-3 text-sm">Bay 2</td>
                      <td className="px-4 py-3 text-sm">1.92 TB</td>
                      <td className="px-4 py-3 text-sm">SSD SATA</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Smart Array P408i-a</td>
                      <td className="px-4 py-3 text-sm">Bay 3</td>
                      <td className="px-4 py-3 text-sm">1.92 TB</td>
                      <td className="px-4 py-3 text-sm">SSD SATA</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Smart Array P408i-a</td>
                      <td className="px-4 py-3 text-sm">Bay 4</td>
                      <td className="px-4 py-3 text-sm">1.92 TB</td>
                      <td className="px-4 py-3 text-sm">SSD SATA</td>
                      <td className="px-4 py-3 text-sm">OK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="pt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Network Adapters</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Adapter</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Port</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">MAC Address</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Speed</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">Intel X710-DA2</td>
                      <td className="px-4 py-3 text-sm">Port 1</td>
                      <td className="px-4 py-3 text-sm">00:53:00:AA:BB:CC</td>
                      <td className="px-4 py-3 text-sm">Linked</td>
                      <td className="px-4 py-3 text-sm">10 Gb</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Intel X710-DA2</td>
                      <td className="px-4 py-3 text-sm">Port 2</td>
                      <td className="px-4 py-3 text-sm">00:53:00:AA:BB:CD</td>
                      <td className="px-4 py-3 text-sm">Linked</td>
                      <td className="px-4 py-3 text-sm">10 Gb</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Embedded LOM</td>
                      <td className="px-4 py-3 text-sm">Port 1</td>
                      <td className="px-4 py-3 text-sm">00:53:00:AA:BB:CE</td>
                      <td className="px-4 py-3 text-sm">Linked</td>
                      <td className="px-4 py-3 text-sm">1 Gb</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Embedded LOM</td>
                      <td className="px-4 py-3 text-sm">Port 2</td>
                      <td className="px-4 py-3 text-sm">00:53:00:AA:BB:CF</td>
                      <td className="px-4 py-3 text-sm">Not linked</td>
                      <td className="px-4 py-3 text-sm">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

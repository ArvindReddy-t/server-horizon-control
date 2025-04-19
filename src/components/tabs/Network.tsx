
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Network as NetworkIcon, Settings, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Network() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-1 md:grid-cols-4 gap-2">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="ilo">iLO Network</TabsTrigger>
          <TabsTrigger value="interfaces">Network Interfaces</TabsTrigger>
          <TabsTrigger value="settings">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm md:col-span-2">
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-medium">iLO Network Summary</CardTitle>
                <Button variant="outline" size="icon">
                  <RefreshCw size={16} />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">MAC Address</span>
                      <span className="font-medium">00:53:00:AA:BB:CC</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">IPv4 Address</span>
                      <span className="font-medium">192.168.1.120</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">IPv4 Subnet Mask</span>
                      <span className="font-medium">255.255.255.0</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">IPv4 Gateway</span>
                      <span className="font-medium">192.168.1.1</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Link Status</span>
                      <Badge variant="outline" className="bg-status-ok text-white border-0">
                        Connected
                      </Badge>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Speed</span>
                      <span className="font-medium">1 Gbps</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Duplex</span>
                      <span className="font-medium">Full Duplex</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">VLAN</span>
                      <span className="font-medium">None</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Quick Tasks</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <NetworkIcon size={16} className="mr-2" />
                    Ping Test
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings size={16} className="mr-2" />
                    Network Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <RefreshCw size={16} className="mr-2" />
                    Refresh
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="ilo" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">iLO Network Configuration</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">IPv4 Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">DHCP</span>
                        <span className="font-medium">Disabled</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">IPv4 Address</span>
                        <span className="font-medium">192.168.1.120</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">IPv4 Subnet Mask</span>
                        <span className="font-medium">255.255.255.0</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">IPv4 Gateway</span>
                        <span className="font-medium">192.168.1.1</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">DNS Mode</span>
                        <span className="font-medium">Manual</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Primary DNS</span>
                        <span className="font-medium">8.8.8.8</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Secondary DNS</span>
                        <span className="font-medium">8.8.4.4</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Domain Name</span>
                        <span className="font-medium">example.local</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">IPv6 Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">IPv6 Status</span>
                        <span className="font-medium">Disabled</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interfaces" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Server Network Interfaces</CardTitle>
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
        
        <TabsContent value="settings" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Advanced Network Settings</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">SNMP Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">SNMP Status</span>
                        <span className="font-medium">Enabled</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">SNMP Port</span>
                        <span className="font-medium">161</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">SNMP Trap Destination</span>
                        <span className="font-medium">192.168.1.50</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Community String</span>
                        <span className="font-medium">•••••••••</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">VLAN Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">VLAN Status</span>
                        <span className="font-medium">Disabled</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

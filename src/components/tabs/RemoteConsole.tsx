
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, ArrowRight, Settings } from "lucide-react";

export function RemoteConsole() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="console" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-2">
          <TabsTrigger value="console">Remote Console</TabsTrigger>
          <TabsTrigger value="media">Virtual Media</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="console" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">HTML5 Remote Console</CardTitle>
                <CardDescription>Access the server console through your browser</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center flex-col md:flex-row gap-4">
                    <Monitor size={80} className="text-muted-foreground" />
                    <div>
                      <h3 className="font-medium mb-1">HTML5 Console</h3>
                      <p className="text-sm text-muted-foreground">Access the server console directly in your browser without plugins.</p>
                    </div>
                  </div>
                  <Button className="w-full">Launch HTML5 Console</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Desktop Client</CardTitle>
                <CardDescription>Launch remote console using desktop client</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center flex-col md:flex-row gap-4">
                    <Monitor size={80} className="text-muted-foreground" />
                    <div>
                      <h3 className="font-medium mb-1">iLO Remote Console</h3>
                      <p className="text-sm text-muted-foreground">Launch the remote console application on your desktop.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Download Client</Button>
                  <Button className="w-full">Launch Client</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="media" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Virtual Media</CardTitle>
              <CardDescription>Connect virtual media to the server</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">CD/DVD</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Status: <span className="font-medium">Not Connected</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline">Browse</Button>
                      <Button>Connect</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Floppy/USB Key</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Status: <span className="font-medium">Not Connected</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline">Browse</Button>
                      <Button>Connect</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Image File</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Status: <span className="font-medium">Not Connected</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline">Browse URL</Button>
                      <Button>Connect</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Remote Console Settings</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Encryption</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="justify-start border-primary text-primary">AES-128 (Recommended)</Button>
                    <Button variant="outline" className="justify-start">AES-256</Button>
                    <Button variant="outline" className="justify-start">None</Button>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Console Mode</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start border-primary text-primary">Auto</Button>
                    <Button variant="outline" className="justify-start">Full Performance</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Advanced Settings</h3>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Settings size={16} />
                    <span>Configure Advanced Settings</span>
                    <ArrowRight size={16} className="ml-auto" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

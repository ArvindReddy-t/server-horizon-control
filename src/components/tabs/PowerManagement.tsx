
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Power, RefreshCw, PowerOff, RotateCw } from "lucide-react";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { Progress } from "@/components/ui/progress";

export function PowerManagement() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="control" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-2">
          <TabsTrigger value="control">Power Control</TabsTrigger>
          <TabsTrigger value="consumption">Power Consumption</TabsTrigger>
          <TabsTrigger value="settings">Power Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="control" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Virtual Power Control</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-3">
                      <StatusIndicator status="OK" size="lg" />
                      <div>
                        <div className="text-lg font-medium">Server Power</div>
                        <div className="text-muted-foreground">Current State: On</div>
                      </div>
                    </div>
                    <Button variant="outline" size="icon">
                      <RefreshCw size={16} />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="flex items-center gap-2">
                          <PowerOff size={16} />
                          <span>Momentary Press</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Server Power Off</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will perform a momentary press of the power button, initiating a graceful shutdown. Continue?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Power Off</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="flex items-center gap-2">
                          <PowerOff size={16} />
                          <span>Press and Hold</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Force Server Power Off</AlertDialogTitle>
                          <AlertDialogDescription>
                            WARNING: This will force an immediate shutdown. Any unsaved data will be lost. Continue?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Force Power Off</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                          <RotateCw size={16} />
                          <span>Cold Boot</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Cold Boot Server</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will force an immediate power cycle. Any unsaved data will be lost. Continue?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Cold Boot</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Power size={16} />
                          <span>Reset</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Reset Server</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will perform a warm reset of the server. Any unsaved data will be lost. Continue?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Reset</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Power Status</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Power State</span>
                    <span className="font-medium">On</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Last Power Event</span>
                    <span className="font-medium">Power On</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Power On Time</span>
                    <span className="font-medium">14 days, 7 hours</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">System Health</span>
                    <div className="flex items-center gap-2">
                      <StatusIndicator status="OK" />
                      <span className="font-medium">OK</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="consumption" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Current Power Consumption</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold">178W</div>
                    <div className="text-sm text-muted-foreground">Current draw</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>0W</span>
                      <span>500W</span>
                    </div>
                    <Progress value={36} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Min: 120W</span>
                      <span>Max: 410W</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Power Statistics</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Average Power</span>
                    <span className="font-medium">185 Watts</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Maximum Power</span>
                    <span className="font-medium">410 Watts</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Minimum Power</span>
                    <span className="font-medium">120 Watts</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Power Cap</span>
                    <span className="font-medium">Not Set</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Power Settings</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Power Regulator Settings</h3>
                  <p className="text-sm text-muted-foreground mb-4">Configure how the server regulates processor frequency and voltage.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="justify-start border-primary text-primary">Dynamic Power Savings</Button>
                    <Button variant="outline" className="justify-start">Static Low Power</Button>
                    <Button variant="outline" className="justify-start">Static High Performance</Button>
                    <Button variant="outline" className="justify-start">OS Control</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Power Capping</h3>
                  <p className="text-sm text-muted-foreground mb-4">Configure a power cap to limit the power consumption of the server.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Power cap not configured</div>
                    <Button>Configure</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

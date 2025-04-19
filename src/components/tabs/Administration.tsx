
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Key, Shield, Wrench } from "lucide-react";

export function Administration() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="users">Users & Access</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="license">Licensing</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg font-medium">Users & Directory</CardTitle>
              <Button>Add User</Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">User Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Login Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Privileges</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">Administrator</td>
                      <td className="px-4 py-3 text-sm">admin</td>
                      <td className="px-4 py-3 text-sm">Administrator</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm" disabled>Delete</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Operator</td>
                      <td className="px-4 py-3 text-sm">operator</td>
                      <td className="px-4 py-3 text-sm">Operator</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Delete</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Monitor</td>
                      <td className="px-4 py-3 text-sm">monitor</td>
                      <td className="px-4 py-3 text-sm">Read-Only</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 border-t pt-4">
                <h3 className="font-medium mb-2">Directory Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Directory Authentication</span>
                      <span className="font-medium">Disabled</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Directory Server Type</span>
                      <span className="font-medium">None</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">SSL/TLS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">SSL Version</span>
                        <span className="font-medium">TLS 1.2/1.3 Only</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Certificate Status</span>
                        <span className="font-medium">Valid</span>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <Button variant="outline">Manage SSL Certificate</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">SSH</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">SSH Status</span>
                        <span className="font-medium">Enabled</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">SSH Port</span>
                        <span className="font-medium">22</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Access Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Session Timeout</span>
                        <span className="font-medium">30 minutes</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Login Security Banner</span>
                        <span className="font-medium">Disabled</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Authentication Failure Logging</span>
                        <span className="font-medium">Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="license" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">iLO Licensing</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Current License</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">License Type</span>
                        <span className="font-medium">iLO Advanced</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">License Key</span>
                        <span className="font-medium">XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Expiration</span>
                        <span className="font-medium">Perpetual</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Install License</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter License Key"
                      />
                    </div>
                    <Button>Activate License</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="maintenance" className="pt-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium mb-1">Reset iLO</h3>
                      <p className="text-sm text-muted-foreground">Reset the iLO processor. This will disconnect all active users.</p>
                    </div>
                    <Button variant="outline">Reset iLO</Button>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium mb-1">Factory Reset</h3>
                      <p className="text-sm text-muted-foreground">Reset iLO to factory default settings. This will erase all configuration.</p>
                    </div>
                    <Button variant="destructive">Factory Reset</Button>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium mb-1">Backup Configuration</h3>
                      <p className="text-sm text-muted-foreground">Create a backup of the iLO configuration.</p>
                    </div>
                    <Button>Download Backup</Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium mb-1">Restore Configuration</h3>
                      <p className="text-sm text-muted-foreground">Restore from a previously created backup file.</p>
                    </div>
                    <Button variant="outline">Browse & Restore</Button>
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

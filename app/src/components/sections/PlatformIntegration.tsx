import { Info, Trash, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { useState } from "react"
import { AgentTypes } from "@/types/agent"

interface PlatformIntegrationProps {
  agent: AgentTypes
  setAgent: (agent: AgentTypes) => void
  onBack: () => void;
  onNext: () => void;
}

const PlatformIntegration: React.FC<PlatformIntegrationProps> = ({ agent, setAgent, onBack, onNext }) => {
  const [apiKey, setApiKey] = useState<string|null>(null);
  const [reviewer, setReviewer] = useState<string>('');

  const handleAddReviewer = () => {
      if (reviewer.trim()) {
        setAgent({...agent, reviewers: [...agent.reviewers, reviewer.trim()]});
        setReviewer('');
      }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddReviewer();
      }
  }

  const handleRemoveReviewer = (reviewer: string) => {
    setAgent({...agent, reviewers: agent.reviewers.filter((r: string) => r !== reviewer)});
  }

  return (
      <div className="space-y-4 md:space-y-8">
          <Card className="rounded-xl border p-4 md:p-6">
            <h2 className="text-xl font-semibold">Platform Integration</h2>

            <div className="mt-4 text-xs md:text-sm text-sidebar-foreground">
              Connect your agent to external services and configure integration settings
            </div>

            <div className="mt-6 space-y-4 md:space-y-8">
              {/* Telegram Section */}
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xs md:text-sm font-medium text-sidebar-foreground uppercase">Telegram Interactions</h3>
                <p className="text-xs md:text-sm text-sidebar-foreground">Configure how your agent interacts on Telegram</p>
                
                <div className="flex items-center justify-between rounded-lg border p-2 md:p-4">
                  <div className="flex items-center gap-2 md:gap-5">
                    <div className="flex h-7 w-7 items-center justify-center bg-gray-800 rounded-full">
                      <img src="/assets/icons/telegram.svg" alt="Telegram"  width={16} height={16} />
                    </div>
                    <div>
                      <div className="font-medium text-xs md:text-sm">Telegram Integration</div>
                      <div className="text-xs md:text-sm text-sidebar-foreground">Interact on Telegram</div>
                    </div>
                  </div>
                  <div className="rounded-md border bg-amber-50 border-amber-500 px-2 md:px-3 py-1 text-xs md:text-sm text-amber-600">
                    Coming Soon
                  </div>
                </div>
              </div>

              {/* Twitter Section */}
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xs md:text-sm font-medium text-sidebar-foreground uppercase">Twitter Interactions</h3>
                <p className="text-xs md:text-sm text-sidebar-foreground">Configure how your agent interacts on Twitter</p>
                
                <Card className="shadow-none">
                  <CardContent className="p-2 md:p-3">
                    <div className="flex items-center justify-between pb-2 md:pb-3 border-b border-gray-200">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                          <svg className="h-7 w-7 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-xs md:text-sm">X(Twitter) Integration</div>
                          <div className="text-xs md:text-sm text-sidebar-foreground">Post, reply, and interact</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <span className="text-xs md:text-sm">Configure</span>
                      </Button>
                    </div>

                    <div className="space-y-2 md:space-y-4 mt-2 md:mt-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="api-key" className="text-xs md:text-sm">API Key</Label>
                        <Input 
                          id="api-key" 
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                          value={apiKey || ''}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="placeholder:text-sidebar-foreground text-sidebar-foreground text-xs md:text-sm"
                        />
                        <p className="text-xs md:text-sm text-red-500">Warning: You will not be able to view this API key again after saving.</p>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="example-tweets" className="text-xs md:text-sm">Example Tweets</Label>
                        <Textarea 
                          id="example-tweets"
                          placeholder="Add example tweets to guide your AI's posting style..."
                          className="min-h-[100px] placeholder:text-sidebar-foreground text-sidebar-foreground text-xs md:text-sm"
                        />
                      </div>
                      {apiKey && (
                        <div className="space-y-2 mt-2 md:mt-4">
                          <span className="text-xs md:text-sm">Add Reviewer</span>
                          <div className="flex items-center gap-2">
                              <Input 
                                placeholder="@username" 
                                value={reviewer} 
                                onChange={(e) => setReviewer(e.target.value)}
                                onKeyDown={handleKeyPress}
                                className="placeholder:text-sidebar-foreground text-sidebar-foreground text-xs md:text-sm"
                              />
                              <Button onClick={handleAddReviewer}><Plus className="h-4 w-4" /></Button>
                          </div>
                        </div>
                      )}
                      {agent.reviewers.length > 0 && (
                        <div className="space-y-2 mt-2 md:mt-4">
                          <span className="text-xs md:text-sm">Reviewers</span>
                          <div className="flex flex-col items-start gap-2">
                              {agent.reviewers.map((reviewer: string, index: number) => (
                                  <div key={index} className="flex items-center gap-2 w-full justify-between">
                                      <div className="flex flex-row gap-2">
                                          <img src={`https://unavatar.io/${reviewer}`} alt={reviewer} className="rounded-lg h-7 w-7" width={20} height={20} />
                                          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold">@{reviewer}</div>
                                      </div>
                                      <Button className="border border-red-500 hover:bg-red-50" variant="outline" size="sm" onClick={() => handleRemoveReviewer(reviewer)}>
                                          <Trash className="h-4 w-4 text-red-500" />
                                      </Button>
                                  </div>
                              ))}
                          </div>
                        </div>
                      )}
                      <div className="flex justify-end gap-4 md:gap-10 items-center mt-2 md:mt-4">
                        <Button className="bg-[#F1F5F9] hover:bg-gray-300 text-black shadow-none">
                          <span className="text-xs md:text-sm">Cancel</span>
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <span className="text-xs md:text-sm">Save Configuration</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Grantee Whitelist */}
              <Card className="shadow-none">
                <CardContent className="p-2 md:p-4 space-y-2 md:space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-xs md:text-sm">Grantee Whitelist</span>
                        <Info className="h-4 w-4 text-gray-400" />
                      </div>
                      <Switch 
                        checked={agent.isGrantWhitelisted}
                        onCheckedChange={(checked) => setAgent({...agent, isGrantWhitelisted: checked})}
                      />
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      Projects that do not meet all requirements will be automatically rejected. Qualified projects will be added to the grantee whitelist, but may still require approval based on the configuration below.
                    </div>
                  </div>

                  <div className="space-y-1.5 flex flex-row justify-between items-center w-full">
                    <Label className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Auto Approve Threshold</Label>
                    <Input 
                      type="number"
                      className="max-w-[100px] text-xs md:text-sm"
                      value={agent.autoApproveThreshold}
                      onChange={(e) => setAgent({...agent, autoApproveThreshold: Number(e.target.value)})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                          <Label className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Require Admin Approval</Label>
                          <div className="cursor-help group relative">
                              <Info className="h-3 w-3 text-gray-500" />
                              <div className="hidden group-hover:block absolute top-4 z-10 left-0 px-2 bg-white border border-gray-200 p-1 rounded-lg shadow-md w-[350px] h-[60px]">
                                  <span className="text-xs">
                                    If enabled, even projects below the auto-approve threshold will require admin approval.
                                  </span>
                              </div>
                          </div>
                      </div>
                    <Switch 
                      checked={agent.requireAdminApproval}
                      onCheckedChange={(checked) => setAgent({...agent, requireAdminApproval: checked})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submission Requirements */}
              <div className="space-y-2">
                <h3 className="font-medium text-xs md:text-sm">Submission Requirements</h3>

                <div className="space-y-1.5 flex flex-row justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                      <Label className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Minimum Followings</Label>
                      <div className="cursor-help group relative">
                          <Info className="h-3 w-3 text-gray-500" />
                          <div className="hidden group-hover:block absolute top-4 z-10 left-0 px-2 bg-white border border-gray-200 p-1 rounded-lg shadow-md w-[340px] h-[35px]">
                              <span className="text-xs">
                                Minimum age of the Twitter account in days to be eligible.
                              </span>
                          </div>
                      </div>
                  </div>
                  <Input 
                    type="number"
                    className="max-w-[100px] text-xs md:text-sm"
                    value={agent.minimumFollowing}
                    onChange={(e) => setAgent({...agent, minimumFollowing: Number(e.target.value)})}
                  />
                </div>

                <div className="space-y-1.5 flex flex-row justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                      <Label className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Minimum Account Age</Label>
                      <div className="cursor-help group relative">
                          <Info className="h-3 w-3 text-gray-500" />
                          <div className="hidden group-hover:block absolute top-4 z-10 left-0 px-2 bg-white border border-gray-200 p-1 rounded-lg shadow-md w-[360px] h-[35px]">
                              <span className="text-xs">
                                Require the Twitter account to have a blue verification badge.
                              </span>
                          </div>
                      </div>
                  </div>
                  <Input 
                    type="number"
                    className="max-w-[100px] text-xs md:text-sm"
                    value={agent.miniumAccountAge}
                    onChange={(e) => setAgent({...agent, miniumAccountAge: Number(e.target.value)})}
                  />
                </div>

                <div className="space-y-6 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Label className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Blue Tick (Verified Account)</Label>
                        <div className="cursor-help group relative">
                            <Info className="h-3 w-3 text-gray-500" />
                            <div className="hidden group-hover:block absolute top-4 z-10 left-0 px-2 bg-white border border-gray-200 p-1 rounded-lg shadow-md w-[460px] h-[35px]">
                                <span className="text-xs">
                                  Require the Twitter account to be set up to receive crypto tips  or display NFTs.
                                </span>
                            </div>
                        </div>
                    </div>
                    <Switch 
                      checked={agent.verifiedAccount}
                      onCheckedChange={(checked) => setAgent({...agent, verifiedAccount: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Crypto Settings Enabled</span>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <Switch 
                      checked={agent.cryptoSettingEnabled}
                      onCheckedChange={(checked) => setAgent({...agent, cryptoSettingEnabled: checked})}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-10 flex-col-reverse md:flex-row gap-2">
              <Button variant="outline" onClick={onBack}>
                <span className="text-xs md:text-sm">Back: Token Configuration</span>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={onNext}>
                <span className="text-xs md:text-sm">Next: Grant Canvas</span>
              </Button>
            </div>
          </Card>
      </div>
    )
}

export default PlatformIntegration
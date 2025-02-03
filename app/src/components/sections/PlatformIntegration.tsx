import { Info, Trash, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { useState } from "react"


interface PlatformIntegrationProps {
  onBack: () => void;
  onNext: () => void;
}

const PlatformIntegration: React.FC<PlatformIntegrationProps> = ({ onBack, onNext }) => {
    const [autoApproveThreshold, setAutoApproveThreshold] = useState<number>(0);
    const [minFollowers, setMinFollowers] = useState<number>(0);
    const [minAccountAge, setMinAccountAge] = useState<number>(0);
    const [apiKey, setApiKey] = useState<string|null>(null);
    const [reviewers, setReviewers] = useState<string[]>([]);
    const [reviewer, setReviewer] = useState<string>('');

    const handleAddReviewer = () => {
        if (reviewer.trim()) {
            setReviewers([...reviewers, reviewer.trim()]);
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
        setReviewers(reviewers.filter(r => r !== reviewer));
    }

    return (
        <div className="space-y-8">
            <Card className="rounded-xl border p-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Platform Integration</h2>
                  <Info className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="mt-4 text-sm text-sidebar-foreground">
                Connect your agent to external services and configure integration settings
              </div>

              <div className="mt-6 space-y-8">
                {/* Telegram Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 uppercase">Telegram Interactions</h3>
                  <p className="text-sm text-sidebar-foreground">Configure how your agent interacts on Telegram</p>
                  
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-5">
                      <div className="flex h-7 w-7 items-center justify-center bg-gray-800 rounded-full">
                        <img src="/assets/icons/telegram.svg" alt="Telegram"  width={16} height={16} />
                      </div>
                      <div>
                        <div className="font-medium">Telegram Integration</div>
                        <div className="text-sm text-sidebar-foreground">Interact on Telegram</div>
                      </div>
                    </div>
                    <div className="rounded-md border bg-amber-50 border-amber-500 px-3 py-1 text-xs text-amber-600">
                      Coming Soon
                    </div>
                  </div>
                </div>

                {/* Twitter Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 uppercase">Twitter Interactions</h3>
                  <p className="text-sm text-sidebar-foreground">Configure how your agent interacts on Twitter</p>
                  
                  <Card className="shadow-none">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                            <svg className="h-7 w-7 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">X(Twitter) Integration</div>
                            <div className="text-sm text-sidebar-foreground">Post, reply, and interact</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>

                      <div className="space-y-4 mt-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="api-key">API Key</Label>
                          <Input 
                            id="api-key" 
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                            value={apiKey || ''}
                            onChange={(e) => setApiKey(e.target.value)}
                            className="placeholder:text-sidebar-foreground text-sidebar-foreground"
                          />
                          <p className="text-sm text-red-500">Warning: You will not be able to view this API key again after saving.</p>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="example-tweets">Example Tweets</Label>
                          <Textarea 
                            id="example-tweets"
                            placeholder="Add example tweets to guide your AI's posting style..."
                            className="min-h-[100px] placeholder:text-sidebar-foreground text-sidebar-foreground"
                          />
                        </div>
                        {apiKey && (
                          <div className="space-y-2 mt-4">
                            <span>Add Reviewer</span>
                            <div className="flex items-center gap-2">
                                <Input 
                                  placeholder="@username" 
                                  value={reviewer} 
                                  onChange={(e) => setReviewer(e.target.value)}
                                  onKeyDown={handleKeyPress}
                                  className="placeholder:text-sidebar-foreground text-sidebar-foreground"
                                />
                                <Button onClick={handleAddReviewer}><Plus className="h-4 w-4" /></Button>
                            </div>
                          </div>
                        )}
                        {reviewers.length > 0 && (
                          <div className="space-y-2 mt-4">
                            <span>Reviewers</span>
                            <div className="flex flex-col items-start gap-2">
                                {reviewers.map((reviewer, index) => (
                                    <div key={index} className="flex items-center gap-2 w-full justify-between">
                                        <div className="flex flex-row gap-2">
                                            <img src={`https://unavatar.io/${reviewer}`} alt={reviewer} className="rounded-lg h-7 w-7" width={20} height={20} />
                                            <div className="flex items-center gap-2 text-sm font-semibold">@{reviewer}</div>
                                        </div>
                                        <Button className="border border-red-500 hover:bg-red-50" variant="outline" size="sm" onClick={() => handleRemoveReviewer(reviewer)}>
                                            <Trash className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                          </div>
                        )}
                        <div className="flex justify-end gap-10 items-center mt-4">
                          <Button className="bg-[#F1F5F9] hover:bg-gray-300 text-black shadow-none">Cancel</Button>
                          <Button className="bg-blue-600 hover:bg-blue-700">Save Configuration</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Grantee Whitelist */}
                <Card className="shadow-none">
                  <CardContent className="p-4 space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Grantee Whitelist</span>
                          <Info className="h-4 w-4 text-gray-400" />
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        Projects that do not meet all requirements will be automatically rejected. Qualified projects will be added to the grantee whitelist, but may still require approval based on the configuration below.
                      </div>
                    </div>

                    <div className="space-y-1.5 flex flex-row justify-between items-center w-full">
                      <Label className="text-sm text-gray-500">Auto Approve Threshold</Label>
                      <Input 
                        type="number"
                        className="max-w-[100px]"
                        value={autoApproveThreshold}
                        onChange={(e) => setAutoApproveThreshold(Number(e.target.value))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Label className="text-sm text-gray-500">Require Admin Approval</Label>
                            <div className="cursor-help group relative">
                                <Info className="h-3 w-3 text-gray-500" />
                                <div className="hidden group-hover:block absolute top-4 z-10 left-0 px-2 bg-white border border-gray-200 p-1 rounded-lg shadow-md w-[350px] h-[60px]">
                                    <span className="text-xs">
                                      If enabled, even projects below the auto-approve threshold will require admin approval.
                                    </span>
                                </div>
                            </div>
                        </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                {/* Submission Requirements */}
                <div className="space-y-2">
                  <h3 className="font-medium">Submission Requirements</h3>

                  <div className="space-y-1.5 flex flex-row justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                        <Label className="text-sm text-gray-500">Minimum Followings</Label>
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
                      className="max-w-[100px]"
                      value={minFollowers}
                      onChange={(e) => setMinFollowers(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-row justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                        <Label className="text-sm text-gray-500">Minimum Account Age</Label>
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
                      className="max-w-[100px]"
                      value={minAccountAge}
                      onChange={(e) => setMinAccountAge(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-6 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                          <Label className="text-sm text-gray-500">Blue Tick (Verified Account)</Label>
                          <div className="cursor-help group relative">
                              <Info className="h-3 w-3 text-gray-500" />
                              <div className="hidden group-hover:block absolute top-4 z-10 left-0 px-2 bg-white border border-gray-200 p-1 rounded-lg shadow-md w-[460px] h-[35px]">
                                  <span className="text-xs">
                                    Require the Twitter account to be set up to receive crypto tips  or display NFTs.
                                  </span>
                              </div>
                          </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Crypto Settings Enabled</span>
                        <Info className="h-4 w-4 text-gray-400" />
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-10">
                <Button variant="outline" onClick={onBack}>Back: Token Configuration</Button>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={onNext}>
                  Next: Grant Canvas
                </Button>
              </div>
            </Card>
        </div>
    )
}

export default PlatformIntegration
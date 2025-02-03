import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from 'lucide-react'
import { AgentTypes } from '@/types/agent'
interface WalletConfigurationProps {
  onBack: () => void;
  onDeploy: () => void;
  agent: AgentTypes
  setAgent: (value: AgentTypes) => void;
}

const WalletConfiguration: React.FC<WalletConfigurationProps> = ({ onBack, onDeploy, agent, setAgent }) => {
    return (
        <div className="space-y-8">
        <Card className="rounded-xl border p-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Wallet Configuration</h2>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="mt-4 text-sm text-sidebar-foreground">
            Set up your agent's wallet and Payout rules
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-1.5">
              <Label htmlFor="treasury-wallet">Treasury Wallet Address</Label>
              <Input 
                id="treasury-wallet" 
                placeholder="Enter Your Treasury Wallet Address"
                value={agent.treasuryAddress}
                onChange={(e) => setAgent({...agent, treasuryAddress: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Payout Frequency</Label>
              <Select defaultValue={agent.payoutFrequency}
                onValueChange={(value) => setAgent({...agent, payoutFrequency: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payout frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Maximum Weekly Payout</Label>
              <Select defaultValue="1000"
                onValueChange={(value) => setAgent({...agent, maximumPayoutFrequency: Number(value)})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Enter Maximum Weekly Payout" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">1,000 GRANTS</SelectItem>
                  <SelectItem value="5000">5,000 GRANTS</SelectItem>
                  <SelectItem value="10000">10,000 GRANTS</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Payout Day</Label>
              <Select defaultValue="monday"
                onValueChange={(value) => setAgent({...agent, maximumPayoutDay: Number(value)})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payout day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monday">Monday</SelectItem>
                  <SelectItem value="tuesday">Tuesday</SelectItem>
                  <SelectItem value="wednesday">Wednesday</SelectItem>
                  <SelectItem value="thursday">Thursday</SelectItem>
                  <SelectItem value="friday">Friday</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="payout-buffer">Payout Buffer (hours)</Label>
              <Input 
                id="payout-buffer" 
                type="number"
                placeholder="Enter payout buffer in hours"
                value={agent.payoutBuffer || ''}
                onChange={(e) => setAgent({...agent, payoutBuffer: Number(e.target.value)})}
              />
              <p className="text-sm text-gray-500">
                Time period during which decisions can be vetoed before the actual payout occurs.
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                <div className="font-medium">Deployment Cost</div>
              </div>
              <div className="mt-1 text-sm text-gray-600 flex items-center gap-1">
                <span>This covers infrastructure and initial setup costs 100</span> 
                <img src="/assets/icons/money.svg" alt="GRANTS" width={16} height={16} />
                <span>$GRANTS</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between pt-10">
            <Button variant="outline" onClick={onBack}>Back: Grant Canvas</Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={onDeploy}
            >
              Deploy Agent
            </Button>
          </div>
        </Card>
      </div>
    )
}

export default WalletConfiguration;
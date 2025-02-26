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
  agent: AgentTypes;
  setAgent: React.Dispatch<React.SetStateAction<AgentTypes>>;
}

const WalletConfiguration: React.FC<WalletConfigurationProps> = ({ onBack, onDeploy, agent, setAgent }) => {
  const [errors, setErrors] = useState({
    treasuryAddress: '',
    payoutFrequency: '',
    maximumPayoutFrequency: '',
    maximumPayoutDay: '',
    payoutBuffer: ''
  })

  const validateField = (name: string, value: string | number) => {
    switch(name) {
      case 'treasuryAddress':
        if (!value) return 'Treasury address is required'
        if (typeof value === 'string' && !value.includes('.near')) return 'Invalid NEAR address format'
        return ''
      case 'payoutFrequency':
        if (!value) return 'Payout frequency is required'
        return ''
      case 'maximumPayoutFrequency':
        if (!value) return 'Maximum payout frequency is required'
        if (typeof value === 'number' && value <= 0) return 'Must be greater than 0'
        return ''
      case 'maximumPayoutDay':
        if (!value) return 'Maximum payout day is required'
        if (typeof value === 'number' && (value < 1 || value > 7)) return 'Must be between 1 and 7'
        return ''
      case 'payoutBuffer':
        if (!value) return 'Payout buffer is required'
        if (typeof value === 'number' && value < 0) return 'Must be a positive number'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (name: string, value: string | number) => {
    setErrors(prev => ({...prev, [name]: validateField(name, value)}))
    setAgent((p: AgentTypes) => ({...p, [name]: value} as AgentTypes))
  }

  const handleDeploy = () => {
    // Validate all fields
    const newErrors = {
      treasuryAddress: validateField('treasuryAddress', agent.treasuryAddress),
      payoutFrequency: validateField('payoutFrequency', agent.payoutFrequency),
      maximumPayoutFrequency: validateField('maximumPayoutFrequency', agent.maximumPayoutFrequency),
      maximumPayoutDay: validateField('maximumPayoutDay', agent.maximumPayoutDay),
      payoutBuffer: validateField('payoutBuffer', agent.payoutBuffer)
    }
    
    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return
    }

    onDeploy()
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="rounded-xl border p-4 md:p-6">
        <h2 className="text-xl font-semibold">Wallet Configuration</h2>
        
        <div className="mt-4 text-xs md:text-sm text-sidebar-foreground">
          Set up your agent's wallet and Payout rules
        </div>

        <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
          <div className="space-y-1.5">
            <Label htmlFor="treasury-wallet" className="text-xs md:text-sm">Treasury Wallet Address</Label>
            <Input 
              id="treasury-wallet" 
              placeholder="Enter Your Treasury Wallet Address"
              className={`text-xs md:text-sm placeholder:text-gray-400 ${errors.treasuryAddress ? 'border-red-500' : ''}`}
              value={agent.treasuryAddress}
              onChange={(e) => handleInputChange('treasuryAddress', e.target.value)}
            />
            {errors.treasuryAddress && <p className="text-red-500 text-xs mt-1">{errors.treasuryAddress}</p>}
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs md:text-sm">Payout Frequency</Label>
            <Select defaultValue={agent.payoutFrequency}
              onValueChange={(value) => handleInputChange('payoutFrequency', value)}
            >
              <SelectTrigger className={`text-xs md:text-sm ${errors.payoutFrequency ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select payout frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly" className="text-xs md:text-sm">Weekly</SelectItem>
                <SelectItem value="biweekly" className="text-xs md:text-sm">Bi-weekly</SelectItem>
                <SelectItem value="monthly" className="text-xs md:text-sm">Monthly</SelectItem>
              </SelectContent>
            </Select>
            {errors.payoutFrequency && <p className="text-red-500 text-xs mt-1">{errors.payoutFrequency}</p>}
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs md:text-sm">Maximum Weekly Payout</Label>
            <Select defaultValue="1000"
              onValueChange={(value) => handleInputChange('maximumPayoutFrequency', Number(value))}
            >
              <SelectTrigger className={`text-xs md:text-sm ${errors.maximumPayoutFrequency ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Enter Maximum Weekly Payout" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1000" className="text-xs md:text-sm">1,000 GRANTS</SelectItem>
                <SelectItem value="5000" className="text-xs md:text-sm">5,000 GRANTS</SelectItem>
                <SelectItem value="10000" className="text-xs md:text-sm">10,000 GRANTS</SelectItem>
              </SelectContent>
            </Select>
            {errors.maximumPayoutFrequency && <p className="text-red-500 text-xs mt-1">{errors.maximumPayoutFrequency}</p>}
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs md:text-sm">Payout Day</Label>
            <Select defaultValue="monday"
              onValueChange={(value) => handleInputChange('maximumPayoutDay', Number(value))}
            >
              <SelectTrigger className={`text-xs md:text-sm ${errors.maximumPayoutDay ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select payout day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1" className="text-xs md:text-sm">Monday</SelectItem>
                <SelectItem value="2" className="text-xs md:text-sm">Tuesday</SelectItem>
                <SelectItem value="3" className="text-xs md:text-sm">Wednesday</SelectItem>
                <SelectItem value="4" className="text-xs md:text-sm">Thursday</SelectItem>
                <SelectItem value="5" className="text-xs md:text-sm">Friday</SelectItem>
              </SelectContent>
            </Select>
            {errors.maximumPayoutDay && <p className="text-red-500 text-xs mt-1">{errors.maximumPayoutDay}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="payout-buffer" className="text-xs md:text-sm">Payout Buffer (hours)</Label>
            <Input 
              id="payout-buffer" 
              type="number"
              placeholder="Enter payout buffer in hours"
              className={`text-xs md:text-sm placeholder:text-gray-400 ${errors.payoutBuffer ? 'border-red-500' : ''}`}
              value={agent.payoutBuffer || ''}
              onChange={(e) => handleInputChange('payoutBuffer', Number(e.target.value))}
            />
            {errors.payoutBuffer && <p className="text-red-500 text-xs mt-1">{errors.payoutBuffer}</p>}
            <p className="text-xs md:text-sm text-gray-500">
              Time period during which decisions can be vetoed before the actual payout occurs.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 dark:bg-muted p-4">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              <div className="font-medium text-xs md:text-sm">Deployment Cost</div>
            </div>
            <div className="mt-1 text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <span>This covers infrastructure and initial setup costs 100</span> 
              <img src="/assets/icons/money.svg" alt="GRANTS" width={16} height={16} />
              <span>$GRANTS</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between pt-10 flex-col-reverse md:flex-row gap-2">
          <Button variant="outline" onClick={onBack}>
            <span className="text-xs md:text-sm">Back: Grant Canvas</span>
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700" 
            onClick={handleDeploy}
          >
            <span className="text-xs md:text-sm">Deploy Agent</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default WalletConfiguration;
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Info, AlertTriangle } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { AgentTypes } from '@/types/agent'

interface TokenConfigurationProps {
  agent: AgentTypes
  setAgent: React.Dispatch<React.SetStateAction<AgentTypes>>
  onBack: () => void;
  onNext: () => void;
}

export default function TokenConfiguration({ agent, setAgent, onBack, onNext }: TokenConfigurationProps) {
  const [launchOption, setLaunchOption] = useState<string>('existing')
  const [errors, setErrors] = useState({
    tokenAddress: '',
    minGrant: '',
    maxGrant: '',
    governanceType: '',
    fundingFrequency: ''
  })

  const validateField = (name: string, value: string) => {
    switch(name) {
      case 'tokenAddress':
        if (!value && launchOption === 'existing') return 'Token address is required'
        if (value && !value.includes('.near')) return 'Invalid NEAR address format'
        return ''
      case 'minGrant':
        if (!value) return 'Minimum grant size is required'
        if (isNaN(Number(value)) || Number(value) <= 0) return 'Must be a positive number'
        return ''
      case 'maxGrant':
        if (!value) return 'Maximum grant size is required'
        if (isNaN(Number(value)) || Number(value) <= 0) return 'Must be a positive number'
        if (Number(value) <= Number(agent.minGrant)) return 'Must be greater than minimum grant'
        return ''
      case 'governanceType':
        if (!value) return 'Governance type is required'
        return ''
      case 'fundingFrequency':
        if (!value) return 'Funding frequency is required'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setErrors(prev => ({...prev, [name]: validateField(name, value)}))
    setAgent((p: AgentTypes) => ({...p, [name]: value}))
  }

  const handleNext = () => {
    // Validate all fields
    const newErrors = {
      tokenAddress: validateField('tokenAddress', agent.tokenAddress),
      minGrant: validateField('minGrant', agent.minGrant),
      maxGrant: validateField('maxGrant', agent.maxGrant),
      governanceType: validateField('governanceType', agent.governanceType),
      fundingFrequency: validateField('fundingFrequency', agent.fundingFrequency)
    }
    
    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return
    }

    onNext()
  }

  return (
    <div className="space-y-4 md:space-y-8">
        <Card className="rounded-xl border p-4 md:p-6">
            <h2 className="text-xl font-semibold">Token Configuration</h2>
            
            <div className="mt-4 text-sm text-sidebar-foreground">
                Configure the token settings for your grant agent
            </div>

            <div className="mt-6 space-y-6">
            <div className="space-y-4">
                <Label className='text-xs md:text-sm'>LAUNCH OPTIONS</Label>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <Checkbox 
                            id="normal" 
                            checked={launchOption === 'normal'}
                            onCheckedChange={() => setLaunchOption('normal')}
                        />
                        <Label htmlFor="normal" className="font-normal">
                            <div className='text-xs md:text-sm'>Normal Launch</div>
                            <div className="text-xs text-sidebar-foreground">Launch a new token for your agent</div>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox 
                            id="existing" 
                            checked={launchOption === 'existing'}
                            onCheckedChange={() => setLaunchOption('existing')}
                        />
                        <Label htmlFor="existing" className="font-normal">
                            <div className='text-xs md:text-sm'>Use Existing Token</div>
                            <div className="text-xs text-sidebar-foreground">Must use deployed wallet. Try pasting contract several times if there's an error.</div>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox 
                            id="none" 
                            checked={launchOption === 'none'}
                            onCheckedChange={() => setLaunchOption('none')}
                        />
                        <Label htmlFor="none" className="font-normal">
                            <div className='text-xs md:text-sm'>No Token</div>
                            <div className="text-xs text-sidebar-foreground">Launch without token</div>
                        </Label>
                    </div>
                </div>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="token-address" className='text-xs md:text-sm font-semibold'>Token Address</Label>
                <Input 
                    id="token-address" 
                    placeholder="Enter token address"
                    value={agent.tokenAddress || ''}
                    onChange={(e) => handleInputChange('tokenAddress', e.target.value)}
                    className={`placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground ${errors.tokenAddress ? 'border-red-500' : ''}`}
                    disabled={launchOption !== 'existing'}
                />
                {errors.tokenAddress && <p className="text-red-500 text-xs mt-1">{errors.tokenAddress}</p>}
                <div className="text-sm text-sidebar-foreground">
                    E.g amichael.near
                </div>
            </div>

            <div className="rounded-lg bg-blue-50 dark:bg-muted p-4 space-y-3">
                <div className="flex items-center gap-2 font-semibold">
                    <AlertTriangle className="h-5 w-5 text-black dark:text-white" />
                    <span className='text-xs md:text-sm'>Token Whitelist Management</span>
                </div>
                <div className="text-sm text-black dark:text-white ml-10">
                    <span>To Get a token off the payment whitelist, projects can:</span>
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                        <li>Submit a new proposal in the governance for token removal</li>
                        <li>Demonstrate consistent non compliance with grant terms</li>
                        <li>Show evidence of token misuse or manipulation</li>
                    </ol>
                </div>
                <div className="text-sm text-black dark:text-white ml-10">
                    The Final decision to remove a token whitelist is typically made through a community vote or by the grant program administrators
                </div>
            </div>

            <Button className="text-blue-600 font-semibold bg-transparent hover:bg-transparent shadow-none">+ Add New</Button>

            <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                    <Label htmlFor="min-grant" className='text-xs md:text-sm font-semibold'>Governance Type</Label>
                    <div className="cursor-help group relative">
                        <Info className="h-3 w-3" />
                        <div className="hidden group-hover:block absolute top-4 z-10 left-0 px-2 bg-white border border-gray-200 p-1 rounded-lg shadow-md w-[230px] h-[35px]">
                            <span className="text-xs">
                                You can vote to change this anytime.
                            </span>
                        </div>
                    </div>
                </div>
                <Select 
                    defaultValue="admin"
                    onValueChange={(value) => handleInputChange('governanceType', value)}
                    value={agent.governanceType}
                >
                    <SelectTrigger className={`text-xs md:text-sm ${errors.governanceType ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select governance type" />
                    </SelectTrigger>
                    <SelectContent className='text-sidebar-foreground'>
                        <SelectItem value="admin">Admin-based</SelectItem>
                        <SelectItem value="dao">DAO</SelectItem>
                        <SelectItem value="multisig">Multi-signature</SelectItem>
                    </SelectContent>
                </Select>
                {errors.governanceType && <p className="text-red-500 text-xs mt-1">{errors.governanceType}</p>}
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="min-grant" className='text-xs md:text-sm'>Max Deploy Percentage</Label>
                        <div className="cursor-help group relative">
                            <Info className="h-3 w-3" />
                            <div className="hidden group-hover:block absolute top-4 z-10 left-0 bg-white border border-gray-200 p-2 rounded-lg shadow-md w-[270px] h-[65px]">
                                <span className="text-xs">
                                This is how much of the total pot is allowed to be transferred to the spending balance.
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className="text-sm font-medium text-sidebar-foreground">{agent.maxDeployPercentage}%</span>
                </div>
                <Slider
                    value={[agent.maxDeployPercentage]}
                    onValueChange={([value]) => setAgent((p: AgentTypes) => ({...p, maxDeployPercentage: value}))}
                    min={10}
                    max={100}
                    step={1}
                    className="w-full"
                />
                <div className="flex justify-between text-sm text-sidebar-foreground">
                    <span>10%</span>
                    <span>50%</span>
                    <span>100%</span>
                </div>
            </div>

            <div className="space-y-1.5">
                <Label className='text-xs md:text-sm'>Funding Frequency</Label>
                <Select 
                    defaultValue="weekly"
                    onValueChange={(value) => handleInputChange('fundingFrequency', value)}
                    value={agent.fundingFrequency || 'weekly'}
                >
                    <SelectTrigger className={`text-xs md:text-sm ${errors.fundingFrequency ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select funding frequency" />
                    </SelectTrigger>
                    <SelectContent className='text-sidebar-foreground'>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                </Select>
                {errors.fundingFrequency && <p className="text-red-500 text-xs mt-1">{errors.fundingFrequency}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="min-grant" className='text-xs md:text-sm'>Minimum Grant Size</Label>
                        <div className="cursor-help group relative">
                            <Info className="h-3 w-3" />
                            <div className="hidden group-hover:block absolute top-4 left-0 bg-white border border-gray-200 p-2 rounded-lg shadow-md w-[270px] h-[90px]">
                                <span className="text-xs">
                                    The minimum amount that can be granted to a single project. This helps ensure a fair distribution of funds.
                                </span>
                            </div>
                        </div>
                    </div>
                    <Input 
                        id="min-grant" 
                        type="number"
                        placeholder="10,000"
                        value={agent.minGrant || ''}
                        onChange={(e) => handleInputChange('minGrant', e.target.value)}
                        className={`placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground ${errors.minGrant ? 'border-red-500' : ''}`}
                    />
                    {errors.minGrant && <p className="text-red-500 text-xs mt-1">{errors.minGrant}</p>}
                </div>
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="max-grant" className='text-xs md:text-sm'>Maximum Grant Size</Label>
                        <div className="cursor-help group relative">
                            <Info className="h-3 w-3" />
                            <div className="hidden group-hover:block absolute top-4 left-0 bg-white border border-gray-200 p-2 rounded-lg shadow-md w-[270px] h-[90px]">
                                <span className="text-xs">
                                    The maximum amount that can be granted to a single project. This helps ensure a fair distribution of funds.
                                </span>
                            </div>
                        </div>
                    </div>
                    <Input 
                        id="max-grant" 
                        type="number"
                        placeholder="30,000"
                        value={agent.maxGrant || ''}
                        onChange={(e) => handleInputChange('maxGrant', e.target.value)}
                        className={`placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground ${errors.maxGrant ? 'border-red-500' : ''}`}
                    />
                    {errors.maxGrant && <p className="text-red-500 text-xs mt-1">{errors.maxGrant}</p>}
                </div>
            </div>
            </div>
            <div className="flex justify-between mt-10 flex-col-reverse md:flex-row gap-2">
                <Button variant="outline" onClick={onBack}>
                    <span className="text-xs md:text-sm">Back: Basic Information</span>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleNext}>
                    <span className="text-xs md:text-sm">Next: Platform Integration</span>
                </Button>
            </div>
        </Card>
    </div>
  )
}


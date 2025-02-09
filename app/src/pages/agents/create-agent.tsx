"use client"

import { useState } from 'react'
import BasicInformation from '@/components/sections/BasicInformation'
import AgentPreview from '@/components/custom/AgentPriview'
import TokenConfiguration from '@/components/sections/TokenConfiguration'
import PlatformIntegration from '@/components/sections/PlatformIntegration'
import GrantCanvas from '@/components/sections/GrantCanvas'
import WalletConfiguration from '@/components/sections/WalletConfiguration'
import ProgressSteps from '@/components/custom/ProgressSteps'
import toast from 'react-hot-toast'
import { AgentTypes } from '@/types/agent'

const emojis = ["😀", "😄", "🤪", "❤️", "🐻", "🐉", "🐶", "😋", "🐺", "🏃", "🍷"]


const CreateAgent: React.FC = () => {
  const [step, setStep] = useState<number>(1)
  const [agent, setAgent] = useState<AgentTypes>({
    name: '',
    ticker: '',
    description: '',
    image: '/assets/images/image-example.png',
    governanceType: '',
    fundingFrequency: '',
    evaluationType: '',
    isUseImageGenerated: false,
    isUseEmoji: false,
    agentPrompt: '',
    personality: '',
    style: '',
    knowledge: '',
    tokenAddress: '',
    maxDeployPercentage: 50,
    minGrant: '',
    maxGrant: '',
    exampleTwitter: '',
    isGrantWhitelisted: false,
    autoApproveThreshold: 0,
    requireAdminApproval: false,
    minimumFollowing: 0,
    miniumAccountAge: 0,
    verifiedAccount: false,
    cryptoSettingEnabled: false,
    reviewers: [],
    ecosystemGoals: '',
    evaluationCriteria: '',
    rewardCriteria: '',
    projectType: '',
    metricsOptimizingFor: [],
    disqualificationCriteria: [],
    treasuryAddress: '',
    payoutFrequency: '',
    maximumPayoutFrequency: 0,
    maximumPayoutDay: 0,
    payoutBuffer: 0,
  })

  const handleDeploy = () => {
    toast.success('Agent deployed successfully!')
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mb-12 text-center bg-blue-50 py-8 md:py-16 px-4 md:px-32">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-sidebar-foreground">Create AI Agent</h1>
          <p className="mt-2 text-lg md:text-xl text-sidebar-foreground">
            Launch your own grant program on social with an agent governed by token holders
          </p>
        </div>

        <ProgressSteps currentStep={step} />

        <div className='container mx-auto grid gap-8 lg:grid-cols-[1fr,400px] md:pb-10 md:px-0 px-5 pb-20'>
            {step === 1 && <BasicInformation agent={agent} setAgent={setAgent} emojis={emojis} onNext={() => setStep(2)} />}
            {step === 2 && <TokenConfiguration agent={agent} setAgent={setAgent} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
            {step === 3 && <PlatformIntegration agent={agent} setAgent={setAgent} onBack={() => setStep(2)} onNext={() => setStep(4)} />}
            {step === 4 && <GrantCanvas agent={agent} setAgent={setAgent} onBack={() => setStep(3)} onNext={() => setStep(5)} />}
            {step === 5 && <WalletConfiguration agent={agent} setAgent={setAgent} onBack={() => setStep(4)} onDeploy={handleDeploy} />}

            <div className="hidden lg:block">
              <AgentPreview 
                {...agent}
              />
            </div>
        </div>
      </main>
    </div>
  )
}

export default CreateAgent;
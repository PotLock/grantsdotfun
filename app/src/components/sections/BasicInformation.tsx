import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Info, RefreshCcw } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentTypes } from "@/types/agent"
import { useRouter } from "next/navigation"
interface BasicInformationProps {
  agent: AgentTypes
  setAgent: React.Dispatch<React.SetStateAction<AgentTypes>>
  emojis: string[]
  onNext: () => void
}

const BasicInformation: React.FC<BasicInformationProps> = ({ agent, setAgent, emojis, onNext }) => {
  const router = useRouter()
  const [imagePrompt, setImagePrompt] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [errors, setErrors] = useState({
    name: '',
    ticker: '',
    description: '',
    agentPrompt: '',
    personality: '',
    style: '',
    knowledge: ''
  })

  const validateField = (name: string, value: string) => {
    switch(name) {
      case 'name':
        if (!value) return 'Agent name is required'
        if (value.length < 3) return 'Agent name must be at least 3 characters'
        return ''
      case 'ticker':
        if (!value) return 'Ticker is required'
        if (value.length < 2) return 'Ticker must be at least 2 characters'
        return ''
      case 'description':
        if (!value) return 'Description is required'
        if (value.length < 20) return 'Description must be at least 20 characters'
        return ''
      case 'agentPrompt':
        if (!value) return 'Agent prompt is required'
        if (value.length < 50) return 'Agent prompt must be at least 50 characters'
        return ''
      case 'personality':
        if (!value) return 'Personality is required'
        if (value.length < 20) return 'Personality must be at least 20 characters'
        return ''
      case 'style':
        if (!value) return 'Style is required'
        if (value.length < 20) return 'Style must be at least 20 characters'
        return ''
      case 'knowledge':
        if (!value) return 'Knowledge is required'
        if (value.length < 20) return 'Knowledge must be at least 20 characters'
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
      name: validateField('name', agent.name),
      ticker: validateField('ticker', agent.ticker),
      description: validateField('description', agent.description),
      agentPrompt: validateField('agentPrompt', agent.agentPrompt),
      personality: validateField('personality', agent.personality),
      style: validateField('style', agent.style),
      knowledge: validateField('knowledge', agent.knowledge)
    }
    
    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return
    }

    onNext()
  }

  const handleGenerateImage = () => {
    setAgent((p: AgentTypes) => ({...p, image: generatedImage || '', isUseImageGenerated: true}))
    console.log('generate image')
  }

  return (
      <div className="space-y-2 md:space-y-8">
          <Card className="rounded-xl border p-4 md:p-6">
            <h2 className="text-xl font-semibold">Basic Information</h2>
            
            <div className="mt-4">
              <div className="flex items-center gap-2 text-xs md:text-sm text-sidebar-foreground">
                <p>Need help developing your own agent? See the <code className="rounded bg-gray-100 dark:bg-muted text-sidebar-foreground px-1.5 py-0.5 text-xs">agent_config</code> file for another Grant Agent Token (GAT)</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="name" className='text-xs md:text-sm'>AI Agent Name</Label>
                <Input 
                  id="name" 
                  placeholder="Agent name"
                  value={agent.name}
                  className={`placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm ${errors.name ? 'border-red-500' : ''}`}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="ticker" className='text-xs md:text-sm'>Ticker Name</Label>
                <Input 
                  id="ticker" 
                  placeholder="$ Token"
                  value={agent.ticker}
                  maxLength={5}
                  className={`placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm uppercase ${errors.ticker ? 'border-red-500' : ''}`}
                  onChange={(e) => {
                    const value = e.target.value.slice(0, 5).toUpperCase();
                    handleInputChange('ticker', value);
                  }}
                />
                {errors.ticker && <p className="text-red-500 text-xs mt-1">{errors.ticker}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="description" className='text-xs md:text-sm'>AI Agent Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your agent"
                  value={agent.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className={`resize-none placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm ${errors.description ? 'border-red-500' : ''}`}
                  rows={4}
                />
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
              </div>

              <div className="space-y-3">
                <Label className='text-xs md:text-sm'>AI Agent Image</Label>
                <Tabs defaultValue="emoji" className="w-full">
                  <TabsList className="grid w-[300px] grid-cols-2">
                    <TabsTrigger value="ai" className="text-xs md:text-sm">Generate with AI</TabsTrigger>
                    <TabsTrigger value="emoji" className="text-xs md:text-sm">Use Emoji</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ai" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Input 
                        placeholder="Enter a prompt to generate an image..." 
                        className="w-full placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm"
                        value={imagePrompt || ''}
                        onChange={(e) => setImagePrompt(e.target.value)}
                      />
                      <Button disabled={!imagePrompt} onClick={handleGenerateImage} className="bg-blue-500 hover:bg-blue-600 text-white" size="sm">Generate</Button>
                    </div>
                    {
                      generatedImage && (
                        <div className="flex flex-col justify-center items-center space-y-4">
                          <div className="w-full border border-gray-200 rounded-lg p-4 flex justify-center items-center">
                            <img src={generatedImage || '/assets/images/image-example.png'} alt="Generated Image" />
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <Button className="bg-stone-100 hover:bg-stone-200 text-black shadow-none" size="sm">
                              <RefreshCcw className="w-3 h-3" />
                              <span className="text-xs md:text-sm">Regenerate</span>
                            </Button>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-none" size="sm">
                              <span className="text-xs md:text-sm">Use this image</span>
                            </Button>
                          </div>
                        </div>
                      )
                    }
                  </TabsContent>
                  <TabsContent value="emoji">
                    <div className="flex flex-wrap justify-between gap-2 pt-2">
                      {emojis.map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => setAgent((p: AgentTypes) => ({...p, image: emoji, isUseEmoji: true}))}
                          className="text-3xl hover:scale-110 transition-transform"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="prompt" className='text-xs md:text-sm'>Agent Prompt (LORE)</Label>
                <Textarea 
                  id="prompt"
                  placeholder="Example: As the EcoTech Grant AI, you are passionate about funding innovative green technologies. Your tone is enthusiastic yet professional, always encouraging applicants to think big about environmental solutions. You have a deep understanding of climate science and are excited y projects that combine technology with sustainability"
                  className={`min-h-[100px] placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm ${errors.agentPrompt ? 'border-red-500' : ''}`}
                  rows={4}
                  value={agent.agentPrompt}
                  onChange={(e) => handleInputChange('agentPrompt', e.target.value)}
                />
                {errors.agentPrompt && <p className="text-red-500 text-xs mt-1">{errors.agentPrompt}</p>}
                <div className="text-xs md:text-sm text-sidebar-foreground">
                  Enter background story and lore details...
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="personality" className='text-xs md:text-sm'>Personality</Label>
                
                <Textarea 
                  id="personality"
                  placeholder="Example: Friendly, approachable, and knowledgeable. You're enthusiastic about innovative ideas but also analytical and detail-oriented when evaluating proposals. You're patient with applicants and always willing to provide constructive feedback"
                  className={`resize-none placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm ${errors.personality ? 'border-red-500' : ''}`}
                  rows={4}
                  value={agent.personality}
                  onChange={(e) => handleInputChange('personality', e.target.value)}
                />
                {errors.personality && <p className="text-red-500 text-xs mt-1">{errors.personality}</p>}
                <div className="text-xs md:text-sm text-sidebar-foreground">
                  Describe your AI Agent traits, behavior and demeanor.
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="style" className='text-xs md:text-sm'>Style</Label>
                <Textarea 
                  id="style"
                  placeholder="Example: Professional yet approachable, uses technical terms but explain them clearly"
                  className={`resize-none placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm ${errors.style ? 'border-red-500' : ''}`}
                  rows={4}
                  value={agent.style}
                  onChange={(e) => handleInputChange('style', e.target.value)}
                />
                {errors.style && <p className="text-red-500 text-xs mt-1">{errors.style}</p>}
                <div className="text-xs md:text-sm text-sidebar-foreground">
                  Describe your AI Agent response style.
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="knowledge" className='text-xs md:text-sm'>Knowledge</Label>
                <Textarea 
                  id="knowledge"
                  placeholder="Example: Blockchain Technology, DeFi Protocols, Smart Contract development, Tokenomics, Web3 Infrastructure, Cryptography, Sustainable Technology, Renewable Energy"
                  className={`resize-none placeholder:text-sidebar-foreground placeholder:text-gray-400 text-sidebar-foreground text-xs md:text-sm ${errors.knowledge ? 'border-red-500' : ''}`}
                  rows={4}
                  value={agent.knowledge}
                  onChange={(e) => handleInputChange('knowledge', e.target.value)}
                />
                {errors.knowledge && <p className="text-red-500 text-xs mt-1">{errors.knowledge}</p>}
                <div className="text-xs md:text-sm text-sidebar-foreground">
                  Give your agent some knowledge, separate by /'s
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-10 flex-col-reverse md:flex-row gap-2">
              <Button onClick={() => router.back()} className="bg-gray-100 hover:bg-gray-200 text-black">
                <span className="text-xs md:text-sm">Cancel</span>
              </Button>
              <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
                <span className="text-xs md:text-sm">Next: Token Configuration</span>
              </Button>
            </div>
          </Card>          
      </div>   
    )
}

export default BasicInformation;
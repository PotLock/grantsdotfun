import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Info, RefreshCcw } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentTypes } from "@/types/agent"

interface BasicInformationProps {
  agent: AgentTypes
  setAgent: React.Dispatch<React.SetStateAction<AgentTypes>>
  emojis: string[]
  onNext: () => void
}

const BasicInformation: React.FC<BasicInformationProps> = ({ agent, setAgent, emojis, onNext }) => {

  const [imagePrompt, setImagePrompt] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const handleGenerateImage = () => {
    setAgent((p: AgentTypes) => ({...p, isUseImageGenerated: true}))
    console.log('generate image')
  }

  return (
      <div className="space-y-8">
          <Card className="rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">Basic Information</h2>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-sidebar-foreground">
                <p>Need help developing your own agent? See the <code className="rounded bg-gray-100 text-sidebar-foreground px-1.5 py-0.5 text-xs">agent_config</code> file for another Grant Agent Token (GAT)</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="name">AI Agent Name</Label>
                <Input 
                  id="name" 
                  placeholder="Agent name"
                  value={agent.name}
                  className="placeholder:text-sidebar-foreground text-sidebar-foreground"
                  onChange={(e) => setAgent((p: AgentTypes) => ({...p, name: e.target.value}))}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="ticker">Ticker Name</Label>
                <Input 
                  id="ticker" 
                  placeholder="$ Token"
                  value={agent.ticker}
                  className="placeholder:text-sidebar-foreground text-sidebar-foreground"
                  onChange={(e) => setAgent((p: AgentTypes) => ({...p, ticker: e.target.value}))}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="description">AI Agent Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your agent"
                  value={agent.description}
                  onChange={(e) => setAgent((p: AgentTypes) => ({...p, description: e.target.value}))}
                  className="resize-none placeholder:text-sidebar-foreground text-sidebar-foreground"
                  rows={4}
                />
              </div>

              <div className="space-y-3">
                <Label>AI Agent Image</Label>
                <Tabs defaultValue="emoji" className="w-full">
                  <TabsList className="grid w-[300px] grid-cols-2">
                    <TabsTrigger value="ai">Generate with AI</TabsTrigger>
                    <TabsTrigger value="emoji">Use Emoji</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ai" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Input 
                        placeholder="Enter a prompt to generate an image..." 
                        className="w-full placeholder:text-sidebar-foreground text-sidebar-foreground"
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
                              <RefreshCcw className="w-2 h-2" />
                              <span>Regenerate</span>
                            </Button>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-none" size="sm">Use this image</Button>
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
                <Label htmlFor="prompt">Agent Prompt (LORE)</Label>
                <Textarea 
                  id="prompt"
                  placeholder="Example: As the EcoTech Grant AI, you are passionate about funding innovative green technologies. Your tone is enthusiastic yet professional, always encouraging applicants to think big about environmental solutions. You have a deep understanding of climate science and are excited y projects that combine technology with sustainability"
                  className="mt-2 resize-none placeholder:text-sidebar-foreground text-sidebar-foreground"
                  rows={4}
                />
                <div className="text-sm text-sidebar-foreground">
                  Enter background story and lore details...
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="personality">Personality</Label>
                
                <Textarea 
                  id="personality"
                  placeholder="Example: Friendly, approachable, and knowledgeable. You're enthusiastic about innovative ideas but also analytical and detail-oriented when evaluating proposals. You're patient with applicants and always willing to provide constructive feedback"
                  className="mt-2 resize-none placeholder:text-sidebar-foreground text-sidebar-foreground"
                  rows={4}
                />
                <div className="text-sm text-sidebar-foreground">
                  Describe your AI Agent traits, behavior and demeanor.
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="style">Style</Label>
                <Textarea 
                  id="style"
                  placeholder="Example: Professional yet approachable, uses technical terms but explain them clearly"
                  className="mt-2 resize-none placeholder:text-sidebar-foreground text-sidebar-foreground"
                  rows={4}
                />
                <div className="text-sm text-sidebar-foreground">
                  Describe your AI Agent response style.
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="knowledge">Knowledge</Label>
                <Textarea 
                  id="knowledge"
                  placeholder="Example: Blockchain Technology, DeFi Protocols, Smart Contract development, Tokenomics, Web3 Infrastructure, Cryptography, Sustainable Technology, Renewable Energy"
                  className="mt-2 resize-none placeholder:text-sidebar-foreground text-sidebar-foreground"
                  rows={4}
                />
                <div className="text-sm text-sidebar-foreground">
                  Give your agent some knowledge, separate by /'s
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <Button className="bg-gray-100 hover:bg-gray-200 text-black" >Cancel</Button>
              <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">Next: Token Configuration</Button>
            </div>
          </Card>          
      </div>   
    )
}

export default BasicInformation;
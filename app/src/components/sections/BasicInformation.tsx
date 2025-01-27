import React from "react"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentPreviewTypes } from "@/types/agent"

interface BasicInformationProps {
    preview: AgentPreviewTypes
    setPreview: React.Dispatch<React.SetStateAction<AgentPreviewTypes>>
    emojis: string[]
    onNext: () => void
}

const BasicInformation: React.FC<BasicInformationProps> = ({ preview, setPreview, emojis, onNext }) => {

  return (
      <div className="space-y-8">
          <Card className="rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">Basic Information</h2>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Info className="h-4 w-4" />
                <p>Need help developing your own agent? See the <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">agent_config</code> file for another Grant Agent Token (GAT)</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="name">AI Agent Name</Label>
                <Input 
                  id="name" 
                  placeholder="Agent name"
                  value={preview.name}
                  onChange={(e) => setPreview((p: AgentPreviewTypes) => ({...p, name: e.target.value}))}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="description">AI Agent Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your agent"
                  value={preview.description}
                  onChange={(e) => setPreview((p: AgentPreviewTypes) => ({...p, description: e.target.value}))}
                  className="resize-none"
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
                    <Input 
                      placeholder="Enter a prompt to generate an image..." 
                      className="w-full"
                    />
                    <Button variant="outline" size="sm">Generate</Button>
                  </TabsContent>
                  <TabsContent value="emoji">
                    <div className="flex flex-wrap justify-between gap-2 pt-2">
                      {emojis.map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => setPreview((p: AgentPreviewTypes) => ({...p, image: emoji}))}
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
                  className="mt-2 resize-none"
                  rows={4}
                />
                <div className="text-sm text-gray-500">
                  Enter background story and lore details...
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="personality">Personality</Label>
                
                <Textarea 
                  id="personality"
                  placeholder="Example: Friendly, approachable, and knowledgeable. You're enthusiastic about innovative ideas but also analytical and detail-oriented when evaluating proposals. You're patient with applicants and always willing to provide constructive feedback"
                  className="mt-2 resize-none"
                  rows={4}
                />
                <div className="text-sm text-gray-500">
                  Describe your AI Agent traits, behavior and demeanor.
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="style">Style</Label>
                <Textarea 
                  id="style"
                  placeholder="Example: Professional yet approachable, uses technical terms but explain them clearly"
                  className="mt-2 resize-none"
                  rows={4}
                />
                <div className="text-sm text-gray-500">
                  Describe your AI Agent response style.
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="knowledge">Knowledge</Label>
                <Textarea 
                  id="knowledge"
                  placeholder="Example: Blockchain Technology, DeFi Protocols, Smart Contract development, Tokenomics, Web3 Infrastructure, Cryptography, Sustainable Technology, Renewable Energy"
                  className="mt-2 resize-none"
                  rows={4}
                />
                <div className="text-sm text-gray-500">
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
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Info } from "lucide-react";
import { useState } from "react";
import { AgentTypes } from "@/types/agent";

interface GrantCanvasProps {
    agent: AgentTypes
    setAgent: React.Dispatch<React.SetStateAction<AgentTypes>>
    onBack: () => void;
    onNext: () => void;
} 
interface Tag {
  id: string;
  label: string;
}

const GrantCanvas: React.FC<GrantCanvasProps> = ({ agent, setAgent, onBack, onNext }) => {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([])
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([])

  const metricsOptions: Tag[] = [
    { id: 'community-impact', label: 'Community Impact' },
    { id: 'user-adoption', label: 'User Adoption' },
    { id: 'technical-innovation', label: 'Technical Innovation' },
  ]

  const criteriaOptions: Tag[] = [
    { id: 'sanctioned-country', label: 'Sanctioned Country' },
    { id: 'profanity-use', label: 'Profanity Use' },
    { id: 'audience-consensus', label: 'Audience Consensus' },
  ]

  const toggleMetric = (id: string) => {
    setSelectedMetrics(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    )
    setAgent({...agent, metricsOptimizingFor: selectedMetrics})
  }

  const toggleCriteria = (id: string) => {
    setSelectedCriteria(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
    setAgent({...agent, disqualificationCriteria: selectedCriteria})
  }
    
  return (
      <div className="space-y-4 md:space-y-8">
        <Card className="rounded-xl border p-4 md:p-6">
          <h2 className="text-xl font-semibold">Grant Canvas</h2>
          
          <div className="mt-2 md:mt-4 text-xs md:text-sm text-sidebar-foreground">
            Define your grant program's objectives and evaluation criteria
          </div>

          <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
            <div className="space-y-1.5">
              <Label htmlFor="ecosystem-goals" className="text-xs md:text-sm">Ecosystem Goals</Label>
              <Textarea 
                id="ecosystem-goals" 
                placeholder="E.g Increase treasury etc"
                className="min-h-[100px] text-xs md:text-sm"
                value={agent.ecosystemGoals || ''}
                onChange={(e) => setAgent({...agent, ecosystemGoals: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="evaluation-criteria" className="text-xs md:text-sm">Evaluation Criteria</Label>
              <Textarea 
                id="evaluation-criteria"
                placeholder="Describe how projects will be evaluated (e.g Social Impact, Technical Complexity)"
                className="min-h-[100px] text-xs md:text-sm"
                value={agent.evaluationCriteria || ''}
                onChange={(e) => setAgent({...agent, evaluationCriteria: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="reward-criteria" className="text-xs md:text-sm">Reward Criteria</Label>
              <Textarea 
                id="reward-criteria"
                placeholder="Describe the criteria for rewarding projects"
                className="min-h-[100px] text-xs md:text-sm"
                value={agent.rewardCriteria || ''}
                onChange={(e) => setAgent({...agent, rewardCriteria: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Project Type</Label>
              <Select 
                defaultValue="mvp"
                onValueChange={(value) => setAgent({...agent, projectType: value})}
                value={agent.projectType || 'mvp'}
              >
                <SelectTrigger className="text-xs md:text-sm">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mvp" className="text-xs md:text-sm">MVP</SelectItem>
                  <SelectItem value="prototype" className="text-xs md:text-sm">Prototype</SelectItem>
                  <SelectItem value="production" className="text-xs md:text-sm">Production</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-xs md:text-sm">Metrics Optimizing For</Label>
              <div className="flex flex-wrap gap-2">
                {metricsOptions.map((metric) => (
                  <button
                    key={metric.id}
                    onClick={() => toggleMetric(metric.id)}
                    className={`rounded-full px-3 py-1 text-xs md:text-sm transition-colors ${
                      selectedMetrics.includes(metric.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {metric.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-xs md:text-sm" >Disqualification Criteria</Label>
              <div className="flex flex-wrap gap-2">
                {criteriaOptions.map((criteria) => (
                  <button
                    key={criteria.id}
                    onClick={() => toggleCriteria(criteria.id)}
                    className={`rounded-full px-3 py-1 text-xs md:text-sm transition-colors ${
                      selectedCriteria.includes(criteria.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {criteria.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-col-reverse md:flex-row gap-2 pt-4 md:pt-10">
            <Button variant="outline" onClick={onBack}>
              <span className="text-xs md:text-sm">Back: Platform Integration</span>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={onNext}>
              <span className="text-xs md:text-sm">Next: Wallet Configuration</span>
            </Button>
          </div>
        </Card>
    </div>
  )
}

export default GrantCanvas;
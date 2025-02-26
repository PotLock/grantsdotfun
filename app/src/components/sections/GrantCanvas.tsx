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
  const [errors, setErrors] = useState({
    ecosystemGoals: '',
    evaluationCriteria: '',
    rewardCriteria: '',
    projectType: '',
    metricsOptimizingFor: '',
    disqualificationCriteria: ''
  })

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

  const validateField = (name: string, value: string | string[]) => {
    switch(name) {
      case 'ecosystemGoals':
        if (!value) return 'Ecosystem goals are required'
        if (typeof value === 'string' && value.length < 20) return 'Must be at least 20 characters'
        return ''
      case 'evaluationCriteria':
        if (!value) return 'Evaluation criteria is required'
        if (typeof value === 'string' && value.length < 20) return 'Must be at least 20 characters'
        return ''
      case 'rewardCriteria':
        if (!value) return 'Reward criteria is required'
        if (typeof value === 'string' && value.length < 20) return 'Must be at least 20 characters'
        return ''
      case 'projectType':
        if (!value) return 'Project type is required'
        return ''
      case 'metricsOptimizingFor':
        if (Array.isArray(value) && value.length === 0) return 'Select at least one metric'
        return ''
      case 'disqualificationCriteria':
        if (Array.isArray(value) && value.length === 0) return 'Select at least one criteria'
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
      ecosystemGoals: validateField('ecosystemGoals', agent.ecosystemGoals),
      evaluationCriteria: validateField('evaluationCriteria', agent.evaluationCriteria),
      rewardCriteria: validateField('rewardCriteria', agent.rewardCriteria),
      projectType: validateField('projectType', agent.projectType),
      metricsOptimizingFor: validateField('metricsOptimizingFor', agent.metricsOptimizingFor),
      disqualificationCriteria: validateField('disqualificationCriteria', agent.disqualificationCriteria)
    }
    
    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return
    }

    onNext()
  }

  const toggleMetric = (id: string) => {
    const newMetrics = selectedMetrics.includes(id) 
      ? selectedMetrics.filter(m => m !== id) 
      : [...selectedMetrics, id]
    
    setSelectedMetrics(newMetrics)
    setAgent({...agent, metricsOptimizingFor: newMetrics})
    setErrors(prev => ({...prev, metricsOptimizingFor: validateField('metricsOptimizingFor', newMetrics)}))
  }

  const toggleCriteria = (id: string) => {
    const newCriteria = selectedCriteria.includes(id)
      ? selectedCriteria.filter(c => c !== id)
      : [...selectedCriteria, id]
    
    setSelectedCriteria(newCriteria)
    setAgent({...agent, disqualificationCriteria: newCriteria})
    setErrors(prev => ({...prev, disqualificationCriteria: validateField('disqualificationCriteria', newCriteria)}))
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
                className={`min-h-[100px] text-xs md:text-sm placeholder:text-gray-400 ${errors.ecosystemGoals ? 'border-red-500' : ''}`}
                value={agent.ecosystemGoals || ''}
                onChange={(e) => handleInputChange('ecosystemGoals', e.target.value)}
              />
              {errors.ecosystemGoals && <p className="text-red-500 text-xs mt-1">{errors.ecosystemGoals}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="evaluation-criteria" className="text-xs md:text-sm">Evaluation Criteria</Label>
              <Textarea 
                id="evaluation-criteria"
                placeholder="Describe how projects will be evaluated (e.g Social Impact, Technical Complexity)"
                className={`min-h-[100px] text-xs md:text-sm placeholder:text-gray-400 ${errors.evaluationCriteria ? 'border-red-500' : ''}`}
                value={agent.evaluationCriteria || ''}
                onChange={(e) => handleInputChange('evaluationCriteria', e.target.value)}
              />
              {errors.evaluationCriteria && <p className="text-red-500 text-xs mt-1">{errors.evaluationCriteria}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="reward-criteria" className="text-xs md:text-sm">Reward Criteria</Label>
              <Textarea 
                id="reward-criteria"
                placeholder="Describe the criteria for rewarding projects"
                className={`min-h-[100px] text-xs md:text-sm placeholder:text-gray-400 ${errors.rewardCriteria ? 'border-red-500' : ''}`}
                value={agent.rewardCriteria || ''}
                onChange={(e) => handleInputChange('rewardCriteria', e.target.value)}
              />
              {errors.rewardCriteria && <p className="text-red-500 text-xs mt-1">{errors.rewardCriteria}</p>}
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs md:text-sm">Project Type</Label>
              <Select 
                defaultValue="mvp"
                onValueChange={(value) => handleInputChange('projectType', value)}
                value={agent.projectType || 'mvp'}
              >
                <SelectTrigger className={`text-xs md:text-sm ${errors.projectType ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mvp" className="text-xs md:text-sm">MVP</SelectItem>
                  <SelectItem value="prototype" className="text-xs md:text-sm">Prototype</SelectItem>
                  <SelectItem value="production" className="text-xs md:text-sm">Production</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
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
              {errors.metricsOptimizingFor && <p className="text-red-500 text-xs mt-1">{errors.metricsOptimizingFor}</p>}
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
              {errors.disqualificationCriteria && <p className="text-red-500 text-xs mt-1">{errors.disqualificationCriteria}</p>}
            </div>
          </div>

          <div className="flex justify-between flex-col-reverse md:flex-row gap-2 pt-4 md:pt-10">
            <Button variant="outline" onClick={onBack}>
              <span className="text-xs md:text-sm">Back: Platform Integration</span>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleNext}>
              <span className="text-xs md:text-sm">Next: Wallet Configuration</span>
            </Button>
          </div>
        </Card>
    </div>
  )
}

export default GrantCanvas;
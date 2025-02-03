import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState, useMemo } from "react"
import { Calendar, Plus, User } from "lucide-react"
import ProposalDetail from "./ProposalDetail"
import { Button } from "../ui/button"
import CreateProposalModal from "./CreateProposalModal"
import { Proposal } from "@/types/agent"

interface ProposalGovernanceProps {
    proposals: Proposal[]
}

const ProposalStatus = {
    "in_progress": "In Progress",
    "approved": "Approved",
    "rejected": "Rejected",
    "executed": "Executed",
    "failed": "Failed",
}

const ProposalTypes = {
    "all": "All Types",
    "governance": "Governance",
    "treasury": "Treasury",
} as const

const ProposalStates = {
    "all": "All States",
    "approved": "Approved",
    "rejected": "Rejected",
    "in_progress": "In Progress",
    "expired": "Expired",
    "failed": "Failed",
    "executed": "Executed",
} as const

const ProposalGovernance: React.FC<ProposalGovernanceProps> = ({ proposals }) => {
    const [sortByDate, setSortByDate] = useState<boolean>(false)
    const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [selectedType, setSelectedType] = useState<keyof typeof ProposalTypes>("all")
    const [selectedState, setSelectedState] = useState<keyof typeof ProposalStates>("all")
    
    const filteredProposals = useMemo(() => {
        return proposals.filter(proposal => {
            const matchesSearch = 
                proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                proposal.description.toLowerCase().includes(searchQuery.toLowerCase());
                
            const matchesType = selectedType === "all" || proposal.type === selectedType;
            const matchesState = selectedState === "all" || proposal.status === selectedState;
            
            return matchesSearch && matchesType && matchesState;
        })
    }, [proposals, searchQuery, selectedType, selectedState])

    if (selectedProposal) {
        return <ProposalDetail 
            proposal={selectedProposal} 
            onBack={() => setSelectedProposal(null)}
        />
    }

    return (
        <div className="space-y-6">
            <Tabs defaultValue="all" className="py-4">
                <TabsList className="py-5 px-1">
                    <TabsTrigger value="all" className="p-2 px-4">All</TabsTrigger>
                    <TabsTrigger value="active" className="p-2 px-4">Active Proposals</TabsTrigger>
                    <TabsTrigger value="passed" className="p-2 px-4">Passed Proposals</TabsTrigger>
                    <TabsTrigger value="my" className="p-2 px-4">My Proposals</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <Input
                    type="text"
                    placeholder="Search Proposal"
                    className="w-full md:max-w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex flex-wrap flex-row gap-2">
                    <Select onValueChange={(value) => setSelectedType(value as keyof typeof ProposalTypes)}>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Proposal Type" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(ProposalTypes).map(([value, label]) => (
                                <SelectItem key={value} value={value}>{label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => setSelectedState(value as keyof typeof ProposalStates)}>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(ProposalStates).map(([value, label]) => (
                                <SelectItem key={value} value={value}>{label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button 
                        className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600"
                        onClick={() => setIsCreateModalOpen(true)}
                    >
                        <Plus className="w-4 h-4" />
                        Create Proposal
                    </Button>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <Switch 
                    id="date-sort" 
                    checked={sortByDate}
                    onCheckedChange={setSortByDate}
                />
                <Label htmlFor="date-sort">Filter by Date</Label>
            </div>
            <div className="space-y-4 mt-4 flex flex-col">
                {filteredProposals.length > 0 ? (
                    filteredProposals.map((proposal, index) => (
                        <Card 
                            key={index} 
                            className="hover:bg-accent/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedProposal(proposal)}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-base">{proposal.title}</h4>
                                    <span className="text-xs bg-orange-100 text-orange-600 px-2.5 py-1 rounded-sm border border-orange-400">{ProposalStatus[proposal.status as keyof typeof ProposalStatus]}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {proposal.description}
                                </p>
                                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5 text-blue-500" />
                                            <span>{proposal.time_started} - {proposal.time_ended}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <User className="h-3.5 w-3.5 text-blue-500" />
                                            <span>Published by</span>
                                            <img src="/assets/images/avatar/avatar.png" alt="avatar" width={16} height={16} className="rounded-full" />
                                            <span className="text-blue-500">{proposal.publisher}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">No proposals found matching your search criteria.</p>
                    </div>
                )}
            </div>
            <CreateProposalModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </div>
    )
}

export default ProposalGovernance;
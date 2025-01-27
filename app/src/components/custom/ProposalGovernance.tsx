"use client"

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
import { useState } from "react"
import { Calendar, Plus, User } from "lucide-react"
import Image from "next/image"
import ProposalDetail from "./ProposalDetail"
import { Button } from "../ui/button"
import CreateProposalModal from "./CreateProposalModal"

// Add an interface for the proposal type
interface Proposal {
    id: number;
    title: string;
    status: string;
    description: string;
    treasurySettings: {
        name: string;
        currentValue: string;
        proposedValue: string;
    }[];
    publisher: {
        address: string;
    };
    voters: {
        id: string;
        name: string;
        vote: 'Yes' | 'No';
        votePercentage: number;
        voteAmount: string;
    }[];
    votingPower: {
        amount: string;
        percentage: string;
    };
}

const ProposalGovernance = () => {
    const [sortByDate, setSortByDate] = useState<boolean>(false)
    const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    // Mock data for demonstration
    const mockProposal: Proposal = {
        id: 1,
        title: "Reduce Proposal Voting Period",
        status: "In progress",
        description: "Lorem ipsum dolor sit amet consectetur...",
        treasurySettings: [
            {
              name: "Weekly Reward Balance",
              currentValue: "10,000 $GRANT",
              proposedValue: "15,000 $GRANT"
            }
        ],
        publisher: {
            address: "0x7df...8yhd9"
        },
        voters: [
            {
                id: "1",
                name: "Johndoe.near",
                vote: "Yes",
                votePercentage: 25,
                voteAmount: "250,000 $BLACKDRAGON"
            },
            {
                id: "2",
                name: "Johndoe.near",
                vote: "No",
                votePercentage: 25,
                voteAmount: "250,000 $BLACKDRAGON"
            }
        ],
        votingPower: {
            amount: "100,000 $BLACKDRAGON",
            percentage: "10%"
        }
    }

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
            <div className="flex items-center justify-between">
                <Input
                    type="text"
                    placeholder="Search Proposal"
                    className="max-w-[300px]"
                />
                <div className="flex items-center gap-4">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Proposal Type" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="governance">Governance</SelectItem>
                        <SelectItem value="treasury">Treasury</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All States</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="expired">Expired</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                            <SelectItem value="executed">Executed</SelectItem>
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
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item, index) => (
                        <Card 
                            key={index} 
                            className="hover:bg-accent/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedProposal(mockProposal)}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-base">Reduce Proposal Voting Period</h4>
                                    <span className="text-xs bg-orange-100 text-orange-600 px-2.5 py-1 rounded-sm border border-orange-400">In progress</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Lorem ipsum dolor sit amet consectetur. Id amet ut aliquam fermentum sit nulla eget et.
                                </p>
                                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5 text-blue-500" />
                                            <span>January 17, 2025 06:08 PM - January 20, 2025 06:08 PM</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <User className="h-3.5 w-3.5 text-blue-500" />
                                            <span>Published by</span>
                                            <Image src="/assets/images/avatar/avatar.png" alt="avatar" width={16} height={16} className="rounded-full" />
                                            <span className="text-blue-500">0x7df...8yhd9</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <CreateProposalModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </div>
    )
}

export default ProposalGovernance;
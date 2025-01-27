'use client'

import React from 'react';
import { Calendar, ChevronLeft, User, ChevronDown, Check, Wallet, CircleCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Voter {
  id: string;
  name: string;
  vote: 'Yes' | 'No';
  votePercentage: number;
  voteAmount: string;
}

interface ProposalDetailProps {
  proposal: {
    title: string;
    status: string;
    publisher: {
      address: string;
    };
    voters: Voter[];
    votingPower: {
      amount: string;
      percentage: string;
    };
  };
  onBack?: () => void;
}

const ProposalDetail: React.FC<ProposalDetailProps> = ({ proposal, onBack }) => {
  const [isVoteModalOpen, setIsVoteModalOpen] = React.useState(false);
  const [selectedVote, setSelectedVote] = React.useState<'Yes' | 'No' | null>(null);

  const handleVoteSelect = (vote: 'Yes' | 'No') => {
    setSelectedVote(vote);
  };

  const handleVoteConfirm = () => {
    console.log('Confirmed vote:', selectedVote);
    setIsVoteModalOpen(false);
    setSelectedVote(null);
  };

  return (
    <Tabs defaultValue="voters" className="space-y-4 pt-10">
      <Card className='shadow-none'>
        <CardContent className='p-4 space-y-6'>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <button className="hover:opacity-80" onClick={onBack}>
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex-1">
                <h1 className="text-xl font-semibold">{proposal.title}</h1>
              </div>
              <Badge variant="outline" className="bg-orange-100 text-orange-500 border border-orange-500 rounded-md px-2 py-1" >
                {proposal.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <User className="h-5 w-5 text-blue-500" />
                <span>Published by</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/assets/images/avatar/avatar.png" alt="avatar" width={20} height={20} className="rounded-full" />
                <span className="text-blue-500">{proposal.publisher.address}</span>
              </div>
            </div>
            {/* Tabs */}
            <TabsList>
              <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
              <TabsTrigger value="voters">Voters</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
            </TabsList>
        </CardContent>
      </Card>

      {/* Voters List */}
      <div className="grid grid-cols-3 gap-8 pt-10">
        <TabsContent value="voters" className='col-span-2'>
          <div className="col-span-2">
            <Card className='shadow-none'>
              <CardHeader className='p-4'>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className='text-xl font-semibold'>
                    Voters ({proposal.voters.length})
                  </CardTitle>
                </div>
                <div className="flex w-full">
                  <DropdownMenu>
                      <DropdownMenuTrigger className='w-full flex items-center justify-between border border-gray-200 rounded-md px-4 py-1'>
                        <Button className="text-sm outline-none border-none bg-transparent shadow-none hover:bg-transparent text-black p-0">
                          Voted: Yes 
                        </Button>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" sideOffset={4} className="w-[--radix-dropdown-trigger-width]">
                        <DropdownMenuItem>
                          All Votes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Yes Votes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          No Votes
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 px-2 space-y-2">
                {proposal.voters.map((voter) => (
                  <div
                    key={voter.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white">
                        {voter.name[0].toUpperCase()}
                      </div>
                      <span className="font-medium">{voter.name}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-[#D9F99D] text-[#65A30D] p-2 px-4 rounded-md flex items-center gap-1"
                    >
                      {voter.vote} 
                      <Check className="h-4 w-4" />
                    </Badge>
                    <div className="flex items-center gap-4">
                      <div className="text-left text-sm">
                        <div className="text-gray-500">{voter.votePercentage}%</div>
                        <div className="font-medium">{voter.voteAmount}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="breakdown" className='col-span-2'>
          <div className="col-span-2">
            <Card className='shadow-none'>
              <CardContent className='p-4 space-y-4'>
                <div className='pt-3 border-b border-gray-200'>
                  <h3 className="text-lg font-semibold mb-4">STATUS</h3>
                </div>            
                
                <div className="space-y-4">
                  {/* Status Timeline */}
                  <div className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Created</div>
                      <div className="text-xs text-gray-500">2024/08/21 07:15 AM UTC+1</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Active</div>
                      <div className="text-xs text-gray-500">2024/08/21 07:15 AM UTC+1</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Succeeded</div>
                      <div className="text-xs text-gray-500">2024/08/22 04:19 PM UTC+1</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Executed</div>
                      <div className="text-xs text-gray-500">2024/08/22 04:19 PM UTC+1</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="info" className='col-span-2'>
          <div className="col-span-2">
            <Card className='shadow-none'>
              <CardContent className='p-4 space-y-6'>
                <div className="space-y-4 pb-6 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Proposal Description</h2>
                  <p className="text-gray-600">
                    This proposal aims to increase the weekly reward balance from 10,000 GRANT to 15,000 
                    GRANT to accommodate the growing number of high-quality projects applying for grants.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-lg font-medium">Treasury Settings</h2>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Wallet className="w-8 h-8" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">Treasury Settings</h3>
                        <span className="text-sm text-gray-500">Weekly Reward Balance</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">CURRENT VALUE:</span>
                        <span>10,000 $GRANT</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">PROPOSED VALUE:</span>
                        <span>15,000 $GRANT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Voting Section */}
        <div className="space-y-4 mt-2">
          <Card className="shadow-none">
            <CardContent className='p-4 space-y-4'>
              <Button 
                variant={selectedVote === 'Yes' ? "default" : "outline"} 
                className={`w-full ${selectedVote === 'Yes' ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => handleVoteSelect('Yes')}
              >
                Yes
              </Button>
              <Button 
                variant={selectedVote === 'No' ? "default" : "outline"} 
                className={`w-full ${selectedVote === 'No' ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => handleVoteSelect('No')}
              >
                No
              </Button>
              <Button 
                className="w-full bg-blue-500 text-white hover:bg-blue-600 mt-5"
                onClick={() => setIsVoteModalOpen(true)}
                disabled={!selectedVote}
              >
                Vote
              </Button>
            </CardContent>
          </Card>

          {/* Add the Vote Confirmation Modal */}
          <Dialog open={isVoteModalOpen} onOpenChange={setIsVoteModalOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader className='flex items-center'>
                <DialogTitle>Confirm your Vote</DialogTitle>
              </DialogHeader>
              <div className="space-y-2 py-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Choice</span>
                  <span className="font-medium">{selectedVote}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Voting Power</span>
                  <span className="font-medium">{proposal.votingPower.amount}</span>
                </div>
                <Button 
                  className="w-full bg-blue-500 text-white hover:bg-blue-600"
                  onClick={handleVoteConfirm}
                >
                  Confirm Vote
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Card className="mt-8 shadow-none bg-stone-50">
            <CardContent className='p-4 space-y-4'>
              <h3 className="text-sm text-gray-500 mb-2">YOUR VOTING POWER</h3>
              <div className="text-xl font-semibold">{proposal.votingPower.amount}</div>
              <div className="text-sm">
                ({proposal.votingPower.percentage} of total votes)
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Tabs>
  );
};

export default ProposalDetail;
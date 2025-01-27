"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

// Mock data
const mockGrantAgents = [
  {
    id: 1,
    name: "AI Research DAO",
    growth: "+28.91%",
    description: "Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis et eu nibh sapien neque quis.",
    currentTreasury: "$8,600,213.00",
    weeklyGrantPool: "$8,600,213.00",
    image: "/assets/images/agent-example.svg"
  },
  {
    id: 2,
    name: "Web3 Innovation Fund",
    growth: "+15.45%",
    description: "Focused on advancing decentralized technologies and supporting innovative blockchain projects across various sectors.",
    currentTreasury: "$5,200,000.00",
    weeklyGrantPool: "$450,000.00",
    image: "/assets/images/agent-example.svg"
  },
  {
    id: 3,
    name: "Climate Tech DAO",
    growth: "+22.31%",
    description: "Supporting projects that leverage technology to address climate change and environmental sustainability.",
    currentTreasury: "$12,300,000.00",
    weeklyGrantPool: "$900,000.00",
    image: "/assets/images/agent-example.svg"
  },
  {
    id: 4,
    name: "DeFi Grants Initiative",
    growth: "+19.75%",
    description: "Accelerating the development of decentralized finance protocols and infrastructure.",
    currentTreasury: "$7,800,000.00",
    weeklyGrantPool: "$600,000.00",
    image: "/assets/images/agent-example.svg"
  }
];

const FeaturedGrantAgents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(mockGrantAgents.length / itemsPerPage);
  const router = useRouter();

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return mockGrantAgents.slice(startIndex, endIndex);
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Featured Grant Agents</h2>
          <p className="text-muted-foreground text-sm">Top ai agent token with AI grant operator agents.</p>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {getCurrentPageItems().map((agent) => (
          <Card key={agent.id} className="p-4 sm:p-6 cursor-pointer hover:border-blue-500 shadow-none" onClick={() => router.push(`/agents/${agent.id}`)}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-20 w-20 sm:h-24 sm:w-24 bg-muted rounded-lg shrink-0 mx-auto sm:mx-0 flex items-center justify-center">
                <Image src={agent.image} alt={agent.name} width={80} height={80} className="object-contain" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h3 className="font-semibold">{agent.name}</h3>
                  <span className="text-green-500 text-sm">{agent.growth}</span>
                </div>
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                  {agent.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-sm text-muted-foreground">Current Treasury</div>
                    <div className="font-semibold">{agent.currentTreasury}</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-sm text-muted-foreground">Weekly Grant Pool</div>
                    <div className="font-semibold">{agent.weeklyGrantPool}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
} 

export default FeaturedGrantAgents;
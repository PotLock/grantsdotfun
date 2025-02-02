import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// Mock data
const mockGrantAgents = [
  {
    id: 1,
    name: "AI Research DAO",
    price: "$100",
    growth: "+28.91%",
    description: "Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis et eu nibh sapien neque quis.",
    currentTreasury: "$8,600,213.00",
    weeklyGrantPool: "$8,600,213.00",
    image: "/assets/images/image-example.png"
  },
  {
    id: 2,
    name: "Web3 Innovation Fund",
    price: "$100",
    growth: "+15.45%",
    description: "Focused on advancing decentralized technologies and supporting innovative blockchain projects across various sectors.",
    currentTreasury: "$5,200,000.00",
    weeklyGrantPool: "$450,000.00",
    image: "/assets/images/image-example.png"
  },
  {
    id: 3,
    name: "Climate Tech DAO",
    price: "$100",
    growth: "+22.31%",
    description: "Supporting projects that leverage technology to address climate change and environmental sustainability.",
    currentTreasury: "$12,300,000.00",
    weeklyGrantPool: "$900,000.00",
    image: "/assets/images/image-example.png"
  },
  {
    id: 4,
    name: "DeFi Grants Initiative",
    price: "$100",
    growth: "+19.75%",
    description: "Accelerating the development of decentralized finance protocols and infrastructure.",
    currentTreasury: "$7,800,000.00",
    weeklyGrantPool: "$600,000.00",
    image: "/assets/images/image-example.png"
  }
];

const FeaturedGrantAgents = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(window.innerWidth < 640 ? 1 : 2);
  const totalPages = Math.ceil(mockGrantAgents.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 2);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div className="flex flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold">Featured Grant Agents</h2>
          <p className="text-muted-foreground text-sm">Top ai agent token with AI grant operator agents.</p>
        </div>
        <div className="flex gap-2 self-auto">
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
          <Card key={agent.id} className="p-4 cursor-pointer hover:border-blue-500 shadow-none" onClick={() => navigate(`/agents/${agent.id}`)}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div className="bg-white bg-muted rounded-lg shrink-0 sm:mx-0 flex items-center justify-start md:justify-center">
                <img src={agent.image} alt={agent.name} width={window.innerWidth < 640 ? 80 : 120} height={window.innerWidth < 640 ? 80 : 120} className="object-contain" />
              </div>
              <div className="sapce-y-2 md:space-y-4">
                <div className="flex items-start gap-2 justify-between">
                  <h3 className="font-semibold text-sidebar-foreground text-2xl">{agent.name}</h3>
                  <div className="flex flex-col items-start justify-start">
                    <span className="font-semibold text-lg text-sidebar-foreground">
                      {agent.price}
                    </span>
                    <span className="text-green-500 text-sm">{agent.growth}</span>
                  </div>
                </div>
                <p className="text-sm text-sidebar-foreground text-left border-b border-gray-200 pb-4">
                  {agent.description}
                </p>
                <div className="flex flex-row gap-4 justify-between mt-2 md:mt-0">
                  <div className="text-center sm:text-left">
                    <div className="text-sm text-sidebar-foreground">Current Treasury</div>
                    <div className="font-medium">{agent.currentTreasury}</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-sm text-sidebar-foreground">Weekly Grant Pool</div>
                    <div className="font-medium">{agent.weeklyGrantPool}</div>
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
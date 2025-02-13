import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Agent } from "@/types/agent"
import Image from "next/image"

interface FeaturedGrantAgentsProps {
  agents: Agent[]
}

const FeaturedGrantAgents: React.FC<FeaturedGrantAgentsProps> = ({ agents }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(2);
  const [imageSize, setImageSize] = useState<number>(80);
  const totalPages = Math.ceil(agents.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1440 ? 2 : 3);
      setImageSize(window.innerWidth < 640 ? 80 : 120);
    };

    // Set initial value
    handleResize();

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
    return agents.slice(startIndex, endIndex);
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-sidebar-foreground">Featured Grant Agents</h2>
          <p className="text-sm text-sidebar-foreground">Top ai agent token with AI grant operator agents.</p>
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

      <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {getCurrentPageItems().map((agent) => (
          <Card key={agent.id} className="p-4 cursor-pointer hover:border-blue-500 shadow-none" onClick={() => router.push(`/agents/${agent.id}`)}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div className="bg-white dark:bg-transparent rounded-lg shrink-0 sm:mx-0 flex items-center justify-start md:justify-center">
                <Image src={agent.image} alt={agent.name} width={imageSize} height={imageSize} className="object-contain" />
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
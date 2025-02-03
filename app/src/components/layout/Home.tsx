import { useState, useMemo } from "react"
import Hero from "@/components/sections/Hero"
import FeaturedGrantAgents from "@/components/sections/FeaturedGrantAgents"
import FeaturedGrantOperatorAgents from "@/components/sections/FeaturedGrantOperatorAgents"
import { agents } from "@/data/agents"
import { Agent } from "@/types/agent"

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string|null>(null);

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const searchLower = searchTerm?.toLowerCase() || "";
      return (
        agent.name.toLowerCase().includes(searchLower) ||
        agent.description.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-4 mt-8 sm:py-8 space-y-6 sm:space-y-8 px-4 mx-auto">
        <Hero onSearch={setSearchTerm} />
        <FeaturedGrantAgents agents={filteredAgents as Agent[]} />
        <FeaturedGrantOperatorAgents />
      </main>
    </div>
  )
}

export default Home
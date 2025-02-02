import Hero from "@/components/sections/Hero"
import FeaturedGrantAgents from "@/components/sections/FeaturedGrantAgents"
import FeaturedGrantOperatorAgents from "@/components/sections/FeaturedGrantOperatorAgents"
import NavBar from "./NavBar"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-4 mt-8 sm:py-8 space-y-6 sm:space-y-8 px-4 mx-auto">
        <Hero />
        <FeaturedGrantAgents />
        <FeaturedGrantOperatorAgents />
      </main>
    </div>
  )
}

export default Home
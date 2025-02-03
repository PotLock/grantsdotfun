import { Input } from "@/components/ui/input"

interface HeroProps {
  onSearch: (searchTerm: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <div className="text-center space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold">Explore Grant Operator Agent Tokens</h1>
      <p className="text-muted-foreground text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur. In dignissim adipiscing nisl turpis. Eget nec ut enim sem sed
        ut facilisis. Ultricies nunc ut tortor sit orci. Velit bibendum at ut diam nulla.
      </p>
      <Input 
        type="search" 
        placeholder="Search agents by name or description" 
        className="max-w-md mx-auto"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
} 

export default Hero;
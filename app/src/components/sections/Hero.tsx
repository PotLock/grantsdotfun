import { Input } from "@/components/ui/input"

const Hero = () => {
  return (
    <div className="text-center space-y-4 max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold">Explore Grant Operator Agent Tokens</h1>
      <p className="text-muted-foreground text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur. In dignissim adipiscing nisl turpis. Eget nec ut enim sem sed
        ut facilisis. Ultricies nunc ut tortor sit orci. Velit bibendum at ut diam nulla.
      </p>
      <Input 
        type="search" 
        placeholder="Search" 
        className="max-w-md mx-auto"
      />
    </div>
  )
} 

export default Hero;
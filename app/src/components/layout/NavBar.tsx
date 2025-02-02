import { Search, SmilePlus, HandCoins } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const NavBar:React.FC = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          <Link 
            to="/"
            className={cn(
              "flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors",
              "hover:text-blue-500",
              pathname === "/" && "text-blue-500"
            )}
          >
            <Search className="h-5 w-5" />
            Explore
          </Link>

          <Link
            to="/agents/create"
            className={cn(
              "flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors",
              "hover:text-blue-500",
              pathname === "/agents/create" && "text-blue-500"
            )}
          >
            <SmilePlus className="h-5 w-5" />
            Create Agent
          </Link>

          <Link
            to="/claim"
            className={cn(
              "flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors",
              "hover:text-blue-500",
              pathname === "/claim" && "text-blue-500"
            )}
          >
            <HandCoins className="h-5 w-5" />
            Claim Funds
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
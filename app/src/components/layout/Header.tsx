import LoginButton from "@/components/custom/LoginButton"

const Header: React.FC = () => {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between mx-auto px-5">
        <div className="flex items-center gap-6 md:gap-20">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/assets/logos/money.svg"
              alt="Grants.fun Logo"
              width={24}
              height={24}
              className="h-6 w-6" 
            />
            <span className="font-semibold">grants.fun</span> 
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a href="/">
              <span className="text-sm hover:text-primary transition-colors">Explore</span>
            </a>
            <a href="/agents/create">
              <span className="text-sm hover:text-primary transition-colors">Create Agent</span>
            </a>
            <a href="/claim">
              <span className="text-sm hover:text-primary transition-colors">Claim Funds</span>
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <LoginButton />
        </div>
      </div>
    </header>
  )
}

export default Header
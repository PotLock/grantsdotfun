"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import LoginButton from "@/components/custom/LoginButton"
import { useState } from "react"

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between mx-auto md:px-0 px-5">
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
          {/* Desktop Navigation */}
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
          <div className="hidden md:block">
            <LoginButton />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="container py-4 px-5">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-sm hover:text-primary transition-colors">
                Explore
              </a>
              <a href="/agents/create" className="text-sm hover:text-primary transition-colors">
                Create Agent
              </a>
              <a href="/claim" className="text-sm hover:text-primary transition-colors">
                Claim Funds
              </a>
              <div className="pt-2">
                <LoginButton />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
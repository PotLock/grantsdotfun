"use client"

import { Button } from "@/components/ui/button"
import { Menu, Users } from 'lucide-react'
import Image from "next/image"
import LoginButton from "@/components/custom/LoginButton"
import Link from "next/link"

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logos/money.svg"
              alt="Grants.fun Logo"
              width={24}
              height={24}
              className="h-6 w-6" 
            />
            <span className="font-semibold">grants.fun</span>
          </Link>
          <div className="flex items-center gap-10">
            <Link href="/explore">
              <span className="text-sm">Explore</span>
            </Link>
            <Link href="/governance">
              <span className="text-sm">Governance</span>
            </Link>
            <Link href="/claim">
              <span className="text-sm">Claim Funds</span>
            </Link>
          </div>
        </div>
        <LoginButton />
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
} 

export default Header;
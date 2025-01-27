import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export interface Token {
  symbol: string
  name: string
  image: string
}

const tokens: Token[] = [
  {
    symbol: "$BLACKDRAGON",
    name: "Black Dragon",
    image: "/assets/tokens/black-dragon.png",
  },
  {
    symbol: "$GRANTS",
    name: "Grants Token",
    image: "/assets/icons/money.svg",
  },
  {
    symbol: "$NEAR",
    name: "NEAR Protocol",
    image: "/assets/tokens/near.png",
  },
]

interface TokenDropdownProps {
  selectedToken: Token
  onSelect: (token: Token) => void
}

export const TokenDropdown = ({ selectedToken, onSelect }: TokenDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="shrink-0 rounded-full bg-stone-200 hover:bg-stone-300">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 relative flex items-center justify-center rounded-full bg-white/10">
                <Image
                src={selectedToken.image}
                alt={selectedToken.name}
                width={16}
                height={16}
                className="object-contain max-w-[16px] max-h-[16px]"
                />
            </div>
            {selectedToken.symbol} 
            <ChevronDown className="w-4 h-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {tokens.map((token) => (
          <DropdownMenuItem
            key={token.symbol}
            onClick={() => onSelect(token)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 relative flex items-center justify-center rounded-full bg-white/10">
                <Image
                src={token.image}
                alt={token.name}
                width={16}
                height={16}
                className="object-contain max-w-[16px] max-h-[16px]"
                />
            </div>
            <span>{token.symbol}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
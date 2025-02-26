import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const tokens: Token[] = [
  {
    symbol: "$BLACKDRAGON",
    name: "Black Dragon",
    icon: "/assets/tokens/black-dragon.png",
  },
  {
    symbol: "$GRANTS",
    name: "Grants Token",
    icon: "/assets/icons/money.svg",
  },
  {
    symbol: "$NEAR",
    name: "NEAR Protocol",
    icon: "/assets/tokens/near.png",
  },
]

interface TokenDropdownProps {
  selectedToken: Token
  onSelect: (token: Token) => void
}

export const TokenDropdown: React.FC<TokenDropdownProps> = ({ selectedToken, onSelect }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="shrink-0 rounded-full bg-stone-200 dark:bg-stone-600 hover:bg-stone-300 dark:hover:bg-stone-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 relative flex items-center justify-center rounded-full bg-white/10">
                <img
                src={selectedToken.icon || ""}
                alt={selectedToken.name || ""}
                width={16}
                height={16}
                className="object-contain max-w-[16px] max-h-[16px]"
                />
            </div>
            <span className="text-xs xl:text-base">{selectedToken.symbol}</span>
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
                <img
                src={token.icon || ""}
                alt={token.name || ""}
                width={16}
                height={16}
                className="object-contain max-w-[16px] max-h-[16px]"
                />
            </div>
            <span className="text-xs xl:text-base">{token.symbol}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
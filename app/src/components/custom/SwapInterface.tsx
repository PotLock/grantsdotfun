import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, ChevronRight } from "lucide-react"
import { TokenDropdown } from "./TokenDropdown"
import { ftGetTokenMetadata,init_env,WalletSelectorTransactions,getPoolByIds, estimateSwap, EstimateSwapView, instantSwap, Transaction } from "@ref-finance/ref-sdk";
import { useEffect } from "react";
import { TokenMetadata,Pool } from "@ref-finance/ref-sdk";
import { useWalletSelector } from "@near-wallet-selector/react-hook"
import { toast } from "react-hot-toast";

init_env(process.env.NEXT_PUBLIC_NETWORK || "mainnet");


const SwapInterface: React.FC = () => {
  const { signedAccountId, signIn, signOut,wallet } = useWalletSelector();
  const [fromAmount, setFromAmount] = useState<string|null>(null)
  const [toAmount, setToAmount] = useState<string|null>(null)
  const [pools, setPools] = useState<Pool[]>()
  const [tokenIn, setTokenIn] = useState<TokenMetadata>()
  const [tokenOut, setTokenOut] = useState<TokenMetadata>()
  
  const fetchTokenMetadata = async () => {
    const tokenIn = await ftGetTokenMetadata("wrap.testnet");
    const tokenOut = await ftGetTokenMetadata("coin.school.asac.aslabs.testnet");
    setTokenIn(tokenIn)
    setTokenOut(tokenOut)
    // console.log(tokenIn, tokenOut);
  };

  const fetchAllPoolTokens = async () => {
    const pools = await getPoolByIds([0]);
    // console.log(pools)
    setPools(pools)
  };

  useEffect(() => {
    fetchTokenMetadata();
    fetchAllPoolTokens();
  }, []);

  if (!tokenIn || !tokenOut || !pools) return null;

  //rft.tokenfactory.testnet
  const handleSwap = async () => {
    const swapTodos: EstimateSwapView[] = await estimateSwap({
      tokenIn,
      tokenOut,
      amountIn: '1',
      simplePools: pools,
    });
    console.log(swapTodos)
    const transactionsRef: Transaction[] = await instantSwap({
      tokenIn,
      tokenOut,
      amountIn: '1',
      swapTodos,
      slippageTolerance: 0.01,
      AccountId: signedAccountId || ''
    });
    console.log(transactionsRef)
    if (!signedAccountId) toast.error("Please login to swap");
    wallet?.signAndSendTransactions(
      WalletSelectorTransactions(transactionsRef, signedAccountId || '')
    );
  }

  return (
    <Card className="p-4 shadow-none">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-medium text-sidebar-foreground">Swap</h3>
        <div className="flex items-center space-x-2">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <span className="sr-only">Settings</span>
            ⚙️
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative space-y-2">
          <div className="rounded-lg bg-stone-50 dark:bg-muted p-4 space-y-2">
            <label className="text-sm text-sidebar-foreground">From</label>
            <div className="flex items-center gap-2 justify-between">
              <input value={fromAmount || ""} placeholder="0" onChange={(e) => setFromAmount(e.target.value)} className="border-0 bg-transparent shadow-none focus:border-0 focus:outline-none focus:ring-0 font-semibold text-base xl:text-2xl w-full md:w-[120px] 2xl:w-[200px]" />
              <TokenDropdown selectedToken={tokenIn || {}} onSelect={setTokenIn} />
            </div>
            <div className="flex items-center justify-between">
              <div className="mt-1 text-sm text-sidebar-foreground">$0.00</div>
              <span className="text-sm text-sidebar-foreground">Balance: <strong className="text-blue-500">0.00</strong></span>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -translate-y-[3%] pointer-events-none">
            <div className="rounded-xl bg-white border-2 border-stone-200 p-2 w-10 h-10 flex items-center justify-center cursor-pointer pointer-events-auto z-10">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
          <div className="rounded-lg bg-stone-50 dark:bg-muted p-4 space-y-2">
            <label className="text-sm text-sidebar-foreground">To</label>
            <div className="flex items-center justify-between gap-2">
              <input value={toAmount || ""} placeholder="0" onChange={(e) => setToAmount(e.target.value)} className="border-0 bg-transparent shadow-none focus:border-0 focus:outline-none focus:ring-0 font-semibold text-base xl:text-2xl w-full xl:w-[120px] 2xl:w-[200px]" />
              <TokenDropdown selectedToken={tokenOut || {}} onSelect={setTokenOut} />
            </div>
            <div className="flex items-center justify-between">
              <div className="mt-1 text-sm text-sidebar-foreground">$0.00</div>
              <span className="text-sm text-sidebar-foreground">Balance: <strong className="text-blue-500">0.00</strong></span>
            </div>
          </div>
        </div>
        <Button onClick={handleSwap} className="w-full bg-blue-500 text-white hover:bg-blue-600">Swap</Button>
        <div className="space-y-6 rounded-lg border border-stone-200 p-3 text-sidebar-foreground">
          <div className="flex justify-between text-sm">
            <span className="text-sidebar-foreground">Rate</span>
            <span className="text-sidebar-foreground">1 {tokenOut.symbol}=0.1001234 NEAR</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-sidebar-foreground">Est network fee</span>
            <span className="text-sidebar-foreground">$0.010</span>
          </div>
          
          <div className="flex justify-between text-sm items-center">
            <div className="flex items-center gap-1">
              <span className="text-sidebar-foreground">Slippage</span>
              <div className="text-gray-400 cursor-help">ⓘ</div>
            </div>
            <div className="flex items-center text-orange-500">
              5% <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>

          <div className="text-sm text-orange-500">
            {tokenOut.symbol}'s burning mechanism will affect the token's price. 
            We've set a 5% slippage to increase of a successful transaction. 
            If the transaction encounters issues, Consider increasing the slippage
          </div>

          <div className="flex justify-between text-sm items-center">
            <div className="flex items-center gap-1">
              <span className="text-sidebar-foreground">Quote route</span>
              <div className="text-gray-400 cursor-help">ⓘ</div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </div>

          <div className="flex justify-between text-sm items-center">
            <div className="flex items-center gap-1">
              <span className="text-sidebar-foreground">Quote route</span>
              <div className="text-gray-400 cursor-help">ⓘ</div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SwapInterface;
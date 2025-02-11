"use client";

import type { NetworkId } from "@near-wallet-selector/core";
import { WalletSelectorProvider } from "@near-wallet-selector/react-hook";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupBitteWallet } from "@near-wallet-selector/bitte-wallet";
// import { setupNightly } from "@near-wallet-selector/nightly";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";

export function NearWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WalletSelectorProvider
      config={{
        modules: [
          setupMyNearWallet() as any,
          // setupNightly(),
          setupHereWallet(),
          setupMeteorWallet(),
          setupBitteWallet({
            walletUrl: process.env.NEXT_PUBLIC_NETWORK === "mainnet"
              ? process.env.NEXT_PUBLIC_WALLET_URL
              : process.env.NEXT_PUBLIC_WALLET_URL_TESTNET,
            callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
            deprecated: false,
          })
        ],
        network: (process.env.NEXT_PUBLIC_NETWORK || "testnet") as NetworkId,
        createAccessKeyFor: process.env.NEXT_PUBLIC_SMART_CONTRACT,
      }}
    >
      {children}
    </WalletSelectorProvider>
  );
}

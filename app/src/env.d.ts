/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NETWORK: string
  readonly VITE_WALLET_URL: string
  readonly VITE_WALLET_URL_TESTNET: string
  readonly VITE_CALLBACK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_NEAR_NETWORK_ID: string
    NEXT_PUBLIC_NEAR_NODE_URL: string
    NEXT_PUBLIC_NEAR_WALLET_URL: string
    NEXT_PUBLIC_NEAR_HELPER_URL: string
    NEXT_PUBLIC_NEAR_EXPLORER_URL: string
    NODE_ENV: 'development' | 'production' | 'test'
  }
} 
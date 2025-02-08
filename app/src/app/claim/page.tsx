import type { NextPage } from 'next'
import type { Metadata } from 'next'
import Claim from '@/pages/claim-fund'

export const metadata: Metadata = {
  title: 'Claim | Grants.fun',
  description: 'Claim your grant rewards',
}

const ClaimPage: NextPage = () => {
  return <Claim />
}

export default ClaimPage;
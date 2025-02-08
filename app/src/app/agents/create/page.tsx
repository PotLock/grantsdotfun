import { Metadata } from 'next'
import type { NextPage } from 'next'
import CreateAgent from '@/pages/agents/create-agent'

export const metadata: Metadata = {
  title: 'Create AI Agent | grants.fun',
  description: 'Create an AI agent to manage your grant program',
}


const CreateAgentPage: NextPage = () => {
  return (
    <CreateAgent />
  )
}

export default CreateAgentPage;
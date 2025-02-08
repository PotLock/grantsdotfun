import { Metadata } from 'next'
import AgentDetails from '@/pages/agents/agent-details'

export const metadata: Metadata = {
  title: 'Agent Details | Grants.fun',
  description: 'View and manage your grant agent details',
}

interface Props {
  params: {
    agentId: string
  }
}

const AgentDetailsPage = async ({ params }: Props) => {
  const { agentId } = await params
  return <AgentDetails agentId={agentId} />
}

export default AgentDetailsPage
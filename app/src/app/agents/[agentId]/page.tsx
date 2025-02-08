import { Metadata } from 'next'
import AgentDetails from '@/pages/agents/agent-details'
import { useAgentDetails } from '@/hooks/useAgentDetails'

type Props = {
  params: Promise<{ agentId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export async function generateMetadata(
  { params, searchParams }: Props
): Promise<Metadata> {
  const agentId = (await params).agentId
  const { agent } = useAgentDetails(agentId || "")
  return {
    title: `${agent?.name} | Grants.fun`,
    description: 'View and manage your grant agent details',
  }
}

export default async function AgentDetailsPage({ params }: Props) {
  const agentId = (await params).agentId
  return <AgentDetails agentId={agentId} />
}
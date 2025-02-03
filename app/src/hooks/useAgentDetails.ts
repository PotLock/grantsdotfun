import { agents } from "@/data/agents"

const useAgentDetails = (agentId: string | undefined) => {
  const agent = agents.find(agent => agent.id === parseInt(agentId || '0'))
  return { agent }
}

export { useAgentDetails }
import TradingViewChart from "@/components/custom/TradingViewChart"
import SwapInterface from "@/components/custom/SwapInterface"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TwitterActivity from "@/components/custom/TwitterActivity"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Copy, Search, BarChart2, Vote, Users, MessageSquare, FileText } from "lucide-react"
import AboutGovernance from "@/components/custom/AboutGovernance"
import ProposalGovernance from "@/components/custom/ProposalGovernance"
import Grantees from "@/components/custom/Grantees"
import AgentLogs from "@/components/custom/AgentLogs"
import Overview from "@/components/custom/Overview"
import Analytics from "@/components/custom/Analytics"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useParams } from "react-router-dom"
import { useAgentDetails } from '@/hooks/useAgentDetails'

const AgentDetails: React.FC = () => {
  const params = useParams()
  const agentId = params.agentId
  const { agent } = useAgentDetails(agentId)
  

  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  const handleDescriptionToggle = () => {
    setIsExpanded(!isExpanded)
  }

  if (!agent) {
    return <div className="container py-6 mx-auto">Agent not found</div>
  }

  const fullDescription = agent.description || "No description available"
  const shortDescription = fullDescription.slice(0, 150) + "..."

  return(
      <main className="px-5">
      <div className="container py-6 mx-auto">
        <Breadcrumb className="mb-4 sm:mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/agents">Agents</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{agent.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid gap-6 lg:grid-cols-[3fr_1fr]">
          <div className="space-y-6">
              <div className="flex md:flex-row flex-col items-start gap-4 border border-gray-200 rounded-xl p-4 shadow-sm w-full">
                  <div className="flex-shrink-0 flex items-center justify-center h-[95px] w-[100px] p-2 bg-gray-100 rounded-lg">
                      <img
                          src={agent.image||"/assets/images/image-example.png"}
                          alt={agent.name}
                          width={70}
                          height={70}
                          className="rounded-full object-contain"
                      />
                  </div>
                  <div className="flex-1">
                      <h1 className="text-lg xl:text-xl font-bold truncate text-sidebar-foreground">{agent.name}</h1>
                      <div className="flex items-center gap-2 text-sm text-sidebar-foreground">
                          <span className="text-blue-500 font-semibold text-xs md:text-sm">${agent.ticker}</span>
                          <span>|</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sidebar-foreground font-medium bg-gray-100 p-1 px-2 text-xs md:text-sm rounded-md">{agent.address}</span>
                            <Copy className="w-4 h-4 cursor-pointer flex-shrink-0" onClick={() => copyToClipboard(agent.address || "")} />
                          </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <p className="text-sidebar-foreground text-xs lg:text-sm break-words">
                          {isExpanded ? fullDescription : shortDescription}
                          <span 
                            className="text-sidebar-foreground font-semibold cursor-pointer ml-1 inline-block text-xs md:text-sm"
                            onClick={handleDescriptionToggle}
                          >
                            {isExpanded ? "Show Less" : "Read More"}
                          </span>
                        </p>
                      </div>
                  </div>
              </div>
              {/* <div className="rounded-lg border">
                <TradingViewChart />
              </div> */}

              <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList className="bg-transparent p-1">
                    <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                      <Search className="w-4 h-4" />
                      <span className="hidden md:inline">Overview</span>
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                      <BarChart2 className="w-4 h-4" />
                      <span className="hidden md:inline">Analytics</span>
                    </TabsTrigger>
                    <TabsTrigger value="governance" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                      <Vote className="w-4 h-4" />
                      <span className="hidden md:inline">Governance</span>
                    </TabsTrigger>
                    <TabsTrigger value="grantees" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                      <Users className="w-4 h-4" />
                      <span className="hidden md:inline">Grantees</span>
                    </TabsTrigger>
                    <TabsTrigger value="forum" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                      <MessageSquare className="w-4 h-4" />
                      <span className="hidden md:inline">Forum</span>
                    </TabsTrigger>
                    <TabsTrigger value="agent-logs" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                      <FileText className="w-4 h-4" />
                      <span className="hidden md:inline">Agent Logs</span>
                    </TabsTrigger>
                  </TabsList>
                  <div className="bg-gray-100 w-full h-[2px]"/>

                  <TabsContent value="overview" className="space-y-6">
                    <Overview agent={agent} />
                  </TabsContent>

                  <TabsContent value="analytics" className="space-y-6"> 
                    <Analytics />
                  </TabsContent>

                  <TabsContent value="governance" className="space-y-6">
                    <AboutGovernance agent={agent} /> 
                    <ProposalGovernance proposals={agent.governance.proposal} />  
                  </TabsContent>
                  
                  <TabsContent value="grantees" className="space-y-6"> 
                    <Grantees grantees={agent.grantees} />
                  </TabsContent>
                  <TabsContent value="forum" className="space-y-6">

                  </TabsContent>
                  <TabsContent value="agent-logs" className="space-y-6">
                    <AgentLogs logs={agent.logs || []} />
                  </TabsContent>
              </Tabs>
          </div>

          <div className="space-y-6 w-full pb-20 sm:pb-0">
            <SwapInterface />
            <TwitterActivity />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AgentDetails;
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
import Image from "next/image"
import { Copy, Search, BarChart2, Vote, Users, MessageSquare, FileText } from "lucide-react"
import AboutGovernance from "@/components/custom/AboutGovernance"
import ProposalGovernance from "@/components/custom/ProposalGovernance"
import Grantees from "@/components/custom/Grantees"
import AgentLogs from "@/components/custom/AgentLogs"
import Overview from "@/components/custom/Overview"
import Analytics from "@/components/custom/Analytics"


const AgentDetails = () => {
    return(
        <main className="flex-1">
        <div className="container py-6 mx-auto">
          <Breadcrumb className="mb-6">
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
                <BreadcrumbPage>Black Dragon</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
                <div className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-center h-[95px] w-[150px] p-2 bg-gray-100 rounded-lg">
                        <Image
                            src="/assets/tokens/dragon.png"
                            alt="Black Dragon Logo"
                            width={70}
                            height={70}
                            className="rounded-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold">Black Dragon</h1>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="text-blue-500 font-semibold">$BLACKDRAGON</span>
                            <span>|</span>
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground font-medium bg-gray-100 p-1 px-2 rounded-md">Blackdragon.near</span>
                              <Copy className="w-4 h-4 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-muted-foreground text-sm">
                              The Ethereum Foundation, in collaboration with Aztec, Polygon, Scroll, Taiko and zkSync, is launching
                              the grants initiative to encourage research and development for Zero-Knowledge proofs and standards for
                              ZK L2s... <span className="text-black font-semibold cursor-pointer">Read More</span>
                          </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border">
                  <TradingViewChart />
                </div>

                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList className="bg-transparent p-1">
                      <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                        <Search className="w-4 h-4" />
                        Overview
                      </TabsTrigger>
                      <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                        <BarChart2 className="w-4 h-4" />
                        Analytics
                      </TabsTrigger>
                      <TabsTrigger value="governance" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                        <Vote className="w-4 h-4" />
                        Governance
                      </TabsTrigger>
                      <TabsTrigger value="grantees" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                        <Users className="w-4 h-4" />
                        Grantees
                      </TabsTrigger>
                      <TabsTrigger value="forum" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                        <MessageSquare className="w-4 h-4" />
                        Forum
                      </TabsTrigger>
                      <TabsTrigger value="agent-logs" className="flex items-center gap-2 data-[state=active]:bg-blue-50 p-3">
                        <FileText className="w-4 h-4" />
                        Agent Logs
                      </TabsTrigger>
                    </TabsList>
                    <div className="bg-gray-100 w-full h-[2px]"/>

                    <TabsContent value="overview" className="space-y-6">
                      <Overview />
                    </TabsContent>

                    <TabsContent value="analytics" className="space-y-6"> 
                      <Analytics />
                    </TabsContent>

                    <TabsContent value="governance" className="space-y-6">
                      <AboutGovernance /> 
                      <ProposalGovernance />  
                    </TabsContent>
                    
                    <TabsContent value="grantees" className="space-y-6"> 
                      <Grantees />
                    </TabsContent>
                    <TabsContent value="forum" className="space-y-6">

                    </TabsContent>
                    <TabsContent value="agent-logs" className="space-y-6">
                      <AgentLogs />
                    </TabsContent>
                </Tabs>
            </div>

            <div className="space-y-6">
                <SwapInterface />
                <TwitterActivity />
            </div>
          </div>
        </div>
      </main>
    )
}

export default AgentDetails;
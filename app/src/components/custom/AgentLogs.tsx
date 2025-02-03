import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { timeAgo } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { TwitterIcon } from "@/components/icons/TwitterIcon"
import { TelegramIcon } from "@/components/icons/TelegramIcon"
import { DiscordIcon } from "@/components/icons/DiscordIcon"
import { AgentLog } from "@/types/agent"


const IconSocial = {
    twitter: <TwitterIcon />,
    telegram: <TelegramIcon />,
    discord: <DiscordIcon />
}

const LogInteraction = ({ log }: { log: AgentLog }) => {
    return (
        <Card key={log.id} className="shadow-none">
            <CardContent className="flex items-start gap-4 p-6 border-b last:border-b-0">
                <div className="w-8 h-8 bg-black rounded-lg p-2">
                    {IconSocial[log.platform as keyof typeof IconSocial]}
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <img src={log.user?.avatar || ''} alt={log.user?.name || ''} className="w-5 h-5 rounded-full" width={16} height={16} />
                            <span className="text-sm">{log.user?.name}</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full items-center">
                        <p className="text-sm mt-1">{log.message}</p>
                        <span className="text-xs text-muted-foreground">
                            {timeAgo(new Date(log.timestamp))}
                        </span>
                        {log.actionLink && (
                            <a 
                                href="#" 
                                className="text-sm text-blue-500 hover:text-blue-600 inline-block"
                            >
                                {log.actionLink}
                            </a>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

const LogDeveloper = ({ log }: { log: AgentLog }) => {
    return (
        <Card key={log.id} className="shadow-none">
            <CardContent className="flex items-center justify-between p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">New Model: Commit:</span>
                        <span className="text-sm text-muted-foreground">{log.commit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Contributed by</span>
                        <div className="flex items-center gap-1">
                            <img 
                                src={log.contributor?.avatar || ''} 
                                alt={log.contributor?.name || ''} 
                                width={20} 
                                height={20} 
                                className="rounded-full"
                            />
                            <span className="text-sm text-muted-foreground">@{log.contributor?.name}</span>
                        </div>
                    </div>
                </div>
                <span className="text-xs text-muted-foreground ml-4">
                    {timeAgo(new Date(log.timestamp))}
                </span>
            </CardContent>
        </Card>
    )
}

const AgentLogs = ({ logs }: { logs: AgentLog[] }) => {

    const platforms = ["All Platforms", "Twitter", "Telegram", "Discord"]

    return (
        <div className="w-full">
            <Tabs defaultValue="all" className="w-full">
                <div className="flex flex-row justify-between items-center">
                    <TabsList className="grid grid-cols-3 mb-4 max-w-[500px]">
                        <TabsTrigger value="all">All Logs</TabsTrigger>
                        <TabsTrigger value="interaction">Interaction Logs</TabsTrigger>
                        <TabsTrigger value="developer">Developer Logs</TabsTrigger>
                    </TabsList>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-4">
                                All Platforms
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {platforms.map((platform) => (
                                <DropdownMenuItem key={platform}>
                                    {platform}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div> 

                <TabsContent value="all" className="space-y-4">
                    {logs.map((log) => (
                        <div key={log.id}>
                            {log.type === "interaction" ? (
                                <LogInteraction log={log} />
                            ) : (
                                <LogDeveloper log={log} />
                            )}
                        </div>
                    ))}
                </TabsContent>

                <TabsContent value="interaction" className="space-y-4">
                    {logs.filter(log => log.type === "interaction").map((log) => (
                        <LogInteraction log={log} />
                    ))}
                </TabsContent>

                <TabsContent value="developer" className="space-y-4">
                    {logs.filter(log => log.type === "developer").map((log) => (
                        <LogDeveloper log={log} />
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default AgentLogs
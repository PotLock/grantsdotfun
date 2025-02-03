import { InfoIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const AboutGovernance: React.FC = () => {
    return (
        <Card className="shadow-none bg-[#F8FAFC]">
            <CardContent className="space-y-2 md:space-y-4 p-3 md:p-6">
                <div>
                    <CardHeader className="p-0">
                        <CardTitle className="text-lg md:text-xl text-sidebar-foreground">About Governance</CardTitle>
                    </CardHeader>
                    <p className="text-sm text-sidebar-foreground mt-2">
                        This grant program is governed by $BLACKDRAGON token holders through a DAO structure. Token holders can vote on key parameters, reviewer appointments, and treasury allocations.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 py-2 md:py-6">
                    <Card className="shadow-none">
                        <CardContent className="p-4">
                            <div className="text-sm md:text-lg font-semibold text-sidebar-foreground">35</div>
                            <div className="text-xs md:text-sm text-sidebar-foreground">Proposals</div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-none">
                        <CardContent className="p-4">
                            <div className="text-sm md:text-lg font-semibold text-sidebar-foreground">$2,876,000</div>
                            <div className="text-xs md:text-sm text-sidebar-foreground">Capital Deployed</div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-none">
                        <CardContent className="p-4">
                            <div className="text-sm md:text-lg text-sidebar-foreground flex items-center gap-1">
                                <span className="font-semibold">1.2B $GRANTS</span>
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <InfoIcon className="w-4 h-4 text-muted-foreground cursor-help" />
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-80">
                                        <p className="text-sm font-sans text-sidebar-foreground">Total voting power represents the sum of all $GRANTS tokens that can be used for governance decisions.</p>
                                    </HoverCardContent>
                                </HoverCard>
                            </div>
                            <div className="text-xs md:text-sm text-sidebar-foreground">Total Voting Power</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <Card className="bg-[#EFF6FF] border-blue-200 shadow-none">
                        <CardContent className="space-y-3 p-4">
                            <div className="flex items-center gap-2">
                                <InfoIcon className="w-5 h-5 text-blue-500" />
                                <h3 className="text-sm font-semibold text-blue-500">How It Works</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-blue-500 list-disc list-inside">
                                <li>1 $GRANTS token = 1 vote</li>
                                <li>Proposals need 50% approval</li>
                                <li>Minimum 1000 tokens required for grants proposals</li>
                                <li>Voting period: 7 days</li>
                                <li>Execution delay: 2 days after passing</li>
                                <li>Approved changes update the AI agent Settings</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="shadow-none">
                        <CardContent className="space-y-3 p-4 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-sm md:text-lg font-semibold text-sidebar-foreground">Voting Preferences</h3>
                                <p className="text-xs md:text-sm text-sidebar-foreground mt-2">
                                    Personal settings that determine how your votes are cast. Only visible to you as a token holder. Choose between manual voting, AI-powered voting rules, or delegating your voting power to a trusted community member.
                                </p>
                            </div>
                            <Button className="max-w-[150px] bg-blue-500 text-white hover:bg-blue-600">
                                Set Up Voting
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}

export default AboutGovernance;
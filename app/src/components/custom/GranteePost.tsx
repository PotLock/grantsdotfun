import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent } from "../ui/card"
import { MessageCircle } from "lucide-react"
import { GranteePostType } from "@/types/agent"

const GranteePost = ({ 
    avatar, 
    name, 
    username, 
    content, 
    timeAgo, 
    hasThread,
    twitterProposal
}: GranteePostType) => {
    
    return (
        <Card className="border-b py-4 shadow-none rounded-md">
            <CardContent className="flex gap-3">
                <Avatar className="h-10 w-10 rounded-sm">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                </Avatar>
                <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <span className="font-semibold text-xs md:text-sm">{name}</span>
                            <span className="text-muted-foreground text-xs md:text-sm"> @{username}</span>
                        </div>
                        <span className="text-muted-foreground text-xs md:text-sm">{timeAgo}</span>
                    </div>
                    <p className="mt-2 text-xs md:text-sm">{content}</p>
                    {hasThread && (
                        <a href="#" className="mt-2 max-w-[130px] md:max-w-[150px] items-center text-sm text-muted-foreground border border-gray-200 rounded-md px-2 py-1 flex flex-row gap-1">
                            <MessageCircle className="w-3 h-3" />
                            <span className="text-xs md:text-sm">Thread ({twitterProposal?.length || 0} tweets)</span>
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default GranteePost
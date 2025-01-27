import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import { MessageCircle } from "lucide-react"

interface GranteePostProps {
    avatar: string
    name: string
    username: string
    content: string
    timeAgo: string
    hasThread?: boolean
}

const GranteePost = ({ 
    avatar, 
    name, 
    username, 
    content, 
    timeAgo, 
    hasThread 
}: GranteePostProps) => {
    
    return (
        <Card className="border-b py-4">
            <CardContent className="flex gap-3">
                <Avatar className="h-10 w-10 rounded-sm">
                    <img src={avatar} alt={name} />
                </Avatar>
                <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <span className="font-semibold">{name}</span>
                            <span className="text-muted-foreground"> @{username}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{timeAgo}</span>
                    </div>
                    <p className="mt-2">{content}</p>
                    {hasThread && (
                        <Link href="#" className="mt-2 max-w-[150px] items-center text-sm text-muted-foreground border border-gray-200 rounded-md px-2 py-1 flex flex-row gap-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>Thread (3 tweets)</span>
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default GranteePost
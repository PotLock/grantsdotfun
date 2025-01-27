import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Tweet {
  id: number
  avatar: string
  name: string
  handle: string
  date: string
  content: string
}

const tweets: Tweet[] = Array(12)
  .fill({
    avatar: "/assets/images/avatar/avatar.png",
    name: "Grantsfun",
    handle: "@grantsfun",
    date: "Aug 1, 2023",
    content: "Excited to announce our latest grant recipient! #Grantsfun #WeeklyGrant",
  })
  .map((tweet, index) => ({
    ...tweet,
    id: index,
  }))

const TwitterActivity = () => {
  return (
    <div className="rounded-lg border">
      <div className="p-4 border-b">
        <h3 className="font-medium">Recent Twitter Activity</h3>
        <p className="text-sm text-muted-foreground">Latest Tweets and interactions for this agent</p>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="p-4 space-y-4">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="flex gap-3">
              <Avatar className="h-8 w-8">
                <img src={tweet.avatar || "/placeholder.svg"} alt={tweet.name} />
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{tweet.name}</span>
                    <span className="text-sm text-muted-foreground">{tweet.handle}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{tweet.date}</span>
                </div>
                <p className="text-sm">{tweet.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default TwitterActivity;
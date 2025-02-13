import { AgentIntent } from "@/types/agent";
import Link from "next/link";
import { TelegramIconLight, TwitterIconLight, DiscordIconLight } from "../icons/Icons";

const IconSocial = {
  Twitter: <TwitterIconLight />,
  Telegram: <TelegramIconLight />,
  Discord: <DiscordIconLight />
}

const SocialIntegrations: React.FC<{ socialIntegrations: AgentIntent[] }> = ({ socialIntegrations }) => {
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-sidebar-foreground">Agent Integrations</h3>
        <p className="text-sm text-sidebar-foreground">
          This Agent can be accessed and interacted with through the following platforms:
        </p>
        <div className="w-full h-[1px] bg-gray-200"/>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {
          socialIntegrations.map((integration, i) => (
            <Link key={i} href={`https://${integration.platform}.com/${integration.username.replace("@", "")}`} target="_blank" className="flex items-center gap-2 rounded-lg border p-2 px-3 w-full hover:bg-muted">
              <div className="w-10 h-10 bg-black rounded-xl p-2">
                {IconSocial[integration.platform as keyof typeof IconSocial]}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-sidebar-foreground">{integration.platform}</span>
                <span className="text-sm text-sidebar-foreground">{integration.username}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SocialIntegrations;
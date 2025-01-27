import Link from "next/link"
import Image from "next/image"

const SocialIntegrations = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-medium">Agent Integrations</h3>
        <p className="text-sm text-muted-foreground">
          This Agent can be accessed and interacted with through the following platforms:
        </p>
        <div className="w-full h-[1px] bg-gray-200"/>
      </div>

      <div className="flex gap-4">
        <Link href="#" target="_blank" className="flex items-center gap-2 rounded-lg border p-2 px-3 w-[200px] hover:bg-muted">
          <div className="w-10 h-10 bg-black rounded-xl p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Twitter</span>
            <span className="text-sm">@grantsfun</span>
          </div>
        </Link>
        <Link href="#" target="_blank" className="flex items-center gap-2 rounded-lg border p-2 px-3 w-[200px] hover:bg-muted">
          <div className="w-10 h-10 bg-black rounded-xl p-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="#ffffff" d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Discord</span>
            <span className="text-sm">@grantsfun</span>
          </div>
        </Link>
        <Link href="#" target="_blank" className="flex items-center gap-2 rounded-lg border p-2 px-3 w-[200px] hover:bg-muted">
          <div className="w-10 h-10 bg-black rounded-xl p-2 flex items-center justify-center">
            <Image src="/assets/icons/telegram.svg" alt="Telegram" className="w-full h-full" width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Telegram</span>
            <span className="text-sm">@grantsfun</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SocialIntegrations;
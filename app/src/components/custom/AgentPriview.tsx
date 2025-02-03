import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { AgentTypes } from "@/types/agent"

const AgentPreview: React.FC<AgentTypes> = ({ name, image, description, governanceType, fundingFrequency, evaluationType, ticker, isUseImageGenerated, isUseEmoji }) => {

    return(
        <div className="lg:sticky lg:top-8 space-y-4">
            <Card className="rounded-xl border p-6">
            <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col items-start gap-5 w-full">
                    {
                        !isUseImageGenerated && !isUseEmoji ? (
                            <img src={image} alt="Agent Preview" width={100} height={100} />
                        ) : isUseImageGenerated ? (
                            <img src={image} alt="Agent Preview" width={100} height={100} />
                        ) : (
                            <div className="text-[5rem]">{image}</div>
                        )
                    }

                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-col items-start gap-1">
                            <h3 className="font-semibold text-2xl text-sidebar-foreground">{name || 'AI Research DAO'}</h3>
                            <div className="text-sm text-sidebar-foreground">${ticker || 'Token'}</div>
                        </div>
                        <Button variant="outline" size="sm">Preview</Button>
                    </div>
                </div>
                
            </div>

            <p className="text-sm text-sidebar-foreground mb-3 pb-2 border-b border-gray-200 w-full">
                {description || 'Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis at eu nibh sapien neque quis.'}
            </p>

            <div className="space-y-4">
                <div className="flex justify-between py-1 border-b border-gray-200 w-full pb-2">
                    <span className="text-sm text-sidebar-foreground">Governance Type</span>
                    <span className="text-sm font-medium text-sidebar-foreground">{governanceType || 'Admin-based'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200 w-full pb-2">
                    <span className="text-sm text-sidebar-foreground">Funding Frequency</span>
                    <span className="text-sm font-medium text-sidebar-foreground">{fundingFrequency || 'Weekly'}</span>
                </div>
                <div className="flex justify-between py-1">
                    <span className="text-sm text-sidebar-foreground">Evaluation Type</span>
                    <span className="text-sm font-medium text-sidebar-foreground">{evaluationType || 'AI + Human Review'}</span>
                </div>
            </div>
            </Card>
        </div>
    )
}

export default AgentPreview
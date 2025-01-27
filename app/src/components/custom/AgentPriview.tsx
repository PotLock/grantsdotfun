import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { AgentPreviewTypes } from "@/types/agent"
import Image from "next/image"

const AgentPreview: React.FC<AgentPreviewTypes> = 
    ({ name, image, description, governanceType, fundingFrequency, evaluationType }) => {

    return(
        <div className="lg:sticky lg:top-8 space-y-4">
            <Card className="rounded-xl border p-6">
            <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col items-start gap-5 w-full">
                    <Image src={image} alt="Agent Preview" width={100} height={100} />
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-col items-start gap-1">
                            <h3 className="font-semibold text-2xl">{name || 'AI Research DAO'}</h3>
                            <div className="text-sm text-gray-600">$Token</div>
                        </div>
                        <Button variant="outline" size="sm">Preview</Button>
                    </div>
                </div>
                
            </div>

            <p className="text-sm text-gray-600 mb-3 pb-2 border-b border-gray-200 w-full">
                {description || 'Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis at eu nibh sapien neque quis.'}
            </p>

            <div className="space-y-4">
                <div className="flex justify-between py-1 border-b border-gray-200 w-full pb-2">
                    <span className="text-sm text-gray-600">Governance Type</span>
                    <span className="text-sm font-medium">{governanceType || 'Admin-based'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200 w-full pb-2">
                    <span className="text-sm text-gray-600">Funding Frequency</span>
                    <span className="text-sm font-medium">{fundingFrequency || 'Weekly'}</span>
                </div>
                <div className="flex justify-between py-1">
                    <span className="text-sm text-gray-600">Evaluation Type</span>
                <span className="text-sm font-medium">AI + Human Review</span>
                </div>
            </div>
            </Card>
        </div>
    )
}

export default AgentPreview
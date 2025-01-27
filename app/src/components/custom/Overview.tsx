import Reviewers from "./Reviewers";
import SocialIntegrations from "./SocialIntegrations";

const Overview = () => {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-5">
                <div className="rounded-lg border p-2 px-4 max-w-full max-h-[70px]">
                    <div className="text-sm font-medium text-muted-foreground">Market Cap</div>
                    <div className="mt-1 text-sm font-bold">$75,000,000</div>
                </div>
                <div className="rounded-lg border p-2 px-4 max-w-full max-h-[70px]">
                    <div className="text-sm font-medium text-muted-foreground">24h Volume</div>
                    <div className="mt-1 text-sm font-bold">$75,000,000</div>
                </div>
                <div className="rounded-lg border p-2 px-4 max-w-full max-h-[70px]">
                    <div className="text-sm font-medium text-muted-foreground">Capital Deployed</div>
                    <div className="mt-1 text-sm font-bold">$75,000,000</div>
                </div>
                <div className="rounded-lg border p-2 px-4 max-w-full max-h-[70px]">
                    <div className="text-sm font-medium text-muted-foreground">Current Treasury</div>
                    <div className="mt-1 text-sm font-bold">$75,000,000</div>
                </div>
                <div className="rounded-lg border p-2 px-4 max-w-full max-h-[70px]">
                    <div className="text-sm font-medium text-muted-foreground">Total Grants</div>
                    <div className="mt-1 text-sm font-bold">$75,000,000</div>
                </div>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-bold">Description</h2>
                    <div className="w-full h-[1px] bg-gray-200"/>
                    </div>
                    <p className="text-muted-foreground text-sm">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Purus elementum erat quae nec aliquat sed
                    feugiat dolor donec. Mi non maecenas non adipiscing. Fam enim et risus nulla amet mus in aliquam
                    porta.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-bold">Evaluation Criterion</h2>
                    <div className="w-full h-[1px] bg-gray-200"/>
                    </div>
                    <p className="text-muted-foreground text-sm">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Purus elementum erat quae nec aliquat sed
                    feugiat dolor donec. Mi non maecenas non adipiscing. Fam enim et risus nulla amet mus in aliquam
                    porta.
                    </p>
                </div>

                <Reviewers />
                <SocialIntegrations />
        </div>
    )
}

export default Overview;
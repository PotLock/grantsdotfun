import Reviewers from "./Reviewers";
import SocialIntegrations from "./SocialIntegrations";

interface StatItem {
    label: string;
    value: string;
}

const stats: StatItem[] = [
    { label: "Market Cap", value: "$75,000,000" },
    { label: "24h Volume", value: "$75,000,000" },
    { label: "Capital Deployed", value: "$75,000,000" },
    { label: "Current Treasury", value: "$75,000,000" },
    { label: "Total Grants", value: "$75,000,000" },
];

const Overview: React.FC = () => {
    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="rounded-lg border p-2 sm:px-4 h-[60px] sm:h-[70px] flex flex-col justify-center bg-primary-foreground"
                    >
                        <div className="text-xs sm:text-sm font-medium text-sidebar-foreground">{stat.label}</div>
                        <div className="mt-0.5 sm:mt-1 text-sm font-bold text-sidebar-foreground">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-base sm:text-lg font-bold text-sidebar-foreground">Description</h2>
                    <div className="w-full h-[1px] bg-gray-200"/>
                </div>
                <p className="text-xs sm:text-sm text-sidebar-foreground">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Purus elementum erat quae nec aliquat sed
                    feugiat dolor donec. Mi non maecenas non adipiscing. Fam enim et risus nulla amet mus in aliquam
                    porta.
                </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-base sm:text-lg font-bold text-sidebar-foreground">Evaluation Criterion</h2>
                    <div className="w-full h-[1px] bg-gray-200"/>
                </div>
                <p className="text-xs sm:text-sm text-sidebar-foreground">
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
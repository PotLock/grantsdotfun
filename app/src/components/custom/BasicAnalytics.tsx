import { Card, CardContent } from "@/components/ui/card";

interface AnalyticCardProps {
  title: string;
  value: string;
  change: number;
  timeframe?: string;
}

const AnalyticCard = ({ title, value, change, timeframe = "This Month" }: AnalyticCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <Card className="bg-[#F8FAFC] shadow-none">
      <CardContent className="p-4">
        <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <span className="text-lg font-bold">{value}</span>
            <div className="h-[1px] w-full bg-gray-200"/>
            <div className="flex items-center gap-5 flex-row ">
                <div className={`flex items-center gap-1 text-sm text-white px-2 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}>
                    {isPositive ? '+' : "-"}
                    <span>{Math.abs(change)}%</span>
                </div>
                <p className="text-xs">{timeframe}</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BasicAnalytics = () => {
  const analyticsData = [
    { title: "Mindshare", value: "18.24%", change: 4.75 },
    { title: "Price", value: "$24.09", change: -2.34 },
    { title: "Marketcap", value: "$0.075", change: 17.52 },
    { title: "Current Unique Holders", value: "51.73K", change: 0.34 }
  ];

  const twitterAnalyticsData = [
    { title: "Engagement", value: "237.27", change: -34.76 },
    { title: "Impression", value: "19.52K", change: -22.24 },
    { title: "Smart Reach", value: "89.3K", change: 140.81 }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-4">
        {analyticsData.map((item, index) => (
            <AnalyticCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
            />
        ))}
      </div>
      <span className="text-lg font-bold">Twitter Analytics</span>
      <div className="grid gap-4 md:grid-cols-3">
        {twitterAnalyticsData.map((item, index) => (
            <AnalyticCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
            />
        ))}
      </div>
    </div>
  );
};

export default BasicAnalytics;
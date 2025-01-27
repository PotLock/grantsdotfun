import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MindShareChart from "../chart/MindShareChart";
import BasicAnalytics from "./BasicAnalytics";
import MarketCapChart from "../chart/MarketCapChart";
import UniqueHolderChart from "../chart/UniqueHolderChart";
import EngagementAVGChart from "../chart/EngagementAVGChart";
import ImpressionsChart from "../chart/Impressions";
import ReachChart from "../chart/ReachChart";
import EngagementChart from "../chart/EngagementChart";

const mockData = {
  postEngagement: 3.27,
  smartEngagement: 27,
  postEngagementGrowth: 262.13,
  smartEngagementGrowth: 285.71,
  comparisonPercentage: -83.96,
  series: {
    postEngagement: [
      [Date.UTC(2023, 11, 14), 800],    // Starting around 800
      [Date.UTC(2023, 11, 15), 1000],   // Gradual increase
      [Date.UTC(2023, 11, 16), 1500],   // Steeper increase
      [Date.UTC(2023, 11, 17), 2500],   // Continuing up
      [Date.UTC(2023, 11, 18), 3000],   // Peak
      [Date.UTC(2023, 11, 19), 3200],   // Slight increase
      [Date.UTC(2023, 11, 20), 3270],   // Final value
    ] as [number, number][],
    smartEngagement: [
      [Date.UTC(2023, 11, 14), 10],     // Starting around 10
      [Date.UTC(2023, 11, 15), 12],     // Slight increase
      [Date.UTC(2023, 11, 16), 18],     // Jump up
      [Date.UTC(2023, 11, 17), 22],     // Continuing up
      [Date.UTC(2023, 11, 18), 25],     // Near peak
      [Date.UTC(2023, 11, 19), 26],     // Almost there
      [Date.UTC(2023, 11, 20), 27],     // Final value
    ] as [number, number][]
  }
};

const Analytics = () => {
  return (
    <div className="w-full p-4">
      <Tabs defaultValue="basic" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList className="grid w-[400px] grid-cols-2">
            <TabsTrigger value="basic">Basic View</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Analytics</TabsTrigger>
          </TabsList>

          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <TabsContent value="basic">
          <div className="mt-14">
            <BasicAnalytics />
          </div>
        </TabsContent>
        
        <TabsContent value="detailed">
          <div className="mt-14">
            <MindShareChart />
            <div className="mt-10 grid grid-cols-2 gap-4">
              <MarketCapChart />
              <UniqueHolderChart />
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <EngagementAVGChart />
              <ImpressionsChart />
            </div>
            <div className="mt-10">
              <span className="text-2xl font-semibold">Analytics</span>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <ReachChart />
                <EngagementChart {...mockData} />
              </div>

            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
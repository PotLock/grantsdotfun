"use client"

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '../ui/badge';

interface EngagementChartProps {
  postEngagement: number;
  smartEngagement: number;
  postEngagementGrowth: number;
  smartEngagementGrowth: number;
  comparisonPercentage: number;
  series: {
    postEngagement: [number, number][];
    smartEngagement: [number, number][];
  };
}

const EngagementChart: React.FC<EngagementChartProps> = ({
  postEngagement,
  smartEngagement,
  postEngagementGrowth,
  smartEngagementGrowth,
  comparisonPercentage,
  series
}) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'area',
      height: 200,
      backgroundColor: 'transparent',
      spacing: [0, 0, 0, 0],
    },
    title: {
      text: undefined
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%b %d}',
        style: {
          color: '#6B7280',
          fontSize: '12px',
        }
      },
      lineWidth: 0,
      tickWidth: 0,
    },
    yAxis: [{
      title: {
        text: undefined
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      min: 0
    }, {
      title: {
        text: undefined
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      opposite: true,
      min: 0
    }],
    tooltip: {
      shared: true,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderWidth: 0,
      shadow: true,
      padding: 8,
    },
    series: [{
      name: 'Post engagement (7-day)',
      type: 'area',
      data: series.postEngagement,
      color: '#86efac',
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, 'rgba(134, 239, 172, 0.6)']
        ]
      },
      lineWidth: 2,
      yAxis: 0
    }, {
      name: 'Smart engagement (7-day)',
      type: 'area',
      data: series.smartEngagement,
      color: '#60a5fa',
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: []
      },
      lineWidth: 2,
      yAxis: 1
    }],
    credits: {
      enabled: false
    },
    legend: {
      enabled: true,
      align: 'left',
      verticalAlign: 'top',
      symbolRadius: 0,
      symbolWidth: 10,
      symbolHeight: 10,
      itemStyle: {
        color: '#6B7280',
        fontWeight: 'normal',
        fontSize: '12px'
      },
      x: 0,
      y: 0
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false
        }
      }
    }
  };

  return (
    <Card className='bg-white rounded-lg shadow-none'>
      <CardHeader className='pb-2 p-3'>
        <CardTitle>Engagement</CardTitle>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-muted-foreground">Post engagement (7-day)</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold">{postEngagement}K</span>
              <Badge variant="success" className="font-normal">
                {postEngagementGrowth}%
              </Badge>
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Smart engagement (7-day)</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold">{smartEngagement}</span>
              <Badge variant="success" className="font-normal">
                {smartEngagementGrowth}%
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className='border-t border-gray-200 pt-2'>
        <HighchartsReact highcharts={Highcharts} options={options} />
        
        <div className="mt-2 text-sm flex flex-row gap-1 justify-end pt-3">
          <span className="text-red-500">{comparisonPercentage}% </span>
          <span>smart engagements vs agents with similar market cap</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngagementChart;
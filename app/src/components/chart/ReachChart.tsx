"use client"

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../ui/badge"

const generateMockData = () => {
  const endDate = Date.UTC(2023, 11, 18); 
  const startDate = endDate - (7 * 24 * 3600 * 1000); 
  const data = [];
  let value = 20000000; 
  
  for (let i = 0; i < 100; i++) {
    const timeInterval = (endDate - startDate) / 99; 
    const currentTime = startDate + (i * timeInterval);
    
    const randomChange = (Math.random() - 0.3) * 300000; 
    value = Math.max(value + randomChange, 15000000); 
    value = Math.min(value, 40000000); 
    
    data.push([
      Math.round(currentTime),
      Math.round(value)
    ]);
  }
  
  return data;
};

const ReachChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
      height: 200,
      spacing: [10, 0, 10, 0],
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: undefined
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      labels: {
        style: {
          color: '#666',
          fontSize: '12px'
        },
        formatter: function() {
          return Highcharts.dateFormat('%b %d', this.value as number);
        }
      },
      lineColor: '#e5e7eb',
      tickColor: '#e5e7eb',
      tickLength: 0,
      gridLineWidth: 0,
      minPadding: 0,
      maxPadding: 0,
      tickPositions: [
        Date.UTC(2023, 11, 14), // Dec 14
        Date.UTC(2023, 11, 16), // Dec 16
        Date.UTC(2023, 11, 18)  // Dec 18
      ]
    },
    yAxis: {
      title: {
        text: undefined
      },
      labels: {
        style: {
          color: '#666',
          fontSize: '12px'
        },
        formatter: function(this: Highcharts.AxisLabelsFormatterContextObject) {
          const value = this.value as number;
          if (value === 0) return '0';
          if (value === 25000000) return '25M';
          if (value === 50000000) return '50M';
          return '';
        }
      },
      gridLineWidth: 0,
      min: 0,
      max: 50000000,
      tickPositions: [0, 25000000, 50000000]
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(59, 130, 246)']
          ]
        },
        lineColor: '#3b82f6',
        lineWidth: 2,
        marker: {
          enabled: false
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      }
    },
    series: [{
      type: 'area',
      name: 'Total reach (7-day)',
      data: generateMockData(),
      color: '#3b82f6'
    }],
    tooltip: {
      enabled: false
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'bottom',
      floating: true,
      x: -10,
      y: -35,
      itemStyle: {
        color: '#ffffff',
        fontWeight: 'normal',
        fontSize: '12px'
      },
      backgroundColor: 'transparent',
      symbolRadius: 0,
      symbolWidth: 10,
      symbolHeight: 10,
      itemDistance: 5,
      padding: 0,
      margin: 0,
      shadow: false,
      borderWidth: 0
    }
  };

  return (
    <Card className="bg-white rounded-lg shadow-none">
      <CardHeader className="pb-2 p-3">
        <CardTitle>Reach</CardTitle>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Impressions (7-day)
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">214.68K</span>
              <Badge variant="success" className="font-normal">
                +81.72%
              </Badge>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Smart reach (7-day)
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">34.24M</span>
              <Badge variant="success" className="font-normal">
                +156.91%
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="border-t border-gray-200 pt-2">
        <div className="space-y-4">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
          
          <div className="text-sm justify-end flex flex-row gap-1">
            <span className="text-red-500">-89.07%</span> 
            <span>total impressions vs agents with similar market cap</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReachChart;
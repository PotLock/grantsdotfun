"use client"

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, CardContent } from "../ui/card";

interface ImpressionsChartProps {
    data?: number[];
    title?: string;
    percentageChange?: number;
    timeFrame?: string;
    comparisonPercen?: string;
    currentValue?: string;
}

const ImpressionsChart: React.FC<ImpressionsChartProps> = ({
    data = [100, 105, 105, 105, 120, 130, 135, 135],
    title = "Impressions (Avg.)",
    percentageChange = -34.7,
    timeFrame = "7D",
    comparisonPercen = "-44.57%",
    currentValue = "297.27"
}) => {
    const options: Highcharts.Options = {
        chart: {
            type: 'line',
            height: 200,
            backgroundColor: 'transparent',
        },
        title: {
            text: undefined
        },
        credits: {
            enabled: false
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: false
                },
                lineWidth: 2
            }
        },
        series: [{
            type: 'line',
            name: 'Engagement',
            data: data,
            color: '#FF4444'
        }],
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        }
    };

    return (
        <Card className="bg-white rounded-lg shadow-none">
            <CardContent className="p-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">{title}</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-semibold">{currentValue}</span>
                                <span className="text-sm text-red-500">{percentageChange}% {timeFrame}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-[140px]">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                    
                    <div className="text-sm text-gray-500">
                        <span className="text-red-500">{comparisonPercen}</span> engagements vs agents with a similar MC
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ImpressionsChart;
'use client';

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, CardContent } from '../ui/card';

interface MarketCapChartProps {
    data?: number[];
    marketCap?: number;
    percentageChange?: number;
    timeFrame?: string;
    comparisonPercentage?: number;
}

const MarketCapChart: React.FC<MarketCapChartProps> = ({
    data = [],
    marketCap = 916.63,
    percentageChange = 89.3,
    timeFrame = '7D',
    comparisonPercentage = 19.61
}) => {
    const options: Highcharts.Options = {
        chart: {
            type: 'line',
            height: 200,
            style: {
                fontFamily: 'Inter, sans-serif'
            },
            backgroundColor: 'transparent'
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
                }
            },
            series: {
                states: {
                    hover: {
                        enabled: true,
                        lineWidth: 2
                    }
                }
            }
        },
        series: [{
            type: 'line',
            name: 'Market Cap',
            data: data.length ? data : [
                100, 101, 102, 101.5, 102, 102.5, 103, 102.8, 103.2, 103.5, 
                103.8, 104, 103.7, 103.9, 104.2, 104.5, 104.3, 104.8, 105, 
                105.2, 105.5, 105.3, 105.8, 106, 106.2, 106.5, 106.8, 107, 
                107.2, 107.5, 107.3, 107.8, 108, 108.2, 108.5, 108.3, 108.8, 
                109, 109.2, 109.5, 109.8, 110, 110.2, 110.5, 110.8, 111, 
                111.2, 111.5, 111.8, 112, 112.3, 112.5, 112.8, 113, 113.2, 
                113.5, 113.8, 114, 114.2, 114.5, 114.8, 115
            ],
            color: '#4285f4',
            lineWidth: 2
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
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Market cap</span>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-semibold">{`${marketCap}M`}</span>
                            <span 
                                className="text-sm font-medium"
                                style={{ color: percentageChange >= 0 ? '#34A853' : '#EA4335' }}
                            >
                                {`${percentageChange >= 0 ? '+' : ''}${percentageChange}% ${timeFrame}`}
                            </span>
                        </div>
                    </div>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options} />
                <div className="mt-2">
                    <span className="text-sm text-[#5F6368]">
                        {`+${comparisonPercentage}% market cap vs agents with a similar mindshare`}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
};

export default MarketCapChart;
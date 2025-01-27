"use client"

import { Card, CardContent } from "../ui/card"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from "react"

const UniqueHolderChart = () => {
    const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
        chart: {
            type: 'column',
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
            visible: false,
        },
        yAxis: {
            visible: false,
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: 2,
                pointPadding: 0,
                groupPadding: 0.1,
                color: '#3B82F6' // blue-500
            }
        },
        series: [{
            type: 'column',
            data: Array(40).fill(1).map(() => Math.random() * 100),
        }]
    });

    return (
        <Card className="bg-white rounded-lg shadow-none">
            <CardContent className="p-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">Unique Holder</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-semibold">51.73K</span>
                                <span className="text-sm text-green-500">+35% 7D</span>
                            </div>
                        </div>
                    </div>
                    
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartOptions}
                    />
                    
                    <div className="text-sm">
                        <span className="text-red-500">-22.87%</span> holders vs agents with a similar MC
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default UniqueHolderChart;
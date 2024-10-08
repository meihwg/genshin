
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

import './doughnut-chart.css';

interface DoughnutChartProps {
    value: number;
    color: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ value, color }) => {
    
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['', ''],
            datasets: [
                {
                    data: [value, 100 - value],
                    backgroundColor: [
                        documentStyle.getPropertyValue(color),
                        documentStyle.getPropertyValue('--color-gray')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue(color),
                        documentStyle.getPropertyValue('--color-gray')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%',
            aspectRatio: 2,
            plugins: {
                tooltip: {
                    enabled: false,
                },
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: value + '%',
                    font: {
                        size: 20
                    }
                },
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [value, color]);

    return (
        <div className="chart-container">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="chart-container" />
        </div>
    )
}

export default DoughnutChart;
        
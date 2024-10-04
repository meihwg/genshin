import React from "react";
import "./bar-chart.css";

interface BarChartProps {
    data: number[];
    color: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, color }) => {
    return (
        <div className="bar-chart">
            <div className="bar-chart-container">
                <div className="bar" style={{ width: `${data[0]/data[1]*100}%`, backgroundColor: `var(${color})` }}></div>
            </div>
        </div>
    );
};

export default BarChart;

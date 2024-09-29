import React from "react";
import "./user-stats.css";

import Chart from "../chart/chart.tsx";

const UserStats: React.FC = () => {
    return (
        <>
            <div className="user-stats">
                <div className="stats-container">
                    <div className="stat-explo stats">
                        <h3 className="text-red">Exploration</h3>
                        <div className="chart-container">
                            <Chart value={Math.round(30/60*100 * Math.pow(10, 2)) / Math.pow(10, 2)} color="--color-red" />
                        </div>
                        <p>30 areas finished / 60</p>
                    </div>
                    <div className="stat-quest stats">
                        <h3 className="text-blue">Quests</h3>
                        <div className="chart-container">
                            <Chart value={Math.round(20/50*100 * Math.pow(10, 2)) / Math.pow(10, 2)} color="--color-blue" />
                        </div>
                        <p>20 quests finished / 50</p>
                    </div>
                    <div className="stat-success stats">
                        <h3 className="text-yellow">Success</h3>
                        <div className="chart-container">
                            <Chart value={Math.round(1246/1500*100 * Math.pow(10, 2)) / Math.pow(10, 2)} color="--color-yellow" />
                        </div>
                        <p>1246 success / 1500</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserStats;
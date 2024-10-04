import React from "react";
import "./wishes-stats.css";

import BarChart from "../charts/bar-chart/bar-chart.tsx";

const WishesStats: React.FC = () => {
    return (
        <>
            <section className="wishes-stats left">
                <div className="stats-container section-container">
                    <div className="stats">
                        <h3 className="text-red">50/50 won</h3>
                        <div className="chart-container">
                            <BarChart data={[4, 15]} color="--color-red" />
                        </div>
                        <p>4 / 15</p>

                        <hr />

                        <h3 className="text-red">Average pity</h3>
                        <div className="chart-container">
                            <BarChart data={[64, 90]} color="--color-red" />
                        </div>
                        <p>64 / 90</p>
                    </div>
                    <div className="stats">
                        <h3 className="text-blue">Total 5☆ pulls</h3>
                        <p>21</p>

                        <hr />

                        <h3 className="text-blue">Total in wishes & primogems</h3>
                        <p>642 wishes 
                            <br /> {642*160} primogems </p>

                    </div>
                    <div className="stats">
                        <h3 className="text-yellow">5☆ characters owned</h3>
                        <div className="chart-container">
                            <BarChart data={[14, 32]} color="--color-yellow" />
                        </div>
                        <p>14 / 32</p>

                        <hr />

                        <h3 className="text-yellow">5☆ weapons owned</h3>
                        <div className="chart-container">
                            <BarChart data={[3, 56]} color="--color-yellow" />
                        </div>
                        <p>3 / 56</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WishesStats;
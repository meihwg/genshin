import React from "react";
import "./wishes-stats.css";

import Chart from "../chart/chart.tsx";

const WishesStats: React.FC = () => {
    return (
        <>
            <section className="wishes-stats left">
                <div className="stats-container section-container">
                    <div className="stats">
                        <h3 className="text-red">50/50</h3>
                        <div className="chart-container">
                            <Chart value={Math.round(10/15*100 * Math.pow(10, 2)) / Math.pow(10, 2)} color="--color-red" />
                        </div>
                        <p>10 won / 15</p>
                    </div>
                    <div className="stats">
                        <h3 className="text-blue">Luck</h3>
                        <div className="chart-container">
                        </div>
                        <p>Average pity : 60</p>
                    </div>
                    <div className="stats">
                        <h3 className="text-yellow">Titre</h3>
                        <div className="chart-container">
                        </div>
                        <p>x / x</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WishesStats;
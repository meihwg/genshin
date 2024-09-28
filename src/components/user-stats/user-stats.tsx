import React from "react";
import "./user-stats.css";

const UserStats: React.FC = () => {
    return (
        <>
            <div className="user-stats">
                <div className="stats-container">
                    <div className="stat-explo stats">
                        <h3>Exploration</h3>
                        <p>60%</p>
                        <p>30 areas finished / 60</p>
                    </div>
                    <div className="stat-quest stats">
                        <h3>Quests</h3>
                        <p>40%</p>
                        <p>20 quests finished / 50</p>
                    </div>
                    <div className="stat-success stats">
                        <h3>Success</h3>
                        <p>80%</p>
                        <p>1200 success / 1500</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserStats;
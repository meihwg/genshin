import React from "react";
import "./page-planner.css";

import UserStats from "../user-stats/user-stats.tsx";

const PagePlanner: React.FC = () => {
    return (
        <>
            <div className="page-planner">
                <UserStats />
            </div>
        </>
    );
};

export default PagePlanner;
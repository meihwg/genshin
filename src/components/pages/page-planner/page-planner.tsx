import React from "react";
import "./page-planner.css";

import UserStats from "../../user-stats/user-stats.tsx";
import Planner from "../../planner/planner.tsx";
import TodoList from "../../todo-list/todo-list.tsx";

const PagePlanner: React.FC = () => {
    return (
        <>
            <div className="page-title"><h2>Build planner</h2></div>
            <div className="page-planner page">
                <div className="left">
                    <Planner />
                </div>
                <TodoList />
            </div>
        </>
    );
};

export default PagePlanner;
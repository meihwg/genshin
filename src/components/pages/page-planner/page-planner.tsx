import React from "react";
import "./page-planner.css";

import Inventory from "../../planner/inventory/inventory.tsx";
import TodoList from "../../todo/todo-list/todo-list.tsx";

const PagePlanner: React.FC = () => {
    return (
        <>
            <div className="page-title"><h2>Build planner</h2></div>
            <div className="page-planner page">
                <div className="left">
                    <Inventory />
                </div>
                <TodoList />
            </div>
        </>
    );
};

export default PagePlanner;
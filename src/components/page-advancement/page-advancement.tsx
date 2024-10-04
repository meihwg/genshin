import React from "react";
import "./page-advancement.css";

import UserStats from "../user-stats/user-stats.tsx";
import TodoList from "../todo-list/todo-list.tsx";

const PageAdvancement: React.FC = () => {
    return (
        <>
            <div className="page-title"><h2>Advancement tracker</h2></div>
            <div className="page-advancement page">
                <div className="left">
                    <UserStats />
                </div>
                <TodoList />
            </div>
        </>
    );
};


export default PageAdvancement;
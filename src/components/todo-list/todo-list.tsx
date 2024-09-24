import React from "react";
import "./todo-list.css";

const TodoList: React.FC = () => {
    return (
        <>
            <div className="todo-list">
                <div className="todo-container">
                    <div className="todo">
                        <h3>Todo :</h3>
                        <ul>
                            <li>Daily</li>
                            <li>Weekly bosses</li>
                            <li>Reputation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoList;
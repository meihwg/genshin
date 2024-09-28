import React from "react";
import "./todo-card.css";

interface TodoListProps {
    title: string;
    description: string;
    color: string;
}

const TodoList: React.FC<TodoListProps> = ({ title, description, color }) => {
    return (
        <>
            <div className= {`todo-card ${color}`}>
                <div className="todo-checkbox">
                    <input type="checkbox" />
                </div>
                <div className="todo-content">
                    <span> {title} </span>
                    <p> {description} </p>
                </div>
            </div>
        </>
    );
};

export default TodoList;
import React, { useState }  from "react";
import "./todo-card.css";

interface TodoListProps {
    title: string;
    description: string;
    color: string;
}

const TodoList: React.FC<TodoListProps> = ({ title, description, color }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCardClick = () => setIsChecked(!isChecked);

    return (
        <>
            <div className= {`todo-card ${color}`} onClick={handleCardClick}>
                <div className="todo-checkbox checkbox">
                    <input
                        type="checkbox"
                        id={`input-${title}`}
                        checked={isChecked}
                        onClick={handleCardClick}
                        className="custom-checkbox"
                    />
                    <div className="custom-checkbox-label"></div>
                </div>
                <div className="todo-content">
                    <div className="title">
                        <span> {title} </span>
                    </div>
                    <p> {description} </p>
                </div>
            </div>
        </>
    );
};

export default TodoList;
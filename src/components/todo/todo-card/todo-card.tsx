import React, { useState }  from "react";
import "./todo-card.css";

interface TodoListProps {
    id: number;
    title: string;
    description: string;
    color: string;
}

const TodoList: React.FC<TodoListProps> = ({ id, title, description, color }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCardClick = () => setIsChecked(!isChecked);

    return (
        <>
            <div className= {`todo-card ${color}`} onClick={handleCardClick}>
                <div className="todo-checkbox checkbox">
                    <input
                        type="checkbox"
                        id={`input-${id}`}
                        checked={isChecked}
                        onClick={handleCardClick}
                        onChange={() => setIsChecked(!isChecked)}
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
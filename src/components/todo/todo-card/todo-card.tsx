import React, { useState }  from "react";
import "./todo-card.css";

import CustomCheckbox from "../../custom-checkbox/custom-checkbox.tsx";

interface TodoListProps {
    item: any;
    onChange: (id: number, type: string, isDone: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ item, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    let color = "red";
    if (item.frequency > 1 && item.frequency <= 7) {
        color = "yellow";
    } else if (item.frequency > 7) {
        color = "blue";
    }

    let isDone = false;
    if (item.done > 0) {
        const today = new Date().getTime();
        const doneDate = new Date(item.done).getTime();
        isDone = today < doneDate + item.frequency * 24 * 60 * 60 * 1000;
    }

    return (
        <>
            <div className= {`todo-card ${color}`} onClick={onChange.bind( null, item.id, item.type, !isDone)}>
                <div className="todo-checkbox checkbox">
                    <CustomCheckbox id={`input-${item.id}`} checked={isDone} onChange={() => setIsChecked(!isChecked)} />
                </div>
                <div className="todo-content">
                    <div className="title">
                        <span> {item.title} </span>
                    </div>
                    <p> {item.description} </p>
                </div>
            </div>
        </>
    );
};

export default TodoList;
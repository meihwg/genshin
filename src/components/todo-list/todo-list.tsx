import React from "react";
import "./todo-list.css";

import { PencilSimpleLine } from "phosphor-react";

import TodoCard from "../todo-card/todo-card.tsx";

const TodoList: React.FC = () => {
    return (
        <>
            <section className="todo-list right">
                <div className="todo-container section-container">
                    <div className="todo">
                        <h3>Todo :</h3>
                        <TodoCard title="Daily commissions"
                            description="Validate daily commissions by doing them or using resins"
                            color="red" />
                        <TodoCard title="Resins"
                            description="Use or condensate your resins"
                            color="red" />

                        <hr />

                        <TodoCard title="Weekly bosses"
                            description="Get your 3 weekly bosses rewards"
                            color="blue" />
                        <TodoCard title="Reputation"
                            description="Do your reputation requests and primes"
                            color="blue" />

                        <hr />

                        <TodoCard title="Theater"
                            description="Challenges the theater"
                            color="yellow" />
                        <TodoCard title="Abysse"
                            description="Do your abysse floors"
                            color="yellow" />

                        <hr />

                        <div className="edit-todo">
                            <PencilSimpleLine size={24} />
                            <span>Edit your list</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TodoList;
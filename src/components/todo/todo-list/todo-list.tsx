import React, { useState, useEffect } from "react";
import "./todo-list.css";

import { PencilSimple, PencilSimpleLine, PlusCircle, Trash } from "phosphor-react";

import TodoCard from "../todo-card/todo-card.tsx";
import CustomCheckbox from "../../custom-checkbox/custom-checkbox.tsx";
import { defaultTodos } from "./data.ts";

//TODO: gérer les modifications sur la modale

interface TodoItem {
    id: number;
    title: string;
    description: string;
    startDate: string;
    frequency: number;
    display: number;
    type: string;
    done: number;
}

const TodoList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [frequency, setFrequency] = useState(1);
    const [customItems, setCustomItems] = useState<TodoItem[]>([]);

    // Charge les items du localStorage au chargement du composant
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("customTodoItems") || "[]");
        setCustomItems(items);
    }, []);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Ajoute un nouvel item au tableau
    const handleAddItem = () => {
        const newItem: TodoItem = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            startDate: startDate.trim(),
            frequency: Number(frequency),
            display: 1,
            type: "custom",
            done: -1,
        };
        
        if (!newItem.title || !newItem.description || !newItem.startDate || !newItem.frequency) {
            alert("Please fill out all fields.");
            return;
        }
        
        const items = JSON.parse(localStorage.getItem("customTodoItems") || "[]");
        items.push(newItem);
        localStorage.setItem("customTodoItems", JSON.stringify(items));

        setTitle("");
        setDescription("");
        setStartDate("");
        setFrequency(1);

        setCustomItems(items);
    };

    // Supprime un item du tableau
    const handleDeleteItem = (id: number) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            const index = customItems.findIndex(item => item.id === id);
            const updatedItems = customItems.filter((_, i) => i !== index);
            setCustomItems(updatedItems);
            localStorage.setItem("customTodoItems", JSON.stringify(updatedItems));
        }
    };

    // Modifie l'affichage d'un item (oui/non)
    const toggleDisplay = (id: number, type: string) => {
        const updatedItems = [...customItems];
        if (type === "default") {
            const customItem = customItems.find(custom => custom.id === id);
            const defaultItem = defaultTodos.find(defaultItem => defaultItem.id === id);
            if (customItem) {
                const index = updatedItems.findIndex(item => item.id === id);
                updatedItems[index].display = updatedItems[index].display === 1 ? 0 : 1;
            } else {
                // Si le default item n'existe pas dans le local storage, on l'ajoute
                if (defaultItem) {
                    const newItem: TodoItem = {
                        id: defaultItem.id,
                        title: defaultItem.title,
                        description: defaultItem.description,
                        startDate: defaultItem.startDate,
                        frequency: defaultItem.frequency,
                        display: defaultItem.display === 1 ? 0 : 1,
                        type: "default",
                        done: -1,
                    };
                    updatedItems.push(newItem);
                }
            }
        }
        else if (type === "custom") {
            const index = updatedItems.findIndex(item => item.id === id);
            updatedItems[index].display = updatedItems[index].display === 1 ? 0 : 1;
        }
        setCustomItems(updatedItems);
        localStorage.setItem("customTodoItems", JSON.stringify(updatedItems));
    };

    // Mets à jour la date de réalisation d'un item
    // -1 = pas encore fait
    const toggleDone = (id: number, type: string, isDone: boolean) => {
        const updatedItems = [...customItems];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (type === "default") {
            const customItem = customItems.find(custom => custom.id === id);
            const defaultItem = defaultTodos.find(defaultItem => defaultItem.id === id);
            if (customItem) {
                const index = updatedItems.findIndex(item => item.id === id);
                updatedItems[index].done = isDone ? today.getTime() : -1;
            } else {
                // Si le default item n'existe pas dans le local storage, on l'ajoute
                if (defaultItem) {
                    const newItem: TodoItem = {
                        id: defaultItem.id,
                        title: defaultItem.title,
                        description: defaultItem.description,
                        startDate: defaultItem.startDate,
                        frequency: defaultItem.frequency,
                        display: defaultItem.display,
                        type: "default",
                        done: today.getTime(),
                    };
                    updatedItems.push(newItem);
                }
            }
        }
        else if (type === "custom") {
            const index = updatedItems.findIndex(item => item.id === id);
            updatedItems[index].done = isDone ? today.getTime() : -1;
        }
        setCustomItems(updatedItems);
        localStorage.setItem("customTodoItems", JSON.stringify(updatedItems));
    };

    // Retourne vrai si l'item est actif, pas encore fait
    const isTodoActive = (done: number, frequency: number) => {
        const today = new Date().getTime();
        const doneDate = new Date(done).getTime();
        return today > doneDate + frequency * 24 * 60 * 60 * 1000;
    };

    return (
        <>
            <section className="todo-list right">
                <div className="todo-container section-container">
                    <div className="todo">
                        <h3>Todo :</h3>
                        {[...defaultTodos.filter((defaultItem) => !customItems.some((customItem) => customItem.id === defaultItem.id)), ...customItems,].filter((item) => item.display === 1 && item.frequency === 1 && isTodoActive(item.done, item.frequency)).map((item, index) => (
                                <TodoCard key={index} item={item} onChange={toggleDone} />
                            ))}

                        <hr />

                        {[...defaultTodos.filter((defaultItem) => !customItems.some((customItem) => customItem.id === defaultItem.id)), ...customItems,].filter((item) => item.display === 1 && item.frequency > 1 && item.frequency <= 7 && isTodoActive(item.done, item.frequency)).map((item, index) => (
                                <TodoCard key={index} item={item} onChange={toggleDone} />
                            ))}

                        <hr />

                        {[...defaultTodos.filter((defaultItem) => !customItems.some((customItem) => customItem.id === defaultItem.id)),...customItems,].filter((item) => item.display === 1 && item.frequency > 7 && isTodoActive(item.done, item.frequency)).map((item, index) => (
                                <TodoCard key={index} item={item} onChange={toggleDone} />
                            ))}

                        <hr />

                        <h3>Finished :</h3>
                        {[...defaultTodos.filter((defaultItem) => !customItems.some((customItem) => customItem.id === defaultItem.id)), ...customItems,].filter((item) => !isTodoActive(item.done, item.frequency)).map((item, index) => (
                            <TodoCard key={index} item={item} onChange={toggleDone} />
                        ))}
                        <div className="edit-todo" onClick={handleEditClick}>
                            <PencilSimpleLine size={24} />
                            <span>Edit your list</span>
                        </div>
                    </div>

                </div>
            </section>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal todo-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="close-modal" onClick={handleCloseModal}>x</div>
                        <h3>Edit Todo List</h3>

                        <hr />

                        <span>Default items</span>
                        <div className="default">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Frequency in days</th>
                                        <th>Display ?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {defaultTodos.map((item, index) => {
                                    const customItem = customItems.find(custom => custom.id === item.id);
                                    const displayItem = customItem || item;

                                    return (
                                        <tr key={item.id} onClick={() => toggleDisplay(displayItem.id, displayItem.type)}>
                                            <td>{displayItem.title}</td>
                                            <td>{displayItem.description}</td>
                                            <td>{displayItem.frequency}</td>
                                            <td>
                                                <CustomCheckbox
                                                    id={`display-${displayItem.id}`}
                                                    checked={displayItem.display === 1}
                                                    onChange={() => toggleDisplay(displayItem.id, displayItem.type)}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <span>Your custom items</span>
                        <div className="custom">
                            {customItems.length === 0 ? (
                                <p className="no-data">No custom item.</p>
                            ) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Title</th> <th>Description</th> <th>Start date</th> <th>Frequency in days</th> <th>Display ?</th> <th></th> <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customItems.filter(item => item.type === "custom").map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>{item.startDate}</td>
                                                <td>{item.frequency}</td>
                                                <td>
                                                    <CustomCheckbox id={`display-${item.id}`} checked={item.display === 1} onChange={() => toggleDisplay(item.id, item.type)} />
                                                </td>
                                                <td><PencilSimple size={24} className="edit" /></td>
                                                <td>
                                                    <Trash size={24} className="del" onClick={() => handleDeleteItem(item.id)} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>

                        <hr />

                        <span>Add a custom item</span>
                        <div className="form row">
                            <div>
                                <div className="row">
                                    <label htmlFor="title">Title <span className="text-red">*</span></label>
                                    <input
                                        type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required
                                    />
                                </div>
                                <div className="row">
                                    <label htmlFor="description">Description <span className="text-red">*</span></label>
                                    <input
                                        type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" required
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <label htmlFor="start-date">Start Date <span className="text-red">*</span></label>
                                    <input
                                        type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required
                                    />
                                </div>
                                <div className="row">
                                    <label htmlFor="frequency">Frequency (in days) <span className="text-red">*</span></label>
                                    <input
                                        type="number" id="frequency" value={frequency} onChange={(e) => setFrequency(Number(e.target.value))} required
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="add" onClick={handleAddItem}>
                            <PlusCircle size={24} /> Add
                        </button>

                        <hr />

                        <div className="row buttons">
                            <button className="close" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoList;
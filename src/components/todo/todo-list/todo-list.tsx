import React, { useState, useEffect } from "react";
import "./todo-list.css";

import { PencilSimple, PencilSimpleLine, PlusCircle, Trash } from "phosphor-react";

import TodoCard from "../todo-card/todo-card.tsx";
import CustomCheckbox from "../../custom-checkbox/custom-checkbox.tsx";
import { defaultTodos, DefaultTodoItem } from "./data.ts";

//TODO: remplacer le tableau pas des input pour simplifier la modification
//TODO: ajouter une croix pour fermer la modale

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

    const handleAddItem = () => {
        // Vérifie si tous les champs requis sont remplis
        if (title && description && startDate && frequency) {
            const newItem: TodoItem = {
                id: Date.now(),
                title,
                description,
                startDate,
                frequency,
                display: 1,
                type: "custom",
                done: -1,
            };

            // Récupère les items existants dans le local storage, ou un tableau vide s'il n'y en a pas
            const items = JSON.parse(localStorage.getItem("customTodoItems") || "[]");

            // Ajoute le nouvel item et le stocke dans le local storage
            items.push(newItem);
            localStorage.setItem("customTodoItems", JSON.stringify(items));

            // Réinitialise les champs après l'ajout
            setTitle("");
            setDescription("");
            setStartDate("");
            setFrequency(1);

            // Rafraichit la liste des items
            setCustomItems(items);

            alert("Custom todo item saved!");
        } else {
            alert("Please fill out all fields.");
        }
    };

    const handleDeleteItem = (index: number) => {
        // Demande à l'utilisateur si il est sûr de vouloir supprimer l'item
        if (window.confirm("Are you sure you want to delete this item?")) {
            const updatedItems = customItems.filter((_, i) => i !== index); // Supprime l'élément à l'index spécifié
            setCustomItems(updatedItems);
            localStorage.setItem("customTodoItems", JSON.stringify(updatedItems));
        }
    };

    const toggleDisplay = (id: number, type: string) => {
        const updatedItems = [...customItems];
        if (type === "default") {
            const customItem = customItems.find(custom => custom.id === id);
            const defaultItem = defaultTodos.find(defaultItem => defaultItem.id === id);
            if (customItem) {
                const index = updatedItems.findIndex(item => item.id === id);
                updatedItems[index].display = updatedItems[index].display === 1 ? 0 : 1;
            } else {
                // créer le custome item = le default
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

    const toggleDone = (id: number, type: string, isDone: boolean) => {
        const updatedItems = [...customItems];
        if (type === "default") {
            const customItem = customItems.find(custom => custom.id === id);
            const defaultItem = defaultTodos.find(defaultItem => defaultItem.id === id);
            if (customItem) {
                const index = updatedItems.findIndex(item => item.id === id);
                updatedItems[index].done = isDone ? Date.now() : -1;
            } else {
                // créer le custome item = le default
                if (defaultItem) {
                    const newItem: TodoItem = {
                        id: defaultItem.id,
                        title: defaultItem.title,
                        description: defaultItem.description,
                        startDate: defaultItem.startDate,
                        frequency: defaultItem.frequency,
                        display: defaultItem.display,
                        type: "default",
                        done: Date.now(),
                    };
                    updatedItems.push(newItem);
                }
            }
        }
        else if (type === "custom") {
            const index = updatedItems.findIndex(item => item.id === id);
            updatedItems[index].done = isDone ? Date.now() : -1;
        }
        setCustomItems(updatedItems);
        localStorage.setItem("customTodoItems", JSON.stringify(updatedItems));
    };

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
                                            <tr key={item.id} onClick={() => toggleDisplay(item.id, item.type)}>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>{item.startDate}</td>
                                                <td>{item.frequency}</td>
                                                <td>
                                                    <CustomCheckbox id={`display-${item.id}`} checked={item.display === 1} onChange={() => toggleDisplay(item.id, item.type)} />
                                                </td>
                                                <td><PencilSimple size={24} className="edit" /></td>
                                                <td>
                                                    <Trash size={24} className="del" onClick={() => handleDeleteItem(index)} />
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
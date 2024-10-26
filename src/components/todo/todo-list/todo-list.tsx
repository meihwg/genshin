import React, { useState, useEffect } from "react";
import "./todo-list.css";

import { PencilSimple, PencilSimpleLine, PlusCircle, Trash } from "phosphor-react";

import TodoCard from "../todo-card/todo-card.tsx";
import { defaultTodos, DefaultTodoItem } from "./data.ts";

//TODO: Afficher "aucun élément" si la liste est vide
//TODO: remplacer le tableau pas des input pour simplifier la modification
//TODO: ajouter une croix pour fermer la modale
//TODO: créer un composant pour la croix
//TODO: mettre à jour l'affichage sur la liste dans la page
//TODO: définir une liste par défaut et l'importer

// Définit le type de chaque item dans customItems
interface TodoItem {
    title: string;
    description: string;
    startDate: string;
    frequency: number;
    display: number;
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
                title,
                description,
                startDate,
                frequency,
                display: 1
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

    const toggleDisplay = (index) => {
        const updatedItems = [...customItems];
        updatedItems[index].display = updatedItems[index].display === 1 ? 0 : 1;

        setCustomItems(updatedItems);
        localStorage.setItem("customTodoItems", JSON.stringify(updatedItems));
    };

    return (
        <>
            <section className="todo-list right">
                <div className="todo-container section-container">
                    <div className="todo">
                        <h3>Todo :</h3>
                        <TodoCard title="Daily commissions" description="Validate daily commissions by doing them or using resins" color="red" id={0} />
                        <TodoCard title="Resins" description="Use or condensate your resins" color="red" id={1} />
                        <hr />
                        <TodoCard title="Weekly bosses" description="Get your 3 weekly bosses rewards" color="blue" id={2} />
                        <TodoCard title="Reputation" description="Do your reputation requests and primes" color="blue" id={3} />
                        <hr />
                        <TodoCard title="Theater" description="Challenges the theater" color="yellow" id={4} />
                        <TodoCard title="Abysse" description="Do your abysse floors" color="yellow" id={5} />
                        <hr />
                        <span>Finished</span>
                        <div className="edit-todo" onClick={handleEditClick}>
                            <PencilSimpleLine size={24} />
                            <span>Edit your list</span>
                        </div>
                    </div>
                </div>
            </section>

            {1 && (
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
                                    {defaultTodos.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.frequency}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={item.display === 1}
                                                    onChange={() => toggleDisplay(index)}
                                                    id={`default-input-${index}`}
                                                    className="custom-checkbox"
                                                />
                                                <div className="custom-checkbox-label"></div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <span>Your custom items</span>
                        <div className="custom">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th> <th>Description</th> <th>Start date</th> <th>Frequency in days</th> <th>Display ?</th> <th></th> <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.startDate}</td>
                                            <td>{item.frequency}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={item.display === 1}
                                                    onChange={() => toggleDisplay(index)}
                                                    className="custom-checkbox"
                                                    id={`display-${index}`}
                                                />
                                                <div className="custom-checkbox-label"></div>
                                            </td>
                                            <td><PencilSimple size={24} className="edit" /></td>
                                            <td>
                                                <Trash
                                                    size={24}
                                                    className="del"
                                                    onClick={() => handleDeleteItem(index)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
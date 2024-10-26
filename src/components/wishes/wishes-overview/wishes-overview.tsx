import React from "react";
import "./wishes-overview.css";

import { ArrowElbowDownRight } from "phosphor-react";
import { ListPlus } from "phosphor-react";
import { Trash } from "phosphor-react";
import { PencilSimple } from "phosphor-react";


const WishesOverview: React.FC = () => {
    return (
        <>
            <section className="wishes-overview left">
                <div className="section-container">
                    <h3>Wishes overview</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>5☆ name</th>
                                <th>Total wishes</th>
                                <th>Date</th>
                                <th>Banner / patch</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> <td>Kinich</td> <td>18</td> <td>2024-09-20</td> <td>5.0</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                            <tr> <td>Kaedehara Kazuha</td> <td>63</td> <td>2024-09-02</td> <td>5.0</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                            <tr> <td>Kaedehara Kazuha</td> <td>81</td> <td>2024-09-01</td> <td>5.0</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                            <tr> <td>Furina</td> <td>9</td> <td>2024-08-25</td> <td>4.8</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                            <tr className="text-red"> <td><ArrowElbowDownRight size={15} /> Diluc</td> <td>18</td> <td>2024-08-25</td> <td>4.8</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                            <tr className="text-blue"> <td>Diluc</td> <td>18</td> <td>2024-08-25</td> <td>Perma</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                            <tr> <td>Furina</td> <td>75</td> <td>2024-08-20</td> <td>4.8</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                            <tr className="text-red"> <td><ArrowElbowDownRight size={15} /> Qiqi</td> <td>22</td> <td>2024-08-15</td> <td>4.8</td> <td className="edit-pull" title="Edit this pull"><PencilSimple size={15} /></td> <td className="del-pull" title="Delete this pull"><Trash size={15} /></td></tr>
                        </tbody>
                    </table>

                    <div className="add-wish">
                        <ListPlus size={24} />
                        <span>Add a pull</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WishesOverview;
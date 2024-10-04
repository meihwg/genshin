import React from "react";
import "./wishes-overview.css";

import { ArrowElbowDownRight } from "phosphor-react";


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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kinich</td> <td>18</td> <td>2024-09-20</td> <td>5.0</td>
                            </tr>
                            <tr>
                                <td>Kaedehara Kazuha</td> <td>63</td> <td>2024-09-02</td> <td>5.0</td>
                            </tr>
                            <tr>
                                <td>Kaedehara Kazuha</td> <td>81</td> <td>2024-09-01</td> <td>5.0</td>
                            </tr>
                            <tr>
                                <td>Furina</td> <td>9</td> <td>2024-08-25</td> <td>4.8</td>
                            </tr>
                            <tr className="text-red">
                                <td><ArrowElbowDownRight size={15} /> Diluc</td> <td>18</td> <td>2024-08-25</td> <td>4.8</td>
                            </tr>
                            <tr className="text-blue">
                                <td>Diluc</td> <td>18</td> <td>2024-08-25</td> <td>Perma</td>
                            </tr>
                            <tr>
                                <td>Furina</td> <td>75</td> <td>2024-08-20</td> <td>4.8</td>
                            </tr>
                            <tr className="text-red"> 
                                <td><ArrowElbowDownRight size={15} /> Qiqi</td> <td>22</td> <td>2024-08-15</td> <td>4.8</td>
                            </tr>

                        </tbody> 
                    </table>
                </div>
            </section>
        </>
    );
};

export default WishesOverview;
import React, { useState } from 'react';
import "./wishlist-card.css";

import { ArrowElbowDownRight } from "phosphor-react";
import CustomCheckbox from '../../custom-checkbox/custom-checkbox.tsx';

interface WishlistCardProps {
    id: number;
    title: string;
    source: number;
    goal: number;
    date?: string;
    type: string; // w: weapon, c: character + 4/5 star
}

const WishlistCard: React.FC<WishlistCardProps> = ({ title, source, goal, date, type, id }) => {
    const [isChecked, setIsChecked] = useState(false);

    let color: string = "yellow";
    let avgpity: number = 0;
    let totpity: number = 0;
    let s: string = "None";
    let g: string = "None";

    switch (type) {
        case "c4":
            s = source > 0 ? "C" + (source - 1) : "None";
            g = goal > 0 ? "C" + (goal - 1) : "None";
            break;
        case "w4":
            s = source > 0 ? "R" + source : "None";
            g = goal > 0 ? "R" + goal : "None";
            break;
        case "c5":
            s = source > 0 ? "C" + (source - 1) : "None";
            g = goal > 0 ? "C" + (goal - 1) : "None";
            color = "red";
            avgpity = 77;
            totpity = 90;
            break;
        case "w5":
            s = source > 0 ? "R" + source : "None";
            g = goal > 0 ? "R" + goal : "None";
            color = "blue";
            avgpity = 65;
            totpity = 80;
    }

    const handleCardClick = () => setIsChecked(!isChecked);

    return (
        <div className={`wishlist-card ${color}`} onClick={handleCardClick}>
            <div className="wishlist-checkbox checkbox">
                <CustomCheckbox id={`input-${id}`} checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            </div>
            <div className="wishlist-content">
                <div className="title"> 
                    <span>{title}</span>
                    {date && <p><ArrowElbowDownRight size={15} /> {date}</p>}
                </div>
                <p>
                    <b>{s}</b> to <b>{g}</b>
                </p>
                {(avgpity > 0 && totpity > 0) && (
                    <>
                        <div className="row">
                            <div className="icon-interfate"></div>
                            <p>~<b>{(goal - source) * avgpity * 1.5}</b> (max : <b>{(goal - source) * totpity * 2}</b>)</p>
                        </div>
                        <div className="row">
                            <div className="icon-primo"></div>
                            <p>~<b>{(goal - source) * avgpity * 1.5 * 160}</b> (max : <b>{(goal - source) * totpity * 2 * 160}</b>)</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default WishlistCard;

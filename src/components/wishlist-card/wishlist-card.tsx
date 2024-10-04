import React from "react";
import "./wishlist-card.css";

import { ArrowElbowDownRight } from "phosphor-react";

interface WishlistCardProps {
    title: string;
    source: string;
    goal: string;
    date?: string;
    color: string;
    n: number;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ title, color, source, goal, date, n }) => {
    return (
        <>
            <div className= {`wishlist-card ${color}`}>
                <div className="wishlist-checkbox">
                    <input type="checkbox" />
                </div>
                <div className="wishlist-content">
                    <div className="title"> <span> {title} </span> <p>{date ? date : ""}</p> </div>
                    <p>
                        <b>{source === "0" ? "None" : source}</b> to <b>{goal}</b>
                    </p>
                    <p>
                        ~ <b>{n*77*1.5}</b> wishes (max : <b>{n*90*2}</b>)
                    </p>
                </div>
            </div>
        </>
    );
};

export default WishlistCard;
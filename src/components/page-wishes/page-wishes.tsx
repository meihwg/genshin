import React from "react";
import "./page-wishes.css";

import WishesStats from "../wishes-stats/wishes-stats.tsx";
import Wishlist from "../wishlist/wishlist.tsx";

const PageWishes: React.FC = () => {
    return (
        <>
            <div className="page-wishes page">
                <div className="left">
                    <WishesStats />
                </div>
                <Wishlist />
            </div>
        </>
    );
};

export default PageWishes;


import React from "react";
import "./page-wishes.css";

import WishesStats from "../../wishes-stats/wishes-stats.tsx";
import Wishlist from "../../wishlist/wishlist.tsx";
import WishesOverview from "../../wishes-overview/wishes-overview.tsx";

const PageWishes: React.FC = () => {
    return (
        <>
            <div className="page-title"><h2>Wishes tracker</h2></div>
            <div className="page-wishes page">
                <div className="left">
                    <WishesStats />
                    <WishesOverview />
                </div>
                <Wishlist />
            </div>
        </>
    );
};

export default PageWishes;


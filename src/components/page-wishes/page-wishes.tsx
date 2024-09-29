import React from "react";
import "./page-wishes.css";

import WishesStats from "../wishes-stats/wishes-stats.tsx";

const PageWishes: React.FC = () => {
    return (
        <>
            <div className="page-wishes">
                <WishesStats />
            </div>
        </>
    );
};

export default PageWishes;


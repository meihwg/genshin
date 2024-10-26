import React from "react";
import "./wishlist.css";

import WishlistCard from "../wishlist-card/wishlist-card.tsx";

import { PencilSimpleLine } from "phosphor-react";

const Wishlist: React.FC = () => {
    return (
        <>
            <section className="wishlist right">
                <div className="wishlist-container section-container">
                    <div className="wishlist-list">
                        <h3>Wishlist</h3>

                        <span>Coming soon...</span>
                        <WishlistCard title="Xilonen" source={0} goal={3} date="2024-10-09" type="c5" id={0} />

                        <hr />

                        <span>All</span>
                        <WishlistCard title="Zhongli" source={0} goal={1} type="c5" id={1}/>
                        <WishlistCard title="Homa" source={0} goal={1} type="w5" id={2}/>
                        <WishlistCard title="Faruzan" source={3} goal={7} type="c4" id={3}/>

                        <hr />
                    </div>

                    <div className="edit-wishlist">
                        <PencilSimpleLine size={24} />
                        <span>Edit your list</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wishlist;
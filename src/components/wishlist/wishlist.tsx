import React from "react";
import "./wishlist.css";

import WishlistCard from "../wishlist-card/wishlist-card.tsx";

import { PencilSimpleLine } from "phosphor-react";

const Wishlist: React.FC = () => {
    return (
        <>
            <section className="wishlist right">
                <div className="wishlist-container section-container">
                    <div className="wishlist">
                        <h3>Wishlist</h3>

                        <span>Coming soon...</span>
                        <WishlistCard title="Xilonen" color="yellow" source="0" goal="C2" date="2024-10-09" n={3} />

                        <hr />

                        <span>All</span>
                        <WishlistCard title="Homa" color="red" source="0" goal="R1" n={1} />
                        <WishlistCard title="Faruzan" color="blue" source="C2" goal="C6" n={4} />
                        <WishlistCard title="Zhongli" color="blue" source="0" goal="C0" n={1} />

                        <hr />

                        <div className="edit-wishlist">
                            <PencilSimpleLine size={24} />
                            <span>Edit your list</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wishlist;
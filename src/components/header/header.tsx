import React from "react";
import "./header.css";

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="header_title">
                    <div className="header_logo"></div>
                    <h1>Title</h1>
                </div>
                <nav className="header_nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Planner</a></li>
                        <li><a href="#">Wishes</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </header>
            <div className="header-space"></div>
        </>
    );
};

export default Header;
import React from "react";
import "./header.css";

import { HouseLine } from "phosphor-react";
import { CalendarBlank } from "phosphor-react";
import { Sparkle } from "phosphor-react";
import { Gear } from "phosphor-react";

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="header_title">
                    <div className="header_logo"></div>
                    <h1>La Taverne de Jade</h1>
                </div>
                <nav className="header_nav">
                    <ul>
                        <li><a href="#"> <HouseLine className="icon" size={30} /> Home</a></li>
                        <li><a href="#"> <CalendarBlank className="icon" size={30} /> Planner</a></li>
                        <li><a href="#"> <Sparkle className="icon" size={30} /> Wishes</a></li>
                        <li><a href="#"> <Gear className="icon" size={30} /> Settings</a></li>
                    </ul>
                </nav>
            </header>
            <div className="header-space"></div>
        </>
    );
};

export default Header;
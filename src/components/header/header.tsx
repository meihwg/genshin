import React from "react";
import "./header.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import PageHome from "../page-home/page-home.tsx";
import PagePlanner from "../page-planner/page-planner.tsx";

import { HouseLine } from "phosphor-react";
import { CalendarBlank } from "phosphor-react";
import { Sparkle } from "phosphor-react";
import { Gear } from "phosphor-react";

const Header: React.FC = () => {
    return (
        <Router>
            <header className="header">
                <div className="header_title">
                    <div className="header_logo"></div>
                    <h1>La Taverne de Jade</h1>
                </div>
                <nav className="header_nav">
                    <ul>
                        <li><Link to="/"> <HouseLine className="icon" size={30} /> Home</Link></li>
                        <li><Link to="/planner"> <CalendarBlank className="icon" size={30} /> Planner</Link></li>
                        <li><Link to="/"> <Sparkle className="icon" size={30} /> Wishes</Link></li>
                        <li><Link to="/"> <Gear className="icon" size={30} /> Settings</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="header-space"></div>
            <Routes>
                <Route path="/"element={<PageHome />} />
                <Route path="/planner" element={<PagePlanner />} />
            </Routes>
        </Router>
    );
};

export default Header;
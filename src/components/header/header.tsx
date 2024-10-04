import React from "react";
import "./header.css";

import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import PageHome from "../pages/page-home/page-home.tsx";
import PageAdvancement from "../pages/page-advancement/page-advancement.tsx";
import PagePlanner from "../pages/page-planner/page-planner.tsx";
import PageWishes from "../pages/page-wishes/page-wishes.tsx";
import PageSettings from "../pages/page-settings/page-settings.tsx";

import { HouseLine } from "phosphor-react";
import { CalendarBlank } from "phosphor-react";
import { Sparkle } from "phosphor-react";
import { Gear } from "phosphor-react";
import { ChartBar } from "phosphor-react";

const Header: React.FC = () => {
    return (
        //<Router basename="/genshin">
        <Router>
            <header className="header">
                <div className="header_title">
                    <div className="header_logo"></div>
                    <h1>La Taverne de Jade</h1>
                </div>
                <nav className="header_nav">
                    <ul>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <HouseLine className="icon" size={30} /> Home</NavLink>
                        </li>
                        <li> <NavLink to="/advancement" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <ChartBar className="icon" size={30} /> Advancement</NavLink>
                        </li>
                        <li><NavLink to="/planner" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <CalendarBlank className="icon" size={30} /> Planner</NavLink>
                        </li>
                        <li><NavLink to="/wishes" end className={({ isActive }) => isActive ? 'active' : ''}> 
                            <Sparkle className="icon" size={30} /> Wishes</NavLink>
                        </li>
                        <li><NavLink to="/settings" end className={({ isActive }) => isActive ? 'active' : ''}> 
                            <Gear className="icon" size={30} /> Settings</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="header-space"></div>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/advancement" element={<PageAdvancement />} />
                <Route path="/planner" element={<PagePlanner />} />
                <Route path="/wishes" element={<PageWishes />} />
                <Route path="/settings" element={<PageSettings />} />
            </Routes>
        </Router>
    );
};

export default Header;
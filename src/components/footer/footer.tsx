import React from "react";
import "./footer.css";

import { GithubLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { DiscordLogo } from "phosphor-react";
import { Envelope } from "phosphor-react";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="col">
                            <h3>About me</h3>
                            <a><GithubLogo className="icon" size={24} /> Github</a> 
                            <a><TwitterLogo className="icon" size={24} /> Twitter</a> 
                            <a><DiscordLogo className="icon" size={24} /> Discord</a> 
                            <a><Envelope className="icon" size={24} /> Mail : blabla</a> 
                        </div>
                        <div className="col">
                            <h3>Developed by</h3>
                            <a>Mei</a>
                            <h4>With the help of</h4>
                            <a>Erlow</a>
                        </div>
                        <div className="col">
                            <p>Genshin Impact™ is a registered trademark of hoYoverse Co., Ltd. This site is not affiliated with or endorsed by hoYoverse. Images and data © hoYoverse Co., Ltd.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
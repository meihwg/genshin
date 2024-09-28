import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="col">
                            <h3>About me</h3>
                            <p>[icone] Github</p>
                            <p>[icone] Twitter</p>
                            <p>[icone] Discord</p>
                            <p>[icone] Mail : blabla</p>
                        </div>
                        <div className="col">
                            <h3>Developed by</h3>
                            <p>Mei</p>
                            <h4>With the help of</h4>
                            <p>Erlow</p>
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
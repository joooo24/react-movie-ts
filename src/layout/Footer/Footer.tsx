import React from 'react';
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer>
                {/* <h2 className="blind">푸터</h2> */}
                <div className="footer-inner">
                    <div className="footer-menu">
                        <div>
                            <h3>Frontend</h3>
                            <ul>
                                <li><a href="#">Vue.js</a></li>
                                <li><a href="#">Nuxt.js</a></li>
                                <li><a href="#">React.js</a></li>
                                <li><a href="#">Next.js</a></li>
                                <li><a href="#">TypeScript</a></li>
                                <li><a href="#">JavaScript</a></li>
                                <li><a href="#">jQuery</a></li>
                                <li><a href="#">HTML5</a></li>
                                <li><a href="#">CSS3</a></li>
                                <li><a href="#">SCSS</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Backend </h3>
                            <ul>
                                <li><a href="#">Node.js</a></li>
                                <li><a href="#">MongoDB</a></li>
                                <li><a href="#">Mongoose</a></li>
                                <li><a href="#">Express</a></li>
                                <li><a href="#">NoSQL</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Prototyping</h3>
                            <ul>
                                <li><a href="#">Figma</a></li>
                                <li><a href="#">Adobe XD</a></li>
                                <li><a href="#">Zeplin</a></li>
                                <li><a href="#">Adobe Photoshop</a></li>
                                <li><a href="#">Adobe Illustrator</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Communication</h3>
                            <ul>
                                <li><a href="#">Git</a></li>
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Slack</a></li>
                                <li><a href="#">JIRA</a></li>
                            </ul>
                        </div>
                    </div>
                    <address className="footer-right">
                        2024 주현정 Portfolio. React Typescript.<br />All Right Reserved
                    </address>
                </div>

        </footer>
    );
};

export default Footer;

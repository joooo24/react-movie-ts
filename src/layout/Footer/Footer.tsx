import React from 'react';
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-menu">
                <div>
                    <h3>Frontend</h3>
                    <ul>
                        <li>React.js</li>
                        <li>React Query</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>SCSS</li>
                    </ul>
                </div>
                <div>
                    <h3>Prototyping</h3>
                    <ul>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>Zeplin</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                    </ul>
                </div>
                <div>
                    <h3>Project Management</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Slack</li>
                        <li>JIRA</li>
                    </ul>
                </div>

            </div>
            <address className="footer-right">
                주현정 MovieApp Portfolio. React TypeScript.<br />2024 All Right Reserved
            </address>
        </footer>
    );
};

export default Footer;

import React from "react";
import './Header.css';

export default function Header(props) {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><a className="about" href="#" onClick={() => props.onClick("about")}>ABOUT</a></li>
                    <li><a className="new" href="#" onClick={() => props.onClick("new")}>+ NEW GAME</a></li>
                </ul>
            </nav>
            <div>
                <h1>HOT or COLD</h1>
            </div>
        </div>
    );
}
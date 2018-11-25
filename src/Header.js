import React from "react";

export default function Header(props) {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><a className="about" href="#">ABOUT</a></li>
                    <li><a className="new" href="#">+ NEW GAME</a></li>
                </ul>
            </nav>
            <div>
                <h1>HOT or COLD</h1>
            </div>
        </div>
    );
}
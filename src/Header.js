import React from "react";

export default function Header(props) {
    return (
        <div class="header">
            <nav>
                <ul>
                    <li><a class="about" href="#">ABOUT</a></li>
                    <li><a class="new" href="#">+ NEW GAME</a></li>
                </ul>
            </nav>
            <div>
                <h1>HOT or COLD</h1>
            </div>
        </div>
    );
}
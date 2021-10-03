import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="navlink-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

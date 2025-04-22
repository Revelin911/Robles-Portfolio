//appears on multiple pages
// import { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                        </li>
                    <li>
                        <Link to="/projects">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                        </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
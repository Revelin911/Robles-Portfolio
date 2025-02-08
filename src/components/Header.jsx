//appears on multiple pages
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li>About Me</li>
                    <Link to='/projects'>Portfolio</Link>                    <li>Contact</li>
                    <Link to='/'>Home</Link>                    <li>Contact</li>
                    <Link to='/about'>About</Link>                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;
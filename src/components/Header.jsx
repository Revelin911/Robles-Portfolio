//appears on multiple pages
import { useState } from 'react';


const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};
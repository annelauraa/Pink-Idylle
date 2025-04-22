import React from 'react';
import logo from '../assets/LOGO.png'; // Assuming logo.png is in the assets folder

const Header = () => {
    return (
        <div className='header'>
            {/* Logo */}
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            {/* Navigation */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
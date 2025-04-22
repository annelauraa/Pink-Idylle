import React from 'react';
import { Link } from 'react-scroll';
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
                    <li>
                        <Link to="/" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="about-me" smooth={true} duration={500}>
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
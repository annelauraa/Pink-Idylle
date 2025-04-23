import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/IMG/LOGO.png';
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="">
            {!isMobile ? (
                <div className="header flex items-center justify-between">
                    {/* Logo */}
                    <img src={logo} alt="Logo" className="logo" />

                    {/* Navigation */}
                    <nav>
                        <ul>
                            <li><Link to="home" smooth duration={500}>Home</Link></li>
                            <li><Link to="skills" smooth duration={500}>Skills</Link></li>
                            <li><Link to="projects" smooth duration={500}>Projects</Link></li>
                            <li><Link to="about-me" smooth duration={500}>About me</Link></li>
                            <li><Link to="contact" smooth duration={500}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className={`header-mobile  py-3 ${menuOpen ? '':'px-5'}`} >
                    {/* Top bar with logo and hamburger */}
                    <div className="flex justify-between items-center">
                        <img src={logo} alt="Logo" className="h-[5em]" />
                        <button onClick={toggleMenu} className="text-3xl shadow-md fixed right-5 bg-[var(--primary-color)] w-12 h-12 rounded-full text-white z-9">
                            ☰
                        </button>
                    </div>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <nav className=" bg-[var(--primary-color)] p-4  rounded shadow-md fixed top-0 z-9 w-full pb-10">

                            <ul className="flex flex-col gap-3 text-lg relative w-full text-center">
                                <button onClick={closeMenu} className='w-full flex items-center justify-end'><IoMdClose className='text-2xl'/></button>
                                <li><Link to="home" smooth duration={500} onClick={toggleMenu}>Home</Link></li>
                                <li><Link to="skills" smooth duration={500} onClick={toggleMenu}>Skills</Link></li>
                                <li><Link to="projects" smooth duration={500} onClick={toggleMenu}>Projects</Link></li>
                                <li><Link to="about-me" smooth duration={500} onClick={toggleMenu}>About me</Link></li>
                                <li><Link to="contact" smooth duration={500} onClick={toggleMenu}>Contact</Link></li>
                            </ul>
                        </nav>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;

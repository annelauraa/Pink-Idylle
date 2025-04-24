import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import logo from '../assets/IMG/LOGO.png';
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showBurgerButton, setShowBurgerButton] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowBurgerButton(true);  // Afficher le bouton burger quand l'utilisateur scroll
            } else {
                setShowBurgerButton(false); // Cacher le bouton burger quand l'utilisateur est en haut
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="">
            {/* Version non-mobile */}
            {!isMobile ? (
                <div className="header flex items-center justify-between ">
                    {/* Logo */}
                    <img src={logo} alt="Logo" className="logo" />

                    {/* Navigation */}

                    <nav className='nav-in-scroll'>
                        <ul>
                            <li><Link to="home" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300 active">Home</Link></li>
                            <li><Link to="skills" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Skills</Link></li>
                            <li><Link to="projects" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Projects</Link></li>
                            <li><Link to="about-me" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">About me</Link></li>
                            <li><Link to="contact" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </nav>


                    {/* Affichage du bouton burger lors du scroll */}
                    {showBurgerButton && (

                        <div>
                            {!menuOpen && (
                                <button
                                    onClick={toggleMenu}
                                    className="text-3xl shadow-md fixed top-5  right-5 bg-[var(--primary-color)] w-14 h-14 rounded-full text-white z-9 flex items-center justify-center cursor-pointer"
                                >
                                    ☰
                                </button>
                            )}
                            {menuOpen && (
                                <button
                                    onClick={toggleMenu}
                                    className="text-3xl shadow-md fixed top-5  right-5 bg-[var(--primary-color)] w-14 h-14 rounded-full text-white z-9 flex items-center cursor-pointer justify-center"
                                >
                                    <IoMdClose 
                                    className='cursor-pointer text-xl font-bold'
                                     />
                                </button>
                            )}
                        </div>

                    )}

                    {/* Menu mobile fixe */}
                    {menuOpen && showBurgerButton  && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className=" fixed top-5 right-15 z-9 pb-10"
                        >
                            <nav>
                                <ul>
                                    <li><Link to="home" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Home</Link></li>
                                    <li><Link to="skills" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Skills</Link></li>
                                    <li><Link to="projects" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Projects</Link></li>
                                    <li><Link to="about-me" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">About me</Link></li>
                                    <li><Link to="contact" smooth duration={500} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300"> Contact</Link></li>
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </div>
            ) : (
                // Version mobile
                <div className={`header-mobile py-3 ${menuOpen ? '' : 'px-5'}`} >
                    {/* Top bar with logo and hamburger */}
                    <div className="flex justify-between items-center">
                        <img src={logo} alt="Logo" className="h-[5em]" />
                        <button onClick={toggleMenu} className="text-3xl shadow-md fixed right-5 bg-[var(--primary-color)] w-12 h-12 rounded-full text-white z-9">
                            ☰
                        </button>
                    </div>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <>
                            {/* BACKDROP */}
                            <motion.div
                                onClick={closeMenu}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-8"
                            />

                            {/* MENU AVEC ANIMATION DE DESCENTE */}
                            <motion.nav
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="bg-[var(--primary-color)] p-4 rounded shadow-md fixed top-0 z-9 w-full pb-10"
                            >
                                <ul className="flex flex-col gap-3 text-lg relative w-full text-center">
                                    <button onClick={closeMenu} className='w-full flex items-center justify-end'>
                                        <IoMdClose className='text-2xl' />
                                    </button>
                                    <li><Link to="home" smooth duration={500} onClick={toggleMenu} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Home</Link></li>
                                    <li><Link to="skills" smooth duration={500} onClick={toggleMenu} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Skills</Link></li>
                                    <li><Link to="projects" smooth duration={500} onClick={toggleMenu} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Projects</Link></li>
                                    <li><Link to="about-me" smooth duration={500} onClick={toggleMenu} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">About me</Link></li>
                                    <li><Link to="contact" smooth duration={500} onClick={toggleMenu} spy={true} activeClass="active" offset={-200}   className="transition-colors duration-300">Contact</Link></li>
                                </ul>
                            </motion.nav>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;

import React from 'react';
import {My_Firstname,My_Job, } from '../constant';
import Hero_image from '../assets/IMG/HERO.png'
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-scroll';
const Hero = () => {
    return (
        <div id='hero' className='hero'>
            
            {/* Hero text */}
            <div className='hero-text'>
                <h1><span className='hello-text'>Hello,</span> <br /><span className='adelia'>I'm</span> {My_Firstname}</h1>
                <p className='job-title'>{My_Job}</p>
                {/* <p>Explore my work and get to know me better.</p> */}
                <div className='hero-buttons'>
                    <Link to="contact" smooth={true} duration={600}>
                    <button className='btn-primary'>Contact me <MdArrowForwardIos /></button>
                    </Link>
                </div>
            </div>

            {/* Hero image */}
            <div className='hero-image'>
                <img src={Hero_image} alt="Hero"/>
            </div>
        </div>
    );
};

export default Hero;
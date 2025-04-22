import React from 'react';
import {My_Firstname,My_Job, } from '../constant';
import Hero_image from '../assets/HERO.png'
import { MdEmail } from 'react-icons/md';

const Hero = () => {
    return (
        <div id='hero' className='hero'>
            
            {/* Hero text */}
            <div className='hero-text'>
                <h1><span className='text-[var(--primary-color)]'>Hello,</span> <br /><span className='adelia'>I'm</span><span className='text-in-highlight'></span> {My_Firstname}</h1>
                <p className='job-title'>{My_Job}</p>
                {/* <p>Explore my work and get to know me better.</p> */}
                <div className='hero-buttons'>
                    <button className='btn-primary'>Contact me <MdEmail /> </button>
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
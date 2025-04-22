import React from 'react';
import {} from '../constant';
import Hero_image from '../assets/HERO.png'

const Hero = () => {
    return (
        <div>
            {/* Hero image */}
            <div>
                <img src={Hero_image} alt="Hero"/>
            </div>
            {/* Hero text */}
            <div>
                <h1>Hello <span>I'm</span> Laingo</h1>
                <p></p>
                <p>Explore my work and get to know me better.</p>
                <div>
                    <button className='btn-primary'>Contact</button>
                    <button className='btn-secondary'>Resumé</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
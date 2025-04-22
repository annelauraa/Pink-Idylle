import React from 'react';
import Profil from '../assets/IMG/PROFIL.png';

const About = () => {
    return (
        <div id='about-me' className='about'>
            {/*Image profil*/}
            <div>
                <img src={Profil} alt="profil" />
            </div>
            {/*Description*/}
            <div>
                <h2>Who Am I?</h2>
                <p>I am LaingoTsiory Anne Laura, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis at ullam eos accusamus voluptatem aut pariatur quos dolore quidem magnam modi cum, voluptas totam explicabo, fuga cumque! Consequatur, excepturi totam. </p>
                <button>View my CV</button>
            </div>
        </div>
    );
};

export default About;
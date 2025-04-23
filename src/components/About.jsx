import React from 'react';
import Profil from '../assets/IMG/PROFIL.png';
import { MdArrowForwardIos } from 'react-icons/md';
import { techLogos } from '../constant';

const About = () => {
    const my_socials = [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/laingotsiory-anne-laura-0520a1276/',
            icon: techLogos.LinkedIn
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/tsiory.laura/',
            icon: techLogos.Facebook
        },
        {
            name: 'WhatsApp',
            link: 'https://wa.me/+261332570863',
            icon: techLogos.Whatsapp
        },
        {
            name: 'GitHub',
            link: 'https://github.com/annelauraa',
            icon: techLogos.GitHub
        },
        {
            name: 'Pinterest',
            link: 'https://fr.pinterest.com/annelauraa20/',
            icon: techLogos.Pinterest
        },


    ];

    return (
        <div id='about-me' className='about'>
            {/*Image profil*/}
            <div >
                <img src={Profil} alt="profil" className='profil' />
            </div>
            {/*Description*/}
            <div>
                <h2>About me</h2>
                <p className="text-md leading-relaxed ">
                    Hey there! I’m <strong>Laingo Tsiory</strong>, a creative <strong>frontend developer</strong> and <strong>digital designer</strong> with a passion for clean code, smooth interfaces, and visual storytelling. I build websites that don’t just work — they feel great to use.
                    <br />

                    My toolkit includes <strong>React</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>, with animations powered by <strong>Framer Motion</strong>. I love turning concepts into pixel-perfect, responsive, and fast-loading experiences — whether it's a landing page, a portfolio, or a full web app.
                  <br />
                    Design is more than just visuals to me — it's about how people experience the web. That’s why I also work on graphics and content, to make sure every project I touch is both beautiful and meaningful.
                </p>
                <p className="text-md leading-relaxed">
                    Based in Madagascar, I work remotely with clients and collaborators around the world. Let’s connect and bring your ideas to life!
                </p>
                <div className='social-media'>
                    {
                        my_socials.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center social-link ml-[-15px] w-[45px] h-[45px] bg-white rounded-full shadow-md   hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer'>
                                <img src={social.icon} alt={social.name} className='social-icon' title={social.name} />
                            </a>
                        ))
                    }
                </div>
                <button className='btn-primary'>View my CV <MdArrowForwardIos /></button>
            </div>
        </div>
    );
};

export default About;
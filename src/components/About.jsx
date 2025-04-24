import React, { useState } from 'react';
import Profil from '../assets/IMG/PROFIL.png';
import { MdArrowForwardIos, MdClose } from 'react-icons/md';
import { techLogos } from '../constant';
import CV from './CurriculumVitae'
const About = () => {
    const [showFullText, setShowFullText] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleText = () => setShowFullText(!showFullText);
    const toggleModal = () => setShowModal(!showModal);

    const my_socials = [
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/laingotsiory-anne-laura-0520a1276/', icon: techLogos.LinkedIn },
        { name: 'Facebook', link: 'https://www.facebook.com/tsiory.laura/', icon: techLogos.Facebook },
        { name: 'WhatsApp', link: 'https://wa.me/+261332570863', icon: techLogos.Whatsapp },
        { name: 'GitHub', link: 'https://github.com/annelauraa', icon: techLogos.GitHub },
        { name: 'Pinterest', link: 'https://fr.pinterest.com/annelauraa20/', icon: techLogos.Pinterest },
    ];

    const shortText = "Hey there! I’m Laingo Tsiory, a creative frontend developer and digital designer with a passion for clean code, smooth interfaces, and visual storytelling...";
    const fullText = `Hey there! I’m Laingo Tsiory, a creative frontend developer and digital designer with a passion for clean code, smooth interfaces, and visual storytelling. I build websites that don’t just work — they feel great to use.
    
    My toolkit includes React, Vite, and Tailwind CSS, with animations powered by Framer Motion. I love turning concepts into pixel-perfect, responsive, and fast-loading experiences — whether it's a landing page, a portfolio, or a full web app.

    Design is more than just visuals to me — it's about how people experience the web. That’s why I also work on graphics and content, to make sure every project I touch is both beautiful and meaningful.

    Based in Madagascar, I work remotely with clients and collaborators around the world. Let’s connect and bring your ideas to life!`;

    return (
        <div id='about-me' className='about relative'>
            <div>
                <img src={Profil} alt="profil" className='profil' />
            </div>
            <div>
                <h2>About me</h2>
                <p className="text-md leading-relaxed block md:hidden">
                    {showFullText ? fullText : shortText}
                    <button onClick={toggleText} className='text-blue-600 underline ml-2'>
                        {showFullText ? 'Show less' : 'Read more'}
                    </button>
                </p>
                <p className="text-md leading-relaxed hidden md:block whitespace-pre-line">
                    {fullText}
                </p>

                <div className='social-media mt-4 flex gap-3 flex-wrap'>
                    {my_socials.map((social, index) => (
                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                            className='flex items-center justify-center social-link ml-[-20px] w-[50px] h-[50px] bg-white rounded-full shadow-md   hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer'>
                            <img src={social.icon} alt={social.name} className='w-[40px] h-[40px] ' title={social.name} />
                        </a>
                    ))}
                </div>

                <button onClick={toggleModal} className='btn-primary mt-4'>
                    View my CV <MdArrowForwardIos />
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-3xl">
                        <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl cursor-pointer">
                            <MdClose />
                        </button>
                        <div className="h-full overflow-y-auto ">
                        <CV/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { MdArrowForwardIos } from 'react-icons/md';

const Skills = () => {

    const skillsData = [
        {
            title: "Web Design",
            description:
                "I create intuitive and visually appealing designs using tools like Figma, Photoshop, and GIMP. My design style focuses on usability, color harmony, and modern UI principles.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",           // Figma
                "https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_gnome.svg",            // GIMP
                "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg", // Photoshop
            ],
        },

        {
            title: "Web Development",
            description:
                "I build responsive web applications with React, Tailwind CSS, and modern JS frameworks. I also handle backend development using Express and PostgreSQL.",
            images: [
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",           // React
                "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",    // Tailwind CSS
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",      // JavaScript
                "https://cdn.worldvectorlogo.com/logos/express-109.svg",       // Express (black by design)
                "https://cdn.worldvectorlogo.com/logos/postgresql.svg",        // PostgreSQL
            ],
        },

        {
            title: "Content Writing",
            description:
                "I write clear, engaging content for blogs, websites, and social media. I use SEO strategies and storytelling to connect with audiences effectively.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",    // WordPress
                "https://cdn.worldvectorlogo.com/logos/notion-2.svg",          // Notion
                "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",     // Markdown
            ],
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id='skills' className='skills w-full'>
            <h2 className='pt-15'>My Skills</h2>
            <div className='sm:w-full max-sm:w-full'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="SkillsSwiper"
                >
                    {skillsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                key={activeIndex === index ? `active-${index}` : `inactive-${index}`} // Force re-animation
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5 }}
                                className="swiper-slide-skills"
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className='techstack'>
                                    {item.images.map((img, i) => (
                                        <div key={i} className='flex items-center justify-center social-link ml-[-15px] w-[40px] h-[40px] bg-white rounded-full shadow-md   hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer'>
                                            <img
                                                src={img}
                                                alt='...'
                                                title={`${item.title}`}
                                                className="w-[30px] h-[30px] rounded-4xl"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='view-my-work-button'>
                <button className='btn-primary'>
                    <Link to="projects" smooth={true} duration={500}>
                        View my works
                    </Link>
                    <MdArrowForwardIos />
                </button>
                {/* <button className='btn-secondary'>You have projects for me</button> */}
            </div>

        </div>
    );
};

export default Skills;

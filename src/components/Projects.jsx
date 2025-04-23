import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import img1 from '../assets/IMG/projects-representation-image/Project1.webp'
import img2 from '../assets/IMG/projects-representation-image/Project2.png'
import img3 from '../assets/IMG/projects-representation-image/Project3.png'
import { techLogos } from '../constant'
// Le tableau des projets
const projects = [
    {
        title: 'KOROBO',
        description: "KOROBO is a web app for managing and tracking solar maintenance. It helps users monitor system performance, schedule tasks, and generate reports. With real-time data and predictive features, KOROBO ensures efficient solar system operations, minimizing downtime and maximizing sustainability",
        github: 'https://github.com/annelauraa/korobo',
        technologies: ['React', 'Tailwind', 'Express', 'PostgreSQL', 'Figma'],
        image: img1
    },
    {
        title: 'Portfolio Laingo',
        description: "Portfolio Laingo is a personal portfolio built with React, Vite, and Tailwind CSS. It showcases my web development projects, graphic designs, and writing, providing an interactive and responsive experience. The portfolio highlights my skills and expertise in frontend development and design.",
        github: 'https://github.com/annelauraa/portfolio',
        technologies: ['React', 'Vite', 'Tailwind', 'Figma'],
        image: img2
    },
    {
        title: 'Mail HUB',
        description: "Mail HUB is a web platform designed for bulk email sending. It allows users to efficiently manage and send large volumes of emails, with features for email tracking, scheduling, and automation. Ideal for businesses and marketers, Mail HUB streamlines email campaigns and enhances communication.",
        github: 'https://github.com/annelauraa/roymada',
        technologies: ['VueJS', 'Bootstrap', 'Symfony', 'MySQL', 'Figma'],
        image: img3
    }
]

const Projects = () => {
    const [currentImage, setCurrentImage] = useState(projects[1].image)

    const handleSlideChange = (swiper) => {
        const nextProject = projects[(swiper.realIndex + 1) % projects.length]
        setCurrentImage(nextProject.image)
    }

    return (
        <div id='projects' className='projects'>
            <h2>My Achievements</h2>

            <div className="main-content">
                {/* Affichage image dynamique */}
                <div className="project-image">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage} // permet de déclencher le changement d'image
                            src={currentImage}
                            alt="Aperçu projet"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="current-project-image"
                        />
                    </AnimatePresence>
                </div>

                {/* Le swiper */}
                <div className="project-item-container ">
                    <Swiper
                        direction="vertical"
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Mousewheel, Autoplay]}
                        onSlideChange={handleSlideChange}
                        className="h-full"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide className='Swiper-Slide-Projects' key={index}>
                                <div className="main-container">
                                    <h3 className="">{project.title} ~ </h3>
                                    <p className="">{project.description}</p>
                                    <div className=" techstack ">
                                        {project.technologies.map((tech, idx) => (
                                            <div key={idx}>
                                                <img src={techLogos[tech]} alt={tech} title={tech} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='Project-Github-Link-button'>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            Github Link
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Projects

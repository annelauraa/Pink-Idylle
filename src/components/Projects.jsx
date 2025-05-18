import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import img1 from '../assets/IMG/projects-representation-image/Project1.png'
import img2 from '../assets/IMG/projects-representation-image/Project2.png'
import img3 from '../assets/IMG/projects-representation-image/Project3.png'
import img4 from '../assets/IMG/projects-representation-image/Project4.png'
import img5 from '../assets/IMG/projects-representation-image/Project5.png'
import { techLogos } from '../constant'

const projects = [
    {
        title: 'KOROBO',
        description: "KOROBO is a smart web app for managing solar system maintenance. It lets users monitor performance, plan tasks, and get quick reports — all to boost efficiency and cut downtime.",
        github: 'https://github.com/annelauraa/KOROBO',
        technologies: ['React', 'Tailwind', 'Express', 'PostgreSQL', 'Figma'],
        image: img1
    },
    {
        title: 'Portfolio Laingo',
        description: "My personal portfolio built with React and Tailwind. It highlights my dev and design work with smooth animations and a clean, responsive layout.",
        github: 'https://github.com/annelauraa/My-Portfolio',
        technologies: ['React', 'Vite', 'Tailwind', 'Figma'],
        image: img2
    },
    {
        title: 'Mail HUB',
        description: "Mail HUB helps you send bulk emails with ease. With tracking, scheduling, and automation tools, it’s great for running smooth, efficient email campaigns.",
        github: 'https://github.com/annelauraa/Madagastours-MAILHUB',
        technologies: ['VueJS', 'Bootstrap', 'Symfony', 'MySQL', 'Figma'],
        image: img3
    }
    ,
    {
        title: 'FALCON TEMPLE – Interface Redesign',
        description: "Redesigned the interface of Falcon Temple using Webflow and Figma. The goal was to modernize the layout and enhance user experience while preserving brand identity.",
        github: '',
        technologies: ['Webflow', 'Figma'],
        image: img5
    },
    {
        title: 'IALEFA – Front-End Redesign',
        description: "Led a front-end revamp of IALEFA's website using the Divi theme in WordPress. Focused on improving visual hierarchy, responsiveness, and content structure for better usability.",
        github: '',
        technologies: ['WordPress', 'Figma'],
        image: img4
    }

]

const Projects = () => {
    const [currentImage, setCurrentImage] = useState(projects[0].image)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.realIndex % projects.length
        setCurrentImage(projects[newIndex].image)
    }

    return (
        <div id='projects' className='projects'>
            <h2>My Achievements</h2>

            <div className="main-content flex flex-col sm:flex-row gap-8">
                {/* Image dynamique */}
                <div className="project-image">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage}
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

                {/* Swiper adaptatif */}
                <div className="project-item-container w-full max-h-fit lg:max-h-screen ">
                    <Swiper
                        direction={isMobile ? 'horizontal' : 'vertical'}
                        slidesPerView={isMobile ? 1 : 2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Mousewheel, Autoplay]}
                        onSlideChange={handleSlideChange}
                        className="h-full w-[90vw] lg:w-[30vw]"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide className='Swiper-Slide-Projects' key={index}>
                                <div className="main-container">
                                    <h3>{project.title} ~ </h3>
                                    <p className=''>{project.description}</p>
                                    <div className="techstack flex gap-2 mt-2">
                                        {project.technologies.map((tech, idx) => (
                                            <div className="flex items-center justify-center social-link ml-[-12px] w-[30px] h-[30px] bg-white rounded-full shadow-md   hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer">
                                                <img key={idx} src={techLogos[tech]} alt={tech} title={tech} className="w-6 h-6" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='Project-Github-Link-button mt-4'>
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

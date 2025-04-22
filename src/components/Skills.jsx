import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { skillsData } from '../constant';

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id='skills' className='skills'>
            <h2 className='pt-15'>My Skills</h2>
            <div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="max-w-200 mx-auto"
                >
                    {skillsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                key={activeIndex === index ? `active-${index}` : `inactive-${index}`} // Force re-animation
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5 }}
                                className="swiper-slide"
                            >
                                <h3 className="text-3xl font-semibold mb-2 text-gray-600">{item.title}</h3>
                                <p className="text-gray-600 mb-5 w-1/2">{item.description}</p>
                                <div className="flex px-2">
                                    {item.images.map((img, i) => (
                                        <div key={i} className='bg-white shadow-md border border-gray-500 ml-[-5px] mb-3 rounded-4xl w-[30px] h-[30px] hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer'>
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

            <button className='btn-primary'>You have projects for me</button>
        </div>
    );
};

export default Skills;

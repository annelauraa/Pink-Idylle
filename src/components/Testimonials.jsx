import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { RiDoubleQuotesR } from 'react-icons/ri';

const Testimonial = [
    {
        image: "https://example.com/image1.jpg",
        name: "Mara S.",
        post: "Fullstack Developer",
        description: "I’ve collaborated with Laingo on several projects, and she always delivers high-quality work on time. She knows how to turn an idea into a functional and elegant interface. Her attention to detail and her ability to understand user needs are impressive.",
    },
    {
        image: "https://example.com/image1.jpg",
        name: "Sarah T.",
        post: "UX/UI Designer",
        description: "Laingo combines creativity with strong technical skills. Her approach to frontend development is modern, smooth, and always well thought out. I’d team up with her again without hesitation. She’s a real asset to any project.",
    },
    {
        image: "https://example.com/image1.jpg",
        name: "Mickael R.",
        post: "Web Project Manager",
        description: "Working with Laingo has been a real pleasure. She’s responsive, organized, and always brings great ideas to the table. Her eye for design and mastery of React significantly improved our project. I highly recommend her.",
    }
]

const Testimonials = () => {
    return (
        <div id='testimonials' className=' testimonials '>
            <h2>What collaborators say of me ...</h2>

            {/* To multiple*/}
            <div className='testimonials-cards'>
                {Testimonial.map((item, index) => (
                    <div key={index}>
                        {/* <img src={item.image}alt="collaborator profil picture" /> */}
                        <CgProfile className='text-[3.5em] my-5' />
                        
                        <p className='testimonial-description'>{item.description} <sup><RiDoubleQuotesR className='inline text-2xl text-[var(--primary-color)]'/></sup> </p>
                     
                        <h4 className='testimonial-name '>— {item.name},{' '} <span className='text-gray-500 text-sm'>{item.post}</span></h4>
                        <div className='stars flex items-start justify-start my-2'>
                            {/* stars here */}
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Testimonials;
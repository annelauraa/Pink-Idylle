import React from 'react';
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaBriefcase,
    FaGlobe,
    FaDownload,
    FaLanguage,
    FaUser,
    FaGraduationCap
} from 'react-icons/fa';
import Profil from '../assets/IMG/CV_PICTURE.jpg';
const primaryColor = '#D892A0';

const CurriculumVitae = () => {
    return (
        <div id='CV' className=" CV p-6 sm:p-6 text-gray-800 max-w-3xl m-auto max-h-[85vh] overflow-auto bg-white rounded-2xl shadow-lg text-start">

            {/* Photo and name */}
            <div className="CV-header flex justify-between items-center gap-8 sm:gap-6 mb-6 lg:px-10 py-8">
                <img
                    src={Profil}
                    alt="Laingo Tsiory"
                    className="lg:w-[35%] lg:h-[35%] object-cover rounded-full border-4"
                    style={{ borderColor: primaryColor }}
                />

                <div>
                    <h3 className=" text-[2.5em] font-bold text-gray-600 CV_name sm:text-center">Laingo Tsiory <br /> <span className='text-pink-400 autography'>Anne Laura</span></h3>
                    <br />
                    <span className="text-md text-gray-500 text-start ">
                        Frontend Developer | Graphic Designer | Content Writer
                    </span>
                </div>

            </div>


            <div className='w-[75%] m-auto'>
                {/* Contact */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FaUser color={primaryColor} /> Contact
                    </h2>
                    <ul className="text-sm mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                            <FaEnvelope color={primaryColor} /> laingotsiory@outlook.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaLinkedin color={primaryColor} /> linkedin.com/in/laingotsiory-anne-laura
                        </li>
                        <li className="flex items-center gap-2">
                            <FaGithub color={primaryColor} /> github.com/annelauraa
                        </li>
                    </ul>
                </section>
                {/* Skills & Tech */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-start">
                        <FaGlobe color={primaryColor} /> Skills & Technologies
                    </h2>
                    <span className="text-sm mt-2">
                        React, Tailwind CSS, Framer Motion, Express, PostgreSQL, Figma, Webflow, Git, SEO...
                    </span>
                </section>

                {/* Professional Experience */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FaBriefcase color={primaryColor} />  Experiences
                    </h2>
                    <div className="mt-2 text-sm">
                        <span className="font-semibold">
                            Freelance Web Developer — Madagascar (2022 - Present)
                        </span>
                        <ul className="list-disc list-inside mt-1">
                            <li>Created responsive websites for local and international clients</li>
                            <li>Frontend development with React, Vite, and Tailwind CSS</li>
                            <li>Designed logos and social media visuals with Figma</li>
                            <li>Wrote engaging content for blogs and product pages</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FaGraduationCap color={primaryColor} /> Education 
                    </h2>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-2">
                        <li>
                            <span className="font-semibold">Bachelor in Computer Science</span> <br />
                            <span className="text-gray-500">ENI- University of Fianarantsoa — 2020 - 2023</span> <br />
                            <span>Specialized in web development and software engineering</span> <br />
                        </li>
                        <li>
                            <span className="font-semibold">Certified Frontend Developer</span> <br />
                            <span className="text-gray-500">OpenClassrooms — 2024</span> <br />
                            <span>Focused on React, accessibility, and UX/UI best practices</span> <br />
                        </li>
                        <li>
                            <span className="font-semibold">Graphic Design Certificate</span> <br />
                            <span className="text-gray-500">Coursera — 2023</span> <br />
                            <span>Learned fundamentals of design, color theory, and branding</span> <br />
                        </li>
                    </ul>
                </section>

                {/* Languages */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FaLanguage color={primaryColor} /> Languages
                    </h2>
                    <ul className="list-disc list-inside text-sm mt-1">
                        <li>Malagasy (native)</li>
                        <li>French (fluent)</li>
                        <li>English (intermediate)</li>
                    </ul>
                </section>

                {/* Download CV */}
                <div className="mt-8">
                    <a
                        href="/assets/Laingo_Tsiory_CV.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-2 text-white rounded-full hover:opacity-90 transition"
                        style={{ backgroundColor: primaryColor }}
                    >
                        <FaDownload /> Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CurriculumVitae;

'use client';
import { ArrowRightIcon } from 'lucide-react';

export const Projects = () => {

    const projects = [
        {
            video: '/media/lms.mp4',
            title: 'LMS Landing Page',
            description:
                'A modern landing page designed for Learning Management Systems (LMS), focused on visual engagement and clear communication. Featuring a responsive, intuitive design, it showcases key features, measurable impact metrics, flexible pricing plans, and a sleek sign-up/login portal. Built with Next.js and TypeScript, this project demonstrates strong skills in crafting well-structured, fluid interfaces aligned with modern web design trends.',
            link: '#',
            tecs: ['HTML5', 'CSS3', 'Next.js', 'TypeScript', 'Web Design', 'Web Development'],
        },
        {
            video: '/media/shopping_system.mp4',
            title: 'Shopping System',
            description:
                'A  modern and intuitive eCommerce designed for seamless shopping experiences, featuring dynamic UI components and a clean, responsive design. Built with JavaScript, this project showcases my ability to create engaging user interfaces that enhance usability and performance. Check out the repository and see it in action!',
            link: 'https://github.com/J-V-S-C/ShoppingSystem',
            tecs: ['HTML5', 'CSS3', 'Javascript', 'Mysql'],
        },
        {
            video: '/media/ecommerce.mp4',
            title: 'Ecommerce',
            description:
                'E-commerce platform developed collaboratively with a friend, where I played a key role in designing and implementing both the frontend and backend. The project leverages modern technologies such as React, Redux, and PostgreSQL for a seamless and scalable user experience.',
            link: '#',
            tecs: ['javascript', 'React', 'Redux', 'Postgresql', 'Python'],
        },
        {
            video: '/media/flashcard.mp4',
            title: 'Flashcard-API',
            description:
                'A flashcard API to create, read, update and delete flashcards and decks, it was created entirely in Golang and documented with swagger.',
            link: 'https://github.com/J-V-S-C/flashcards-go',
            tecs: ['Golang', 'Swagger', 'Clean archtecture', 'Design Patterns', 'RESTful API'],
        },
    ];

    return (
        <div className="min-h-screen px-4 sm:px-12 md:px-24 lg:px-48 text-textPrimary dark:text-textPrimary-dark mt-64">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center">
                My Works
            </h1>

            <div className="mt-12 space-y-16">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col gap-12">
                        <hr className="w-full border-t-2 border-border dark:border-border-dark" />

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <video
                                    className="rounded-lg shadow-lg cursor-pointer"
                                    width={700}
                                    height={400}
                                    controls
                                    muted
                                    loop
                                >
                                    <source src={project.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                                <h2 className="font-bold text-3xl">{project.title}</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>

                                {project.link !== '#' ? (
                                    <a
                                        href={project.link}
                                        className="font-bold text-xl text-primary dark:text-primary-dark relative inline-flex items-center gap-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[9rem] after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </a>
                                ) : (
                                    <span className="font-bold text-xl text-gray-500 dark:text-gray-400">
                                        Private Repository
                                    </span>
                                )}

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tecs.map((tec, tecIndex) => (
                                        <span
                                            key={tecIndex}
                                            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-bold"
                                        >
                                            {tec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

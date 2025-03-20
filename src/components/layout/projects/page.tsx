'use client';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const projects = [
    {
      image: '/media/rentx.png',
      title: 'RentX',
      description:
        'RentX is a scalable car rental API built with Node.js, TypeScript, PostgreSQL, and TypeORM, featuring optimized database structuring and Docker integration.',
      link: 'https://github.com/J-V-S-C/Rentx',
      tecs: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    },
    {
      image: '/media/interfaceReact.png',
      title: 'Basic Interface',
      description:
        'A  modern and intuitive eCommerce interface designed for seamless shopping experiences, featuring dynamic UI components and a clean, responsive design. Built with React and JavaScript, this project showcases my ability to create engaging user interfaces that enhance usability and performance. Check out the repository and see it in action!',
      link: 'https://github.com/J-V-S-C/Interface_React',
      tecs: ['React', 'Javascript'],
    },
    {
      image: '/media/ecommerce.png',
      title: 'Ecommerce',
      description:
        'E-commerce platform developed collaboratively with a friend, where I played a key role in designing and implementing both the frontend and backend. The project leverages modern technologies such as React, Redux, and PostgreSQL for a seamless and scalable user experience.',
      link: '#',
      tecs: ['javascript', 'React', 'Redux', 'Postgresql', 'Python'],
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
                <Image
                  className="rounded-lg shadow-lg cursor-zoom-in"
                  src={project.image}
                  width={700}
                  height={400}
                  alt={project.title}
                  onClick={() => setZoomedImage(project.image)}
                />
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

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative"
          >
            <Image
              src={zoomedImage}
              width={1000}
              height={600}
              alt="Zoomed Project"
              className="rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 px-3 py-1 rounded-full"
              onClick={() => setZoomedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

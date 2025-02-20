import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export const Projects = () => {
  const projects = [
    {
      image: '/media/chainIcon.webp',
      title: 'Project Title 1',
      description:
        'We developed a sophisticated website integrating custom JavaScript and GSAP for smooth animations. Despite tight deadlines, we delivered a seamless experience, impressing the client with our technical prowess and timely execution.',
      link: '#',
      tecs: ['JavaScript', 'Next.js', 'GSAP'],
    },
    {
      image: '/media/chainIcon.webp',
      title: 'Project Title 2',
      description:
        'A high-performance web app designed for real-time data visualization. Built with React, WebSockets, and optimized for speed and scalability.',
      link: '#',
      tecs: ['React', 'WebSockets', 'Tailwind CSS'],
    },
    {
      image: '/media/chainIcon.webp',
      title: 'Project Title 3',
      description:
        'Developed a full-stack SaaS application, utilizing Node.js, GraphQL, and PostgreSQL to ensure efficient and scalable data management.',
      link: '#',
      tecs: ['Node.js', 'GraphQL', 'PostgreSQL'],
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
                  className="rounded-lg shadow-lg"
                  src={project.image}
                  width={700}
                  height={400}
                  alt={project.title}
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <h2 className="font-bold text-3xl">{project.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="font-bold text-xl text-primary dark:text-primary-dark relative inline-flex items-center gap-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[9rem] after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRightIcon className="w-5 h-5" />
                </a>

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

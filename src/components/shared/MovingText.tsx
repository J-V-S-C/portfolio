import Image from 'next/image';

export const MovingText = () => {
  const tecs = [
    { name: 'HTML', logo: '/language-logos/html5-plain.svg' },
    { name: 'CSS', logo: '/language-logos/css3-original.svg' },
    { name: 'JavaScript', logo: '/language-logos/javascript-plain.svg' },
    { name: 'TypeScript', logo: '/language-logos/typescript-plain.svg' },
    { name: 'Node.js', logo: '/language-logos/nodejs-plain.svg' },
    { name: 'Nest.js', logo: '/language-logos/nestjs-original.svg' },
    { name: 'React', logo: '/language-logos/react-original.svg' },
    { name: 'Next.js', logo: '/language-logos/nextjs-plain.svg' },
    { name: 'Python', logo: '/language-logos/python-original.svg' },
    { name: 'Golang', logo: '/language-logos/go-original.svg' },
  ];

  return (
    <div className="overflow-hidden py-4">
      <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-max animate-marquee-move-text">
        {[...tecs, ...tecs].map((tech, index) => (
          <div key={index} className="relative flex items-center">
            <div className="bg-background-dark dark:bg-text-dark rounded-full text-text-dark dark:text-text font-extrabold text-lg sm:text-xl py-2 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 relative">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={30}
                height={30}
                className="sm:w-[40px] sm:h-[40px]"
              />
              <span className="text-lg sm:text-2xl">{tech.name}</span>
            </div>

            {index !== tecs.length * 2 - 1 && (
              <div className="absolute right-[-2.5rem] sm:right-[-3.8rem] md:right-[-4.2rem] lg:right-[-6rem] top-1/2 transform -translate-y-1/2 w-[3rem] sm:w-[4rem] md:w-[4.5rem] lg:w-[7rem] h-[0.3rem] sm:h-[0.4rem] md:h-[0.35rem] lg:h-[0.5rem] bg-background-dark dark:bg-text-dark rounded-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

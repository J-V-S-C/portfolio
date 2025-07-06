import Image from 'next/image';

export const MovingText = () => {
    const tecs = [
        {
            name: 'JavaScript',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        },
        {
            name: 'TypeScript',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        },
        {
            name: 'Node.js',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
        },
        {
            name: 'React',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
        },
        {
            name: 'PHP',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
        },
        {
            name: 'HTML',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
        },
        {
            name: 'CSS',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
        },
        {
            name: 'Python',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        },
        {
            name: 'Flutter',
            logo: '/flutter-plain.svg',
        },
        {
            name: 'Golang',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
        },
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

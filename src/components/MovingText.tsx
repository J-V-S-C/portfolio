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
  ];
  return (
    <div className="overflow-clip">
      <div className="flex gap-[3rem] w-max animate-marquee-move-text">
        {[...tecs, ...tecs].map((tech, index) => (
          <div key={index} className="relative flex items-center">
            <div className="border border-white bg-[#141414] rounded-full text-white text-1xl py-2 px-8 flex items-center gap-4 relative">
              <Image src={tech.logo} alt={tech.name} width={40} height={40} />
              <span className="text-2xl">{tech.name}</span>
            </div>

            {index !== tecs.length * 2 - 1 && (
              <div className="absolute right-[-3.8rem] top-1/2 transform -translate-y-1/2 w-[4rem] h-[0.4rem] bg-[#141414] rounded-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

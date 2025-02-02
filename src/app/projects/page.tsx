import Image from 'next/image';

export const Projects = () => {
  const projects = [
    {
      image: '/media/chainIcon.webp',
      title: 'Título',
      description:
        'Partnering with Future Brand London, we developed a sophisticated website for SCI Ventures, integrating custom JavaScript and GSAP for smooth animations and a unique pre-loader for first-time visitors. Despite tight deadlines, we delivered a seamless, professional scrolling experience, impressing the client with our technical prowess and timely execution. This collaboration highlighted our ability to enhance Webflow’s capabilities and deliver an exceptional online presence.',
      /*Link */
      /*icones das tecs*/
      tecs: 'tecnologias usadas',
    },
    {
      image: '/media/chainIcon.webp',
      title: 'Título',
      description:
        'Partnering with Future Brand London, we developed a sophisticated website for SCI Ventures, integrating custom JavaScript and GSAP for smooth animations and a unique pre-loader for first-time visitors. Despite tight deadlines, we delivered a seamless, professional scrolling experience, impressing the client with our technical prowess and timely execution. This collaboration highlighted our ability to enhance Webflow’s capabilities and deliver an exceptional online presence.',
      /*Link */
      /*icones das tecs*/
      tecs: 'tecnologias usadas',
    },
    {
      image: '/media/chainIcon.webp',
      title: 'Título',
      description:
        'Partnering with Future Brand London, we developed a sophisticated website for SCI Ventures, integrating custom JavaScript and GSAP for smooth animations and a unique pre-loader for first-time visitors. Despite tight deadlines, we delivered a seamless, professional scrolling experience, impressing the client with our technical prowess and timely execution. This collaboration highlighted our ability to enhance Webflow’s capabilities and deliver an exceptional online presence.',
      /*Link */
      /*icones das tecs*/
      tecs: 'tecnologias usadas',
    },
  ];
  return (
    <>
      <div className="min-h-[90vr] p-48 text-[#333333] py-80">
        <h1 className="text-8xl font-bold">My works</h1>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col ">
              <hr className="my-4 h-[0.2rem] bg-[#C1C0C0] "></hr>

              <div className="flex flex-row">
                <div className="py-24 mr-32">
                  <Image
                    className="rounded-lg"
                    src={project.image}
                    width={700}
                    height={170}
                    alt="Projeto1"
                  />
                </div>
                <div className="flex flex-col py-24 px-16 max-w-[40rem]">
                  <p className="font-bold text-3xl pb-6">{project.title}</p>
                  <p className="pb-8">{project.description}</p>
                  <p className="font-extrabold text-2xl italic">link</p>{' '}
                  <div className="flex flex-row gap-2 border border-white bg-[#141414] rounded-lg text-white text-1xl py-2 px-4 items-center size-fit">
                    <p>Icone da tec</p>
                    <p>{project.tecs}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

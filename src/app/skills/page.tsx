import {
  Code,
  Monitor,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Bug,
  Users,
  MessageSquare,
  Lightbulb,
  Settings,
  Workflow,
  Clock,
  Brain,
  Handshake,
} from 'lucide-react';

export const Skills = () => {
  return (
    <div className="mt-64 p-12 md:p-24 lg:px-48 text-textPrimary dark:text-textPrimary-dark ">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center">
        My Skills
      </h1>
      <hr className="my-4 h-[0.2rem] bg-border dark:bg-border-dark "></hr>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 p-6">
        {[
          {
            title: 'Frontend',
            icon: <Monitor size={32} />,
            description: 'Building intuitive user interfaces and experiences',
            skills: [
              {
                icon: <Code size={24} />,
                text: 'TypeScript, JavaScript (ES6+)',
              },
              { icon: <Code size={24} />, text: 'React.js, Next.js, Redux' },
              {
                icon: <Code size={24} />,
                text: 'Tailwind CSS, Radix UI, ShadCN',
              },
            ],
          },
          {
            title: 'Backend',
            icon: <Server size={32} />,
            description: 'Handling server logic and data processing',
            skills: [
              { icon: <Code size={24} />, text: 'Node.js (Express, Fastify)' },
              {
                icon: <Database size={24} />,
                text: 'PostgreSQL, MySQL, Firebase',
              },
              {
                icon: <ShieldCheck size={24} />,
                text: 'JWT, OAuth, API Security',
              },
            ],
          },
          {
            title: 'Infrastructure & Deployment',
            icon: <Cloud size={32} />,
            description: 'Ensuring scalability and reliability',
            skills: [
              { icon: <Cloud size={24} />, text: 'AWS, Vercel, Netlify' },
              { icon: <Settings size={24} />, text: 'Docker, Kubernetes' },
              {
                icon: <Workflow size={24} />,
                text: 'CI/CD (GitHub Actions, Jenkins)',
              },
            ],
          },
          {
            title: 'Testing & Quality',
            icon: <Bug size={32} />,
            description: 'Guaranteeing software reliability',
            skills: [
              { icon: <Bug size={24} />, text: 'Jest, Mocha, Chai' },
              { icon: <ShieldCheck size={24} />, text: 'ESLint, Prettier' },
              { icon: <Code size={24} />, text: 'Cypress, Playwright' },
            ],
          },
          {
            title: 'Communication & Collaboration',
            icon: <Users size={32} />,
            description: 'How I work with teams and share ideas',
            skills: [
              {
                icon: <MessageSquare size={24} />,
                text: 'Technical Writing & Documentation',
              },
              { icon: <Handshake size={24} />, text: 'Teamwork & Partnership' },
              {
                icon: <Users size={24} />,
                text: 'Feedback & Asynchronous Communication',
              },
            ],
          },
          {
            title: 'Critical Thinking & Problem-Solving',
            icon: <Brain size={32} />,
            description: 'Analyzing challenges with logic and creativity',
            skills: [
              {
                icon: <Lightbulb size={24} />,
                text: 'Data-Driven Decision Making',
              },
              {
                icon: <Workflow size={24} />,
                text: 'Algorithms & Design Patterns',
              },
              {
                icon: <ShieldCheck size={24} />,
                text: 'Analytical & Strategic Thinking',
              },
            ],
          },
          {
            title: 'Organization & Efficiency',
            icon: <Clock size={32} />,
            description: 'Balancing multiple tasks and priorities',
            skills: [
              {
                icon: <Workflow size={24} />,
                text: 'Time Management & Prioritization',
              },
              {
                icon: <Settings size={24} />,
                text: 'Automation & Code Optimization',
              },
              { icon: <Bug size={24} />, text: 'Agile Problem Resolution' },
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="h-full flex flex-col bg-background dark:bg-background-dark rounded-lg p-6 shadow-md"
          >
            <h2 className="flex items-center gap-3 font-bold text-3xl text-gray-900 dark:text-white">
              {section.icon} {section.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {section.description}
            </p>
            <ul className="list-none space-y-2 mt-4 flex-grow">
              {section.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  {skill.icon} {skill.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

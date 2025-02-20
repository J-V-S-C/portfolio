import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-black text-text dark:text-text-dark py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { href: '/', label: 'HOME' },
            { href: '/about', label: 'ABOUT ME' },
            { href: '/goals', label: 'GOALS' },
            { href: '/resume', label: 'RESUME' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold transition duration-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-6 relative">
          {[
            {
              href: 'https://github.com/seu-usuario',
              icon: <Github size={28} />,
              label: 'GitHub',
            },
            {
              href: 'https://www.linkedin.com/in/seu-usuario',
              icon: <Linkedin size={28} />,
              label: 'LinkedIn',
            },
            {
              href: 'https://wa.me/seu-numero',
              icon: <MessageCircle size={28} />,
              label: 'WhatsApp',
            },
            {
              href: 'mailto:seu-email@email.com',
              icon: <Mail size={28} />,
              label: 'Email',
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {social.icon}
              <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} {"João Victor Sant'Ana Cortabitart"}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

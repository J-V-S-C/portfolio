'use client';
import { ThemeTroggleButton } from '@/components/ThemeTroggleButton';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 dark:bg-black flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-48 py-6 shadow-lg">
      <div className="w-full flex justify-between items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text dark:text-text-dark focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <ThemeTroggleButton classname="flex align-middle items-center" />
      </div>

      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0`}
      >
        {[
          { href: '/', label: 'HOME' },
          { href: '/about', label: 'ABOUT ME' },
          { href: '/goals', label: 'GOALS' },
          { href: '/resume', label: 'RESUME' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-text bg-gray-100 dark:text-text-dark dark:bg-black px-4 py-2 border border-text dark:border-text-dark rounded-lg transition duration-300 hover:bg-black hover:text-text-dark dark:hover:bg-white dark:hover:text-text font-[900] text-lg w-full text-center md:w-auto"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex">
        <ThemeTroggleButton classname="flex align-middle items-center" />
      </div>
    </div>
  );
};

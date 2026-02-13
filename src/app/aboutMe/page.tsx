'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DarkModeProvider } from '@/components/shared/DarkModeProvider';
import { Header } from '@/components/layout/header/page';
import { Footer } from '@/components/layout/footer/page';

const textBlocks = [
  'I am a Software Engineer and Full-Stack Developer focused on building scalable and maintainable systems using TypeScript and Golang.',
  'My stack includes **Node.js**, **Express**, **Nest.js**, **React**, and **Next.js**, with **PostgreSQL**, **MySQL**, and **Firebase** for data persistence.',
  'I apply **SOLID**, **Clean Code**, **TDD**, **DDD**, and **Clean Architecture** to structure applications with clear boundaries and long-term maintainability.',
  'I work across **frontend** and **backend**, designing REST APIs, modeling domains, and implementing consistent testing strategies.',
  'Continuous learning is part of my routine, and I focus on delivering practical solutions that solve real problems with clarity and efficiency.',
];

const formatText = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<span class="text-primary font-bold">$1</span>') // Bold padrão
    .replace(/React/g, '<span class="text-blue-500 font-bold">React</span>')
    .replace(
      /Next\.js/g,
      '<span class="text-purple-500 font-bold">Next.js</span>',
    )
    .replace(
      /Tailwind/g,
      '<span class="text-cyan-500 font-bold">Tailwind</span>',
    )
    .replace(
      /Node\.js/g,
      '<span class="text-green-500 font-bold">Node.js</span>',
    )
    .replace(
      /Express/g,
      '<span class="text-green-600 font-bold">Express</span>',
    )
    .replace(
      /PostgreSQL/g,
      '<span class="text-yellow-500 font-bold">PostgreSQL</span>',
    )
    .replace(
      /Clean Code/g,
      '<span class="text-red-500 font-bold">Clean Code</span>',
    )
    .replace(/SOLID/g, '<span class="text-orange-500 font-bold">SOLID</span>')
    .replace(
      /scalable architecture/g,
      '<span class="text-indigo-500 font-bold">scalable architecture</span>',
    );
};

export default function AboutMe() {
  const [displayText, setDisplayText] = useState('');
  const [blockIndex, setBlockIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (blockIndex < textBlocks.length) {
      if (charIndex < textBlocks[blockIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + textBlocks[blockIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 15);

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayText((prev) => prev + '\n\n');
          setBlockIndex(blockIndex + 1);
          setCharIndex(0);
        }, 500);
      }
    } else {
      setFinished(true);
    }
  }, [charIndex, blockIndex]);

  return (
    <DarkModeProvider>
      <div className="bg-background dark:bg-background-dark w-full overflow-x-hidden">
        <Header />
        <main className="flex flex-col items-center w-full min-h-screen px-8 py-16 text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-8 tracking-wide text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line shadow-lg p-6 bg-white dark:bg-gray-800 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: finished ? 1 : 0.7 }}
            transition={{ duration: 1.5 }}
            dangerouslySetInnerHTML={{ __html: formatText(displayText) }}
          />

          {!finished && (
            <span className="text-primary text-2xl animate-blink">|</span>
          )}

          <motion.div
            className="mt-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: finished ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-lg font-semibold">📍 Santa Maria, Brazil</p>
            <p>
              📩 Email:{' '}
              <a
                href="mailto:joaovictorcortabitart@gmail.com"
                className="text-primary hover:underline"
              >
                joaovictorcortabitart@gmail.com
              </a>
            </p>
            <p>
              🔗 GitHub:{' '}
              <a
                href="https://github.com/J-V-S-C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                J-V-S-C
              </a>
            </p>
            <p>
              💼 LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-cortabitart-0183062b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                João Cortabitart
              </a>
            </p>
          </motion.div>
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

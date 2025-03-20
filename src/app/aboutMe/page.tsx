'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DarkModeProvider } from '@/components/shared/DarkModeProvider';
import { Header } from '@/components/layout/header/page';
import { Footer } from '@/components/layout/footer/page';

const textBlocks = [
  "I’ve always been curious about technology, breaking things apart just to see how they worked. My journey into programming started as a simple experiment, just me messing around and trying to figure things out. But then my computer broke, and I couldn't afford a new one. At that moment, it felt like the end of the road.",
  'Instead of giving up, I found another way. I enrolled in a **technical school**, where I could continue learning and finally have access to a computer again. What started as a hobby quickly turned into a **deep passion**. I began building projects, pushing my limits, and eventually saved up enough to buy my own computer. That was a turning point.',
  'Now, **three years later**, I’m a **Full Stack Developer** with a relentless drive to keep moving forward. My goal is to **always reach the next level**—whether by mastering new technologies, optimizing workflows, or creating scalable solutions that make a real impact.',
  'I thrive in both **frontend** and **backend development**, working with technologies like **React, Next.js, Tailwind**, **Node.js, Express**, and **PostgreSQL**. I strongly believe in **Clean Code, SOLID principles,** and **scalable architecture** to build software that truly matters.',
  'But beyond just writing code, I want to be **relevant**. My ultimate goal is to use technology **to change the world** in some way—to create solutions that improve lives, solve real problems, and leave a lasting impact. Every line of code I write is a step toward that mission.',
];

const formatText = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<span class="text-primary font-bold">$1</span>') // Bold padrão
    .replace(/React/g, '<span class="text-blue-500 font-bold">React</span>')
    .replace(
      /Next\.js/g,
      '<span class="text-purple-500 font-bold">Next.js</span>'
    )
    .replace(
      /Tailwind/g,
      '<span class="text-cyan-500 font-bold">Tailwind</span>'
    )
    .replace(
      /Node\.js/g,
      '<span class="text-green-500 font-bold">Node.js</span>'
    )
    .replace(
      /Express/g,
      '<span class="text-green-600 font-bold">Express</span>'
    )
    .replace(
      /PostgreSQL/g,
      '<span class="text-yellow-500 font-bold">PostgreSQL</span>'
    )
    .replace(
      /Clean Code/g,
      '<span class="text-red-500 font-bold">Clean Code</span>'
    )
    .replace(/SOLID/g, '<span class="text-orange-500 font-bold">SOLID</span>')
    .replace(
      /scalable architecture/g,
      '<span class="text-indigo-500 font-bold">scalable architecture</span>'
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

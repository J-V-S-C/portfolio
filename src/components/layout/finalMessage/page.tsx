import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';

export const FinalMessage = () => {
  return (
    <div className="w-full">
      <div className="bg-background dark:bg-background-dark text-text dark:text-text-dark flex flex-col items-center justify-start px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-[90%]">
          {"Let's change the world together!"}
        </h1>

        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text bg-gray-100 dark:text-text-dark dark:bg-black px-4 py-2 border border-text dark:border-text-dark rounded-lg transition duration-300 hover:bg-black hover:text-text-dark dark:hover:bg-white dark:hover:text-black font-[900] text-lg w-auto flex items-center gap-2 hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text bg-gray-100 dark:text-text-dark dark:bg-black px-4 py-2 border border-text dark:border-text-dark rounded-lg transition duration-300 hover:bg-black hover:text-text-dark dark:hover:bg-white dark:hover:text-black font-[900] text-lg w-auto flex items-center gap-2 hover:scale-105"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://wa.me/seu-numero"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text bg-gray-100 dark:text-text-dark dark:bg-black px-4 py-2 border border-text dark:border-text-dark rounded-lg transition duration-300 hover:bg-black hover:text-text-dark dark:hover:bg-white dark:hover:text-black font-[900] text-lg w-auto flex items-center gap-2 hover:scale-105"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          <a
            href="mailto:seu-email@email.com"
            className="text-text bg-gray-100 dark:text-text-dark dark:bg-black px-4 py-2 border border-text dark:border-text-dark rounded-lg transition duration-300 hover:bg-black hover:text-text-dark dark:hover:bg-white dark:hover:text-black font-[900] text-lg w-auto flex items-center gap-2 hover:scale-105"
          >
            <Mail size={20} />
            E-mail
          </a>
        </div>
      </div>
    </div>
  );
};

import { MovingText } from '@/components/shared/MovingText';
import Image from 'next/image';

export const Title = () => {
  return (
    <div className="w-full">
      <div className="bg-background dark:bg-background-dark text-text dark:text-text-dark flex flex-col items-center justify-center min-h-[80vh] px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-[90%]">
          Software Engineer
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl font-medium text-center mt-4 text-gray-600 dark:text-gray-300">
          {"Let's change the world together!"}
        </p>
      </div>

      <MovingText />
    </div>
  );
};
{
  /*     {/*
        <Image
          src="https://cdn-icons-png.freepik.com/512/18/18148.png"
          width={50}
          height={50}
          alt="Picture of the author"
          className="mt-8 mb-4 md:mt-16 md:mb-8"
        />*/
}

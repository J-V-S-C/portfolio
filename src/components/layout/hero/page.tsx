import { MovingText } from '@/components/shared/MovingText';
import Image from 'next/image';

export const Title = () => {
  return (
    <div className="w-full">
      <div className="bg-background dark:bg-background-dark text-text dark:text-text-dark flex flex-col items-center justify-center min-h-[80vh] px-4">
        <Image
          src="/media/Joao-Cortabitart.jpg"
          alt="João"
          width={300}
          height={300}
          className="w-60 h-60 rounded-full object-cover"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-[90%]">
          João Cortabitart
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-center mt-4 text-gray-800 dark:text-gray-200">
          {'Full Stack Developer'}
        </p>
      </div>

      <MovingText />
    </div>
  );
};

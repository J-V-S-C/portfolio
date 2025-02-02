import { MovingText } from '@/components/MovingText';
import Image from 'next/image';

export const Title = () => {
  return (
    <div className="">
      <div className="bg-background text-[#151515] flex flex-col items-center justify-center min-h-[80vh]">
        <Image
          src="https://cdn-icons-png.freepik.com/512/18/18148.png"
          width={50}
          height={50}
          alt="Picture of the author"
          className="mt-16 mb-8"
        />{' '}
        <h1 className="text-6xl font-bold">Software Engineer</h1>
      </div>
      <MovingText />
    </div>
  );
};

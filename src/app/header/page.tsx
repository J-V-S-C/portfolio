import { ThemeTroggleButton } from '@/components/ThemeTroggleButton';

export const Header = () => {
  return (
    <div className="bg-[#D5D5D5] text-[#151515] flex flex-row justify-between px-48 py-8">
      <nav className="flex flex-row gap-4">
        <p>Home</p>
        <p>About me</p>
        <p>Vision</p>
        <p>Resume</p>
      </nav>
      <ThemeTroggleButton classname=" align-middle " />
    </div>
  );
};

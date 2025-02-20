import { DarkModeProvider } from '@/components/DarkModeProvider';
import { Header } from './header/page';
import { Title } from './hero/page';
import { Projects } from './projects/page';
import { Skills } from './skills/page';
import { Footer } from './footer/page';

export default function Home() {
  return (
    <DarkModeProvider>
      <div className="bg-background dark:bg-background-dark w-full overflow-x-hidden">
        <Header />
        <main className="flex flex-col items-center w-full">
          <Title />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

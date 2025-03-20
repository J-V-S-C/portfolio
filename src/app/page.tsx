import { DarkModeProvider } from '@/components/shared/DarkModeProvider';
import { Header } from '@/components/layout/header/page';
import { Title } from '@/components/layout/hero/page';
import { Projects } from '@/components/layout/projects/page';
import { Skills } from '@/components/layout/skills/page';
import { Footer } from '@/components/layout/footer/page';

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

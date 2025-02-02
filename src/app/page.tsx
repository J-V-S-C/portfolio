import { DarkModeProvider } from '@/components/DarkModeProvider';
import { Header } from './header/page';
import { Title } from './title/page';
import { Projects } from './projects/page';

export default function Home() {
  return (
    <DarkModeProvider>
      <div className="bg-background">
        <Header />
        <Title />
        <Projects />
      </div>
    </DarkModeProvider>
  );
}

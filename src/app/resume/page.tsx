import { DarkModeProvider } from '@/components/shared/DarkModeProvider';
import { Header } from '@/components/layout/header/page';
import { Footer } from '@/components/layout/footer/page';
import { ExternalLinkIcon, DownloadIcon } from 'lucide-react';

export default function Resume() {
  return (
    <DarkModeProvider>
      <div className="bg-background dark:bg-background-dark w-full overflow-x-hidden">
        <Header />
        <main className="flex flex-col items-center w-full min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
            My Resume
          </h1>

          <div className="flex gap-4 mb-6">
            <a
              href="/media/Resume.pdf"
              download
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              <DownloadIcon className="w-5 h-5" /> Download
            </a>
            <a
              href="/media/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              <ExternalLinkIcon className="w-5 h-5" /> Open in New Tab
            </a>
          </div>

          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
            <iframe
              src="/media/Resume.pdf"
              className="w-full h-[80vh] rounded-lg"
              aria-label="Resume PDF"
            />
          </div>
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

import { Header, Sidebar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Koulen, Inter } from 'next/font/google';
import { SmoothScrollLayout } from '@/layout/SmoothScrollLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const koulen = Koulen({ weight: '400', subsets: ['latin'], variable: '--font-koulen' });

export const metadata: Metadata = {
  title: 'DreamerAI',
  description: 'Portfolio of DreamerAI - Frontend Developer and UI/UX Designer based in Moscow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${koulen.variable} ${inter.variable} font-koulen`}>
        <SmoothScrollLayout>
          <div className="flex flex-col relative bg-black">
            {/* <div className="fixed flex items-end w-20 justify-center right-0 md:left-0 group z-50 h-full pr-0 md:items-center md:pl-6 md:pr-0 pb-4 md:pb-0">
							<Sidebar />
						</div> */}
            <Header />
            {children}
          </div>
        </SmoothScrollLayout>
      </body>
    </html>
  );
}

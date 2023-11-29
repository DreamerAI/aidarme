import { Sidebar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Logo from '../components/shared/assets/icons/Logo.svg';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DreamerAI',
  description: 'Portfolio of DreamerAI - Frontend Developer and UI/UX Designer based in Moscow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        {/* <div className='fixed animate-logoSlide inset-0 z-50 bg-white min-h-screen flex items-center justify-center'>
          <Logo className=" w-[250px] h-[250px]" />
        </div> */}
        <div className='flex relative'>
          <div className='fixed flex items-end w-20 justify-center right-0 md:left-0 group z-50 h-full pr-0 md:items-center md:pl-6 md:pr-0 pb-4 md:pb-0'>
            <Sidebar />
          </div>
          <div className='mx-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

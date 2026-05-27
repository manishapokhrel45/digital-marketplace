import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/store/Providers';
import Navbar from './components/common/Navbar';

export const metadata: Metadata = {
  title: 'NexusAssets | Premium Digital Marketplace',
  description: 'Curated high-quality development templates and digital assets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased bg-zinc-50 text-zinc-900 flex flex-col min-h-screen'>
        <Providers>
          <Navbar />
          <main className='flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            {children}
          </main>
          <footer className='border-t border-zinc-200 bg-white py-6 text-center text-xs text-zinc-500'>
            © {new Date().getFullYear()} NexusAssets. Built for production.
          </footer>
        </Providers>
      </body>
    </html>
  );
}

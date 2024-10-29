import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NewNav from './components/Navbar/NewNavbar';
import ScrollToTop from './components/common/ScrollTopArrow';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'She Codes Too',
  description: 'She Codes Too Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NewNav />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}

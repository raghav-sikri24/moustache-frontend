import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AppProvider from '@/providers/AppProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moustache Hotels - Book Your Perfect Stay',
  description: 'Find and book the best hotels for your next trip',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}

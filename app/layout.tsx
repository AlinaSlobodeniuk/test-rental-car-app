import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'RentalCar',
  description: 'RentalCar is a web application for car rental',
  openGraph: {
    title: `RentalCar`,
    description: 'RentalCar is a web application for car rental',
    url: `https://localhost:3000`,
    images: [
      {
        url: '/hero.webp',
        width: 1400,
        height: 700,
        alt: 'RentalCar',
      },
    ],
  },
};

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <TanStackProvider>
          <Toaster position="top-right" />
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}

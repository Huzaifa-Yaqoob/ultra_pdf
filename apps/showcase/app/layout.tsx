import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { MainLayout } from '../blocks/main_layout';

const displayFont = localFont({
  src: [
    {
      path: '../../../packages/ui/src/assets/fonts/Outfit.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ultra-display',
});

const bodyFont = localFont({
  src: [
    {
      path: '../../../packages/ui/src/assets/fonts/Outfit.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ultra-body',
});

export const metadata: Metadata = {
  title: 'Ultra PDF Showcase',
  description: 'Showcase for Ultra PDF components and features',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

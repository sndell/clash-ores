import type { Metadata } from 'next';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Ore Calculator',
  description: 'Calculate ore cost to max all equipments, a single equipment or how many ores you can gain per day.',
  openGraph: {
    title: 'Ore Calculator',
    description: 'Calculate ore cost to max all equipments, a single equipment or how many ores you can gain per day.',
    url: 'https://ores.sundell.dev',
    siteName: 'Ore Calculator',
  },
  alternates: {
    canonical: 'https://ores.sundell.dev',
  },
};

const font = localFont({ src: '../fonts/Clash_Regular.otf' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId='G-9J3ZNM8FWP' />
    </html>
  );
}

import type { Metadata } from 'next';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Ore Calculator',
  description:
    'A simple tool for Clash of Clans to calculate how many ores are remaining until you max all of your hero equipment.',
  openGraph: {
    title: 'Ore Calculator',
    description:
      'A simple tool for Clash of Clans to calculate how many ores are remaining until you max all of your hero equipment.',
    url: 'https://ore.sundell.dev',
    siteName: 'Ore Calculator',
    images: [
      {
        url: 'https://ore.sundell.dev/images/equipment/Archer_Puppet.png',
      },
      {
        url: 'https://ore.sundell.dev/images/equipment/Barbarian_Puppet.png',
      },
      {
        url: 'https://ore.sundell.dev/images/equipment/Earthquake_Boots.png',
      },
    ],
  },
};

const font = localFont({ src: '../fonts/Clash_Regular.otf' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <div className="fixed inset-0 bg-primary backdrop-blur-sm" />
        <div id="modal-root" />
        {children}
      </body>
      <GoogleAnalytics gaId="G-9J3ZNM8FWP" />
    </html>
  );
}

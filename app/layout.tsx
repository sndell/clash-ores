import type { Metadata } from 'next';
import '@/styles/globals.css';
import localFont from 'next/font/local';

const font = localFont({ src: '../fonts/Clash_Regular.otf' });

export const metadata: Metadata = {
  title: 'Ore Calculator',
  description: 'A simple tool for Clash of Clans to calculate how many ores are remaining until you max all of your equipment.',
  openGraph: {
    title: 'Ore Calculator',
    description: 'A simple tool for Clash of Clans to calculate how many ores are remaining until you max all of your equipment.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <div id="modal-root" />
        {children}
      </body>
    </html>
  );
}

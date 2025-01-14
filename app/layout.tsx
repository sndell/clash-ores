import '@/styles/globals.css';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';

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

import localFont from "next/font/local";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CardsTrackerBanner } from "@/components/ui/CardsTrackerBanner";

const clashRegular = localFont({ src: "../fonts/Clash_Regular.otf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashRegular.className} antialiased`}>
        <GoogleAnalytics gaId="G-9J3ZNM8FWP" />
        <CardsTrackerBanner />
        {children}
      </body>
    </html>
  );
}

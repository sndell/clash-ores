import { HeroGrid } from '@/features/max-calculator';
import { Metadata } from 'next';
import { BackgroundOverlay } from '@/components/elements/BackgroundOverlay';

export const metadata: Metadata = {
  title: 'Ore Calculator - Max equipment cost',
  description: 'Calculate ore cost to max all equipments. Import your equipments automatically',
  openGraph: {
    title: 'Ore Calculator - Max equipment cost',
    description: 'Calculate ore cost to max all equipments. Import your equipments automatically',
    url: 'https://ores.sundell.dev/all',
    siteName: 'Ore Calculator',
  },
  alternates: {
    canonical: 'https://ores.sundell.dev/all',
  },
};

export default function Page() {
  return (
    <div className='flex relative flex-col bg-center bg-cover h-dvh bg-image-first'>
      <BackgroundOverlay />
      <HeroGrid />
    </div>
  );
}

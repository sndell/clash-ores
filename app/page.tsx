import { Landing } from '@/components/ui/Landing';
import { Metadata } from 'next';

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

export default function Page() {
  return <Landing />;
}

import {
  archerQueenEquipment,
  barbarianKingEquipment,
  grandWardenEquipment,
  minionPrinceEquipment,
  royalChampionEquipment,
} from '@/data/equipment';
import { HeroCard, HeroGrid } from '@/features/max-calculator';
import { Metadata } from 'next';

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
    <div className='flex relative flex-col bg-center bg-cover h-dvh bg-background1'>
      <div className='absolute inset-0 backdrop-blur-sm h-dvh bg-primary' />
      <HeroGrid>
        <HeroCard equipment={barbarianKingEquipment} title='Barbarian King' />
        <HeroCard equipment={archerQueenEquipment} title='Archer Queen' />
        <HeroCard equipment={grandWardenEquipment} title='Grand Warden' />
        <HeroCard equipment={royalChampionEquipment} title='Royal Champion' />
        <HeroCard equipment={minionPrinceEquipment} title='Minion Prince' />
      </HeroGrid>
    </div>
  );
}

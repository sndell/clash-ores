import {
  archerQueenEquipment,
  barbarianKingEquipment,
  grandWardenEquipment,
  minionPrinceEquipment,
  royalChampionEquipment,
} from '@/data';
import { HeroCard, HeroGrid } from '@/features/max-calculator';

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

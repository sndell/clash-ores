import { cn } from '@/utils/cn';
import { barbarianKingEquipment, archerQueenEquipment, grandWardenEquipment, royalChampionEquipment, minionPrinceEquipment } from '../data';
import { HeroCard } from './HeroCard';

const gridClasses = cn(
  'grid grid-cols-1',
  'sm:grid-cols-2',
  'md:grid-cols-[repeat(3,minmax(0,280px))]',
  'lg:grid-cols-[repeat(4,minmax(0,280px))]',
  'xl:grid-cols-[repeat(5,minmax(0,280px))]'
);

export const HeroGrid = () => {
  return (
    <div className={cn('relative w-full justify-center gap-3 overflow-y-auto p-3', gridClasses)}>
      <HeroCard name='Barbarian King' equipment={barbarianKingEquipment} />
      <HeroCard name='Archer Queen' equipment={archerQueenEquipment} />
      <HeroCard name='Grand Warden' equipment={grandWardenEquipment} />
      <HeroCard name='Royal Champion' equipment={royalChampionEquipment} />
      <HeroCard name='Minion Prince' equipment={minionPrinceEquipment} />
    </div>
  );
};

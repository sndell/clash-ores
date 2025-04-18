'use client';

import { useElementSize } from '@/hooks/useElementSize';
import { usePageSize } from '@/hooks/usePageSize';
import { cn } from '@/util/cn';
import { useRef } from 'react';
import { HeroCard } from './HeroCard';
import {
  archerQueenEquipment,
  barbarianKingEquipment,
  grandWardenEquipment,
  minionPrinceEquipment,
  royalChampionEquipment,
} from '@/data/equipment';

export const HeroGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { height: pageHeight } = usePageSize();
  const { height: elementHeight } = useElementSize(ref);

  return (
    <div className='flex overflow-auto flex-col flex-1 justify-evenly scrollbar-slim'>
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-5 gap-3 p-3 max-sm:px-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-content-center',
          elementHeight > pageHeight && 'pb-20'
        )}
      >
        <HeroCard equipment={barbarianKingEquipment} title='Barbarian King' />
        <HeroCard equipment={archerQueenEquipment} title='Archer Queen' />
        <HeroCard equipment={grandWardenEquipment} title='Grand Warden' />
        <HeroCard equipment={royalChampionEquipment} title='Royal Champion' />
        <HeroCard equipment={minionPrinceEquipment} title='Minion Prince' />
      </div>
    </div>
  );
};

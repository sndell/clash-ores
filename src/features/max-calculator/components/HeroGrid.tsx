'use client';

import { cn } from '@/util/cn';
import { barbarianKingEquipment, archerQueenEquipment, grandWardenEquipment, royalChampionEquipment, minionPrinceEquipment } from '../data';
import { HeroCard } from './HeroCard';
import { usePageSize } from '@/hooks/usePageSize';
import { useRef } from 'react';
import { useElementSize } from '@/hooks/useElementSize';

const gridClasses = cn(
  'grid grid-cols-1',
  'sm:grid-cols-2',
  'md:grid-cols-[repeat(3,minmax(0,280px))]',
  'lg:grid-cols-[repeat(4,minmax(0,280px))]',
  'xl:grid-cols-[repeat(5,minmax(0,280px))]'
);

export const HeroGrid = () => {
  const ref = useRef(null);
  const { height: pageHeight } = usePageSize();
  const { height: elementHeight } = useElementSize(ref);

  const isScrollable = elementHeight && elementHeight > pageHeight;

  return (
    <div ref={ref} className={cn('overflow-y-auto relative gap-3 justify-center py-3 px-5 w-full', gridClasses, isScrollable && 'pb-18')}>
      <HeroCard name='Barbarian King' equipment={barbarianKingEquipment} />
      <HeroCard name='Archer Queen' equipment={archerQueenEquipment} />
      <HeroCard name='Grand Warden' equipment={grandWardenEquipment} />
      <HeroCard name='Royal Champion' equipment={royalChampionEquipment} />
      <HeroCard name='Minion Prince' equipment={minionPrinceEquipment} />
    </div>
  );
};

'use client';

import { useEquipmentStore } from '@/features/max-calculator/stores/equipmentStore';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const OreResult = () => {
  const pathname = usePathname();

  const { remainingOres } = useEquipmentStore();

  return (
    <div className='flex gap-6 justify-center items-center px-6 rounded-full border backdrop-blur-xl bg-black/40 border-primary max-sm:flex-1'>
      <div className='flex gap-1.5 items-center'>
        <Image src='/images/ores/Shiny.webp' alt='shiny' width={24} height={24} className='object-contain aspect-square' />
        <span>{remainingOres.shiny}</span>
      </div>
      <div className='flex gap-1.5 items-center'>
        <Image src='/images/ores/Glowy.webp' alt='shiny' width={24} height={24} className='object-contain aspect-square' />
        <span>{remainingOres.glowy}</span>
      </div>
      <div className='flex gap-1.5 items-center'>
        <Image src='/images/ores/Starry.webp' alt='shiny' width={24} height={24} className='object-contain aspect-square' />
        <span>{remainingOres.starry}</span>
      </div>
    </div>
  );
};

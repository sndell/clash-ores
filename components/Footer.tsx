'use client';

import { useUpgradeStore } from '@/features/upgrade-calculator';
import { useOresStore } from '@/store/ores';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavButton } from './NavButton';
import { useGainStore } from '@/features/gain-calculator';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className='flex fixed right-0 bottom-0 left-0 gap-2 px-2 pb-2 mx-auto to-transparent max-sm:bg-gradient-to-t from-black/50 sm:w-fit'>
      <OreResult pathname={pathname} />
      <NavButton pathname={pathname} />
    </div>
  );
};

const OreResult = ({ pathname }: { pathname: string }) => {
  const { ores: maxOres } = useOresStore();
  const { ores: upgradeOres } = useUpgradeStore();
  const { ores: gainOres } = useGainStore();

  const selectedOres = pathname === '/single' ? upgradeOres : pathname === '/all' ? maxOres : gainOres;

  return <OreDisplay ores={selectedOres} />;
};

const OreDisplay = ({ ores }: { ores: Ores }) => {
  return (
    <div className='flex items-center justify-center gap-6 px-4 pt-[2px] overflow-hidden border rounded-full bg-primary border-primary backdrop-blur-xl max-sm:flex-1'>
      <div className='flex gap-2 items-center max-xs:flex-col max-xs:gap-1'>
        <Image
          src='/images/ores/Shiny.webp'
          alt='Shiny'
          width={24}
          height={24}
          className='object-contain aspect-square'
        />
        {ores.shiny}
      </div>
      <div className='flex gap-2 items-center max-xs:flex-col max-xs:gap-1'>
        <Image
          src='/images/ores/Glowy.webp'
          alt='Glowy'
          width={24}
          height={24}
          className='object-contain aspect-square'
        />
        {ores.glowy}
      </div>
      <div className='flex gap-2 items-center max-xs:flex-col max-xs:gap-1'>
        <Image
          src='/images/ores/Starry.webp'
          alt='Starry'
          width={24}
          height={24}
          className='object-contain aspect-square'
        />
        {ores.starry}
      </div>
    </div>
  );
};

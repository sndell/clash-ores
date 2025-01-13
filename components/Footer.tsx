'use client';

import { AccountButton, AccountModal } from '@/features/max-calculator';
import { useUpgradeStore } from '@/features/upgrade-calculator';
import { useOresStore } from '@/store/ores';
import { cn } from '@/util/cn';
import { sendGAEvent } from '@next/third-parties/google';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className='flex fixed right-0 bottom-0 left-0 gap-2 px-2 pb-2 mx-auto to-transparent max-sm:bg-gradient-to-t from-black/50 sm:w-fit'>
      <OreResult pathname={pathname} />
      <NavButton pathname={pathname} />
    </div>
  );
};

const NavButton = ({ pathname }: { pathname: string }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  const openNavMenu = () => {
    setIsNavMenuOpen(true);
    sendGAEvent('event', 'open_nav_menu');
    navigator.vibrate(30);
  };

  const openAccountModal = () => {
    setIsNavMenuOpen(false);
    setIsAccountModalOpen(true);
  };

  const closeAccountModal = () => setIsAccountModalOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={isNavMenuOpen ? closeNavMenu : openNavMenu}
        className='grid relative place-content-center w-16 h-16 rounded-full border transition-colors outline-none hover:bg-primary bg-primary border-primary'
      >
        <div className='overflow-hidden absolute inset-0 rounded-full backdrop-blur-xl' />
        <span className='icon-[solar--hamburger-menu-linear] text-2xl' />
        <AnimatePresence>
          {isNavMenuOpen && <NavMenu openAccountModal={openAccountModal} close={closeNavMenu} buttonRef={buttonRef} />}
        </AnimatePresence>
      </button>
      <AnimatePresence>{isAccountModalOpen && <AccountModal close={closeAccountModal} />}</AnimatePresence>
    </>
  );
};

const NAV_LINKS = [
  { label: 'Single equipment', href: '/calculator/single' },
  { label: 'All equipments', href: '/calculator/all' },
];

const NavMenu = ({
  close,
  buttonRef,
  openAccountModal,
}: {
  close: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  openAccountModal: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log('yes');

      if (ref.current && buttonRef.current) {
        const isButtonClicked = buttonRef.current && buttonRef.current.contains(event.target as Node);
        const isMenuClicked = ref.current && ref.current.contains(event.target as Node);

        if (!isButtonClicked && !isMenuClicked) {
          close();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ height: 0, width: 0 }}
      animate={{ height: 'auto', width: '256px' }}
      exit={{ height: 0, width: 0 }}
      transition={{ duration: 0.1 }}
      ref={ref}
      className='overflow-hidden absolute right-0 bottom-full mb-2 rounded-2xl border backdrop-blur-xl sm:left-1/2 sm:-transform sm:-translate-x-1/2 bg-primary border-primary'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='flex flex-col divide-y divide-primary text-start'
      >
        {pathname === '/calculator/all' && <AccountButton openAccountModal={openAccountModal} />}
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'px-4 py-3 relative transition-colors  whitespace-nowrap center-text hover:bg-primary text-primary-dark',
                isActive && 'text-primary'
              )}
              onClick={close}
            >
              {label}
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const OreResult = ({ pathname }: { pathname: string }) => {
  const { ores: maxOres } = useOresStore();
  const { ores: upgradeOres } = useUpgradeStore();

  return (
    <OreDisplay
      ores={pathname === '/calculator/single' ? upgradeOres : pathname === '/upgrades/all' ? maxOres : maxOres}
    />
  );
};

const OreDisplay = ({ ores }: { ores: Ores }) => {
  return (
    <div className='flex items-center justify-center gap-6 px-4 pt-[2px] overflow-hidden border rounded-full bg-primary border-primary backdrop-blur-xl max-sm:flex-1'>
      <div className='flex gap-2 items-center max-xs:flex-col max-xs:gap-1'>
        <Image src='/images/ores/Shiny.webp' alt='Shiny' width={24} height={24} className='object-contain' />
        {ores.shiny}
      </div>
      <div className='flex gap-2 items-center max-xs:flex-col max-xs:gap-1'>
        <Image src='/images/ores/Glowy.webp' alt='Glowy' width={24} height={24} className='object-contain' />
        {ores.glowy}
      </div>
      <div className='flex gap-2 items-center max-xs:flex-col max-xs:gap-1'>
        <Image src='/images/ores/Starry.webp' alt='Starry' width={24} height={24} className='object-contain' />
        {ores.starry}
      </div>
    </div>
  );
};

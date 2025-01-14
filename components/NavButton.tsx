'use client';

import { AccountModal } from '@/features/max-calculator';
import { sendGAEvent } from '@next/third-parties/google';
import { AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { NavMenu } from './NavMenu';

export const NavButton = ({ pathname }: { pathname: string }) => {
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
      <AnimatePresence>
        {isAccountModalOpen && pathname === '/all' && <AccountModal close={closeAccountModal} />}
      </AnimatePresence>
    </>
  );
};

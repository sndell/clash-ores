'use client';

import { useRef, useState } from 'react';
import { BackgroundOverlay } from '../elements/BackgroundOverlay';
import { AnimatePresence } from 'motion/react';
import { NavMenu } from './NavMenu';

export const NavButton = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const navButtonRef = useRef<HTMLButtonElement>(null);

  const closeNavMenu = () => setIsNavMenuOpen(false);
  const openNavMenu = () => {
    setIsNavMenuOpen(true);
    navigator.vibrate(20);
  };

  return (
    <button
      ref={navButtonRef}
      onClick={isNavMenuOpen ? closeNavMenu : openNavMenu}
      className='grid relative place-items-center p-4 rounded-full'
    >
      <AnimatePresence>{isNavMenuOpen && <NavMenu navButtonRef={navButtonRef} close={closeNavMenu} />}</AnimatePresence>
      <BackgroundOverlay className='rounded-full border border-primary' />
      <span className='icon-[solar--hamburger-menu-outline] text-2xl' />
    </button>
  );
};

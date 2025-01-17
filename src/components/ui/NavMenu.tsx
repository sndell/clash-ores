import { NAV_MENU_LINKS } from '@/constants';
import { cn } from '@/util/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface NavMenuProps {
  close: () => void;
  navButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export const NavMenu = ({ close, navButtonRef }: NavMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navButtonRef.current && menuRef.current) {
        const isButtonClicked = navButtonRef.current.contains(event.target as Node);
        const isMenuClicked = menuRef.current.contains(event.target as Node);

        if (isButtonClicked) navigator.vibrate(20);
        if (!isButtonClicked && !isMenuClicked) close();
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
      animate={{ height: 'auto', width: 'max-content' }}
      exit={{ height: 0, width: 0 }}
      transition={{ duration: 0.1, ease: 'anticipate' }}
      ref={menuRef}
      className='flex overflow-hidden absolute bottom-full z-10 flex-col mb-2 whitespace-nowrap rounded-xl border divide-y backdrop-blur-xl text-start max-sm:right-0 bg-black/50 border-primary divide-primary'
    >
      {NAV_MENU_LINKS.map(({ label, path }) => (
        <Link key={path} href={path} className={cn('py-3 px-4 hover:text-primary text-primary-dark', pathname === path && 'text-primary')}>
          {label}
        </Link>
      ))}
    </motion.div>
  );
};
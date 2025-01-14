'use client';

import { AccountButton } from '@/features/max-calculator';
import { cn } from '@/util/cn';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Homepage', href: '/' },
  { label: 'Single equipment', href: '/single' },
  { label: 'All equipments', href: '/all' },
  { label: 'Ore gain calculator', href: '/gain' },
];

export const NavMenu = ({
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
        {pathname === '/all' && <AccountButton openAccountModal={openAccountModal} />}
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

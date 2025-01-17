import Link from 'next/link';
import { LANDING_NAV_LINKS } from '@/constants';
import { cn } from '@/util/cn';

export const LandingNav = () => {
  return (
    <div className='p-3 space-y-3'>
      {LANDING_NAV_LINKS.map(({ label, path, image }) => (
        <Link
          href={path}
          key={label}
          className={cn('block overflow-hidden relative text-center bg-center bg-cover rounded-xl border-2 border-black/30', image)}
        >
          <div className='flex gap-2 justify-center items-center py-4 bg-black/60 max-sm:text-sm'>
            <span className='center-text drop-shadow-xs'>{label}</span>
            <span className='icon-[solar--arrow-right-bold] text-xl' />
          </div>
        </Link>
      ))}
    </div>
  );
};

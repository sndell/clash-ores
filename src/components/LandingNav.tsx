import Link from 'next/link';
import { LANDING_NAV_LINKS } from '@/constants';
import { cn } from '@/utils/cn';

export const LandingNav = () => {
	return (
		<div className='space-y-3 p-3'>
			{LANDING_NAV_LINKS.map(({ label, path, image }) => (
				<Link
					href={path}
					key={label}
					className={cn('relative block overflow-hidden rounded-xl border-2 border-black/30 bg-cover bg-center text-center', image)}
				>
					<div className='flex items-center justify-center gap-2 bg-black/60 py-4 max-sm:text-sm'>
						<span className='center-text drop-shadow-xs'>{label}</span>
						<span className='icon-[solar--arrow-right-bold] text-xl' />
					</div>
				</Link>
			))}
		</div>
	);
};

import { BackgroundOverlay } from '@/components/elements/BackgroundOverlay';
import { HeroGrid } from '@/features/max-calculator';

export default function Page() {
	return (
		<div className='relative flex h-dvh flex-col items-center justify-center overflow-hidden bg-first bg-cover bg-center'>
			<BackgroundOverlay />
			<HeroGrid />
		</div>
	);
}

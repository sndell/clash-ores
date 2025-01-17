import { BackgroundOverlay } from '@/components/elements/BackgroundOverlay';
import { HeroGrid } from '@/features/max-calculator';

export default function Page() {
  return (
    <div className='flex overflow-hidden relative flex-col justify-center items-center bg-center bg-cover h-dvh bg-first'>
      <BackgroundOverlay />
      <HeroGrid />
    </div>
  );
}

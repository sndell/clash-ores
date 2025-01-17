import { BackgroundOverlay } from '../elements/BackgroundOverlay';
import { OreResult } from './OreResult';

export const BottomDock = () => {
  return (
    <div className='flex fixed bottom-0 gap-2 justify-center px-2 mb-2 w-full'>
      <OreResult />
      <button className='grid overflow-hidden relative place-items-center p-4 rounded-full border border-primary'>
        <BackgroundOverlay />
        <span className='icon-[solar--hamburger-menu-outline] text-2xl' />
      </button>
    </div>
  );
};

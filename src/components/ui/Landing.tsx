import { LandingHeader } from './LandingHeader';
import { LandingNav } from './LandingNav';
import { LandingFooter } from './LandingFooter';

export const Landing = () => {
  return (
    <div className='background-pattern grid h-dvh grid-rows-[1fr_auto_1fr] justify-center'>
      <LandingHeader />
      <LandingNav />
      <LandingFooter />
    </div>
  );
};

import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex relative flex-col halftone h-dvh'>
      {/* <div className='absolute inset-0 backdrop-blur-sm h-dvh bg-primary' /> */}
      <div className='grid relative  grid-rows-[1fr_auto_1fr] place-items-center h-full'>
        <Hero />
        <Links />
        {/* <div className='fixed bottom-3'>Made by sndell</div> */}
      </div>
    </div>
  );
}

const Hero = () => (
  <div className='flex flex-col gap-2 px-3 py-3 text-center'>
    <h1>Clash of Clans Calculator: Equipment tools</h1>
    <p className='text-sm text-primary-dark'>
      Calculate ores to max all equipments, a single equipment or how many ores you can get per day
    </p>
  </div>
);

const Links = () => (
  <div className='grid grid-cols-1 gap-3 px-3 w-full max-w-5xl'>
    <Link
      href='/calculator/all'
      className='bg-center bg-cover rounded-xl border-2 backdrop-blur-xl bg-primary border-black/30 bg-background1'
    >
      <div className='py-4   rounded-[10px]  bg-black/50 w-full'>
        <div className='drop-shadow-[0_2px_1px_rgb(0,0,0)] flex items-center justify-center gap-2'>
          Calculate ores to max all equipment <span className='icon-[solar--arrow-right-linear] text-xl' />
        </div>
      </div>
    </Link>
    <Link
      href='/calculator/single'
      className='bg-center bg-cover rounded-xl border-2 backdrop-blur-xl bg-primary border-white/10 bg-background2'
    >
      <div className='justify-center py-4 w-full rounded-xl bg-black/10'>
        <div className='drop-shadow-[0_2px_1px_rgb(0,0,0)] flex items-center  justify-center gap-2'>
          Calculate ores for a equipment <span className='icon-[solar--arrow-right-linear] text-xl' />
        </div>
      </div>
    </Link>
  </div>
);

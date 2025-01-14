import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex relative flex-col bg-center bg-cover bg-stone-800 h-dvh'>
      <div className='absolute inset-0 backdrop-blur-sm h-dvh bg-primary' />
      <div className='grid relative place-items-center h-full'>
        <div className='grid grid-cols-1 gap-3 px-3 w-full max-w-5xl'>
          <Link
            href='/calculator/all'
            className='bg-center bg-cover rounded-xl border-2 backdrop-blur-xl bg-primary border-black/30 bg-background1'
          >
            <div className='py-4 flex items-center justify-center gap-2 rounded-xl drop-shadow-[0_2px_1px_rgb(0,0,0)] bg-black/30 w-full'>
              Calculate ores to max all equipment <span className='icon-[solar--arrow-right-linear] text-xl' />
            </div>
          </Link>
          <Link
            href='/calculator/single'
            className='bg-center bg-cover rounded-xl border-2 backdrop-blur-xl bg-primary border-white/10 bg-background2'
          >
            <div className='py-4 flex items-center justify-center gap-2 rounded-xl drop-shadow-[0_2px_1px_rgb(0,0,0)] bg-black/10 w-full'>
              Calculate ores for a equipment <span className='icon-[solar--arrow-right-linear] text-xl' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

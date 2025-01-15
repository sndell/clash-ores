import { GainCalculatorForm } from '@/features/gain-calculator';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ore Calculator - Gain',
  description: 'Enter your details and calculate how many ores you can gain per week.',
};

export default function Page() {
  return (
    <div className='flex flex-col justify-evenly items-center px-3 pt-3 pb-20 bg-center bg-cover h-dvh bg-background3'>
      <div className='absolute inset-0 backdrop-blur-sm h-dvh bg-primary' />
      <GainCalculatorForm />
    </div>
  );
}

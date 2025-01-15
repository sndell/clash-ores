import { UpgradeCalculatorForm } from '@/features/upgrade-calculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ore Calculator - Single',
  description: 'Specify rarity and levels to calculate ores for a single equipment.',
};

export default function Page() {
  return (
    <div className='grid place-items-center px-3 pt-3 bg-center bg-cover pb-19 h-dvh bg-background2'>
      <div className='absolute inset-0 backdrop-blur-sm h-dvh bg-primary' />
      <UpgradeCalculatorForm />
    </div>
  );
}

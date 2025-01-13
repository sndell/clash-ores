'use client';

import { useState, useEffect } from 'react';
import { useUpgradeStore } from '../stores/upgrade';

export const UpgradeCalculatorForm = () => {
  const [selectedRarity, setSelectedRarity] = useState<'common' | 'epic'>('common');
  const [minLevel, setMinLevel] = useState(0);
  const [maxLevel, setMaxLevel] = useState(0);
  const maxValue = selectedRarity === 'common' ? 18 : 27;

  const { calculateOres } = useUpgradeStore();

  const updateLevel = (newLevel: number, mode: 'min' | 'max') => {
    const validLevel = Math.min(Math.max(0, Number(newLevel)), maxValue);
    if (mode === 'min') setMinLevel(validLevel);
    else setMaxLevel(validLevel);
  };

  const updateRarity = (rarity: 'common' | 'epic') => {
    setSelectedRarity(rarity);
    if (rarity === 'common') {
      if (maxLevel > 18) setMaxLevel(18);
      else if (minLevel > 18) setMinLevel(18);
    }
  };

  useEffect(() => {
    calculateOres(selectedRarity, Number(minLevel), Number(maxLevel));
  }, [minLevel, maxLevel, selectedRarity, calculateOres]);

  return (
    <div className='flex overflow-hidden relative flex-col justify-center space-y-3 w-full h-full sm:max-w-96'>
      <div className='p-3 rounded-2xl border backdrop-blur-xl bg-primary border-primary'>
        <div className='pt-3 pb-6 space-y-1 text-center center-text'>
          <h1>Upgrade cost calculator</h1>
          <p className='text-sm text-center text-primary-dark'>
            Enter the rarity and level range of the equipment you want to upgrade
          </p>
        </div>
        <div>
          <div className='p-3 pb-2 text-xs center-text text-primary-dark'>Equipment Rarity</div>
          <div className='flex flex-col gap-2 p-3 pt-0'>
            <label className='flex gap-3 items-center'>
              <input
                type='radio'
                name='rarity'
                value='common'
                checked={selectedRarity === 'common'}
                onChange={() => updateRarity('common')}
              />
              Common
            </label>
            <label className='flex gap-3 items-center'>
              <input
                type='radio'
                name='rarity'
                value='epic'
                checked={selectedRarity === 'epic'}
                onChange={() => updateRarity('epic')}
              />
              Epic
            </label>
          </div>
        </div>
        <div className='pb-3'>
          <div className='p-3 pb-2 text-xs center-text text-primary-dark'>Level range (0-{maxValue})</div>
          <div className='grid grid-cols-[1fr_auto_1fr] items-center'>
            <div className='px-3'>
              <input
                type='number'
                placeholder='0'
                value={minLevel.toString()}
                onChange={(e) => updateLevel(Number(e.target.value), 'min')}
                className='px-3 py-1 w-full rounded-full border text-secondary placeholder:text-primary-light border-secondary'
              />
            </div>
            <span className='text-xs'>to</span>
            <div className='px-3'>
              <input
                type='number'
                placeholder={maxValue.toString()}
                value={maxLevel.toString()}
                onChange={(e) => updateLevel(Number(e.target.value), 'max')}
                className='px-3 py-1 w-full rounded-full border text-secondary placeholder:text-primary-light border-secondary'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

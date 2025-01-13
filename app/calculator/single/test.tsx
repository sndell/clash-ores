'use client';

import { equipmentCost } from '@/data';
import { cn } from '@/util/cn';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [selectedRarity, setSelectedRarity] = useState<'common' | 'epic'>('common');

  return (
    <div id="single-page" className="h-dvh grid-place-content-center">
      <div className="absolute inset-0 h-dvh bg-primary backdrop-blur-sm" />
      <div className="relative grid h-full mx-2 overflow-hidden place-items-center">
        <div className="flex flex-col w-full h-full pt-3 pb-20 space-y-3 overflow-hidden sm:max-w-96">
          <div className="border bg-primary backdrop-blur-xl border-primary rounded-2xl">
            <div className="py-3 text-sm text-center border-b border-primary center-text">Select equipment rarity</div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 p-3">
              <button
                onClick={() => setSelectedRarity('common')}
                className={cn(
                  'bg-gradient-to-t from-blue-600 to-blue-400 p-[3px] rounded-full transition-all',
                  selectedRarity !== 'common' && 'grayscale'
                )}
              >
                <div className="p-2 rounded-full bg-gradient-to-b from-blue-600 via-blue-500 via-30% to-blue-400">
                  <span className="drop-shadow-[0px_3px_0px_rgb(0,0,0)]">Common</span>
                </div>
              </button>
              <div>or</div>
              <button
                onClick={() => setSelectedRarity('epic')}
                className={cn(
                  'bg-gradient-to-t from-fuchsia-700 to-fuchsia-500 p-[3px] rounded-full transition-all',
                  selectedRarity !== 'epic' && 'grayscale'
                )}
              >
                <div className="p-2 rounded-full bg-gradient-to-b from-fuchsia-700 to-fuchsia-500">
                  <span className="drop-shadow-[0px_3px_0px_rgb(0,0,0)]">Epic</span>
                </div>
              </button>
            </div>
          </div>
          <div className="overflow-hidden border bg-primary backdrop-blur-xl border-primary rounded-2xl">
            <div className="py-3 text-sm text-center border-b clear-start border-primary center-text">Enter equipment level</div>
            <div className="grid items-center grid-cols-2 gap-2 p-3">
              <label className="text-sm text-center text-primary-dark">
                From
                <input type="text" placeholder="0" className="w-full px-4 py-2 rounded-full placeholder:text-primary-light" />
              </label>

              <label className="text-sm text-center text-primary-dark">
                To
                <input
                  type="text"
                  placeholder={`${selectedRarity === 'common' ? 18 : 27}`}
                  className="w-full px-4 py-2 rounded-full placeholder:text-primary-light"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col flex-1 h-full overflow-hidden border bg-primary border-primary rounded-2xl backdrop-blur-3xl">
            <div
              className={cn(
                'p-3 center-text grid gap-2 ',
                selectedRarity === 'epic' ? 'grid-cols-[1fr_1fr_80px]' : 'grid-cols-[1fr_80px]'
              )}
            >
              <div className="flex items-center gap-1">
                <Image src="/images/ores/Shiny.webp" alt="Shiny ore" width={20} height={20} />
                Shiny
              </div>
              <div className={cn('flex items-center gap-1', selectedRarity === 'common' && 'justify-end')}>
                <Image src="/images/ores/Glowy.webp" alt="Glowy ore" width={20} height={20} />
                Glowy
              </div>
              {selectedRarity === 'epic' && (
                <div className="flex items-center justify-end gap-1">
                  <Image src="/images/ores/Starry.webp" alt="Starry ore" width={20} height={20} />
                  Starry
                </div>
              )}
            </div>
            <div className="flex-1 overflow-auto scrollbar-slim">
              {equipmentCost[selectedRarity].map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'grid  py-2 px-3 odd:bg-primary',
                    selectedRarity === 'epic' ? 'grid-cols-[1fr_1fr_40px]' : 'grid-cols-[1fr_40px]'
                  )}
                >
                  <div className="flex items-center gap-1">
                    <span className="w-6 text-sm text-primary-dark">{index + 1}</span>
                    {item.shiny}
                  </div>
                  <div className={cn(selectedRarity === 'common' && 'text-end')}>{item.glowy}</div>
                  {selectedRarity === 'epic' && <div className="text-end">{item.starry}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

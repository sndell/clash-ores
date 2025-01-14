'use client';

import { cn } from '@/util/cn';
import Image from 'next/image';
import { useState } from 'react';

// Types
type OreType = 'shiny' | 'glowy' | 'starry';
type OreValues = Record<OreType, number>;

interface OreConfig {
  values: number[];
  cost: number;
}

interface LeagueTier {
  maxTrophies: number;
  name: string;
}

// Constants
const ORE_CONFIG_MEDALS: Record<OreType, OreConfig> = {
  shiny: { values: [0, 500, 1000], cost: 350 },
  glowy: { values: [0, 50, 100], cost: 300 },
  starry: { values: [0, 5, 10], cost: 350 },
} as const;

const ORE_CONFIG_GEMS: Record<OreType, OreConfig> = {
  shiny: { values: [0, 300, 600, 900, 1200, 1500], cost: 150 },
  glowy: { values: [0, 60, 120], cost: 150 },
  starry: { values: [0, 15], cost: 275 },
} as const;

const LEAGUE_TIERS: LeagueTier[] = [
  { maxTrophies: 500, name: 'Bronze3' },
  { maxTrophies: 600, name: 'Bronze2' },
  { maxTrophies: 800, name: 'Bronze1' },
  { maxTrophies: 1000, name: 'Silver3' },
  { maxTrophies: 1200, name: 'Silver2' },
  { maxTrophies: 1400, name: 'Silver1' },
  { maxTrophies: 1600, name: 'Gold3' },
  { maxTrophies: 1800, name: 'Gold2' },
  { maxTrophies: 2000, name: 'Gold1' },
  { maxTrophies: 2200, name: 'Crystal3' },
  { maxTrophies: 2400, name: 'Crystal2' },
  { maxTrophies: 2600, name: 'Crystal1' },
  { maxTrophies: 2800, name: 'Master3' },
  { maxTrophies: 3000, name: 'Master2' },
  { maxTrophies: 3200, name: 'Master1' },
  { maxTrophies: 3500, name: 'Champion3' },
  { maxTrophies: 3800, name: 'Champion2' },
  { maxTrophies: 4100, name: 'Champion1' },
  { maxTrophies: 4400, name: 'Titan3' },
  { maxTrophies: 4700, name: 'Titan2' },
  { maxTrophies: 5000, name: 'Titan1' },
] as const;

const INITIAL_ORE_VALUES: OreValues = {
  shiny: 0,
  glowy: 0,
  starry: 0,
};

const createRange = (start: number, length: number) => Array.from({ length }, (_, i) => i + start);
const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const GainCalculatorForm = () => {
  const [townHallValue, setTownHallValue] = useState(8);
  const [attacksValue, setAttacksValue] = useState(1);
  const [winRatioValue, setWinRatioValue] = useState(0);
  const [trophiesValue, setTrophiesValue] = useState(0);
  const [traderMedalValues, setTraderMedalValues] = useState<OreValues>(INITIAL_ORE_VALUES);
  const [traderGemValues, setTraderGemValues] = useState<OreValues>(INITIAL_ORE_VALUES);

  const townHallMarkers = createRange(8, 10);
  const attackMarkers = createRange(1, 7);

  const handleOreValueChange = (mode: 'medal' | 'gem') => (type: OreType) => (value: number) => {
    const setter = mode === 'medal' ? setTraderMedalValues : setTraderGemValues;
    setter((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className='overflow-auto relative w-full rounded-xl border backdrop-blur-xl scrollbar-slim bg-primary border-primary sm:max-w-96'>
      <header className='px-3 pt-6 pb-6 space-y-1 text-center'>
        <h1>Ore gain calculator</h1>
        <p className='text-sm text-primary-dark'>
          Enter the details below to calculate how many ores you can gain per week
        </p>
      </header>

      <div className='divide-y divide-primary'>
        <Category label='Current trophies'>
          <Slider
            value={trophiesValue}
            onChange={setTrophiesValue}
            min={0}
            max={5000}
            step={50}
            displayValue={(value) => <LeagueDisplay value={value} />}
          />
        </Category>

        <Category label='War target Town Hall'>
          <Slider value={townHallValue} onChange={setTownHallValue} min={8} max={17} markers={townHallMarkers} />
        </Category>

        <Category label='War attacks per week'>
          <Slider value={attacksValue} onChange={setAttacksValue} min={1} max={7} markers={attackMarkers} />
        </Category>

        <Category label='War win ratio'>
          <Slider
            value={winRatioValue}
            onChange={setWinRatioValue}
            min={0}
            max={1}
            step={0.01}
            displayValue={(value) => `${(value * 100).toFixed(0)}%`}
          />
        </Category>
        <Category label='Ores from Trader (raid medals)'>
          <div className='space-y-3'>
            {(Object.keys(traderMedalValues) as OreType[]).map((type) => (
              <Slider
                key={type}
                max={2}
                step={1}
                min={0}
                onChange={handleOreValueChange('medal')(type)}
                value={traderMedalValues[type]}
                displayValue={(value) => <ResourceDisplay value={value} type={type} mode='medal' />}
              />
            ))}
          </div>
        </Category>
        <Category label='Ores from Trader (gems)'>
          <div className='space-y-3'>
            {(Object.keys(traderGemValues) as OreType[]).map((type) => {
              const config = ORE_CONFIG_GEMS[type];
              return (
                <Slider
                  key={type}
                  max={config.values.length - 1}
                  min={0}
                  onChange={handleOreValueChange('gem')(type)}
                  value={traderGemValues[type]}
                  displayValue={(value) => <ResourceDisplay value={value} type={type} mode='gem' />}
                />
              );
            })}
          </div>
        </Category>
      </div>
    </div>
  );
};

type ResourceDisplayProps = {
  value: number;
  type: OreType;
  mode: 'medal' | 'gem';
};

const ResourceDisplay = ({ value, type, mode }: ResourceDisplayProps) => {
  const config = mode === 'medal' ? ORE_CONFIG_MEDALS : ORE_CONFIG_GEMS;
  const oreAmount = config[type].values[value];
  const cost = config[type].cost * value;
  const imageName = capitalizeFirst(type);

  return (
    <div className='flex gap-2 justify-center items-center'>
      <Image
        src={`/images/ores/${imageName}.webp`}
        alt={type}
        width={24}
        height={24}
        className='object-contain aspect-square'
      />
      {oreAmount}
      {value > 0 && (
        <>
          <Image
            src={`/images/misc/${mode === 'medal' ? 'Raid_Medal' : 'Gem'}.webp`}
            alt={mode === 'medal' ? 'Raid Medal' : 'Gem'}
            width={16}
            height={16}
            className='object-contain aspect-square'
          />
          <span className='text-sm text-primary-dark'>{cost}</span>
        </>
      )}
    </div>
  );
};

type LeagueDisplayProps = {
  value: number;
};

const LeagueDisplay = ({ value }: LeagueDisplayProps) => {
  const league = LEAGUE_TIERS.find((tier) => value < tier.maxTrophies) || { name: 'Legend' };

  return (
    <div className='flex gap-2 justify-center items-center'>
      <Image src={`/images/leagues/${league.name}.webp`} alt={league.name} width={32} height={32} />
      <span>{value}</span>
    </div>
  );
};

interface CategoryProps {
  label: string;
  children: React.ReactNode;
}

const Category = ({ children, label }: CategoryProps) => (
  <div className='px-6 py-3'>
    <div className='pb-1 text-xs text-primary-dark'>{label}</div>
    {children}
  </div>
);

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  markers?: number[];
  displayValue?: (value: number) => string | React.ReactNode;
};

const Slider = ({ value, onChange, min, max, step = 1, markers, displayValue }: SliderProps) => {
  const handleChange = (value: number) => {
    navigator.vibrate(30);
    onChange(value);
  };

  return (
    <div>
      <div className='relative'>
        <div className='absolute top-0 bottom-0 my-auto w-full h-2 rounded-r-full pointer-events-none bg-primary' />
        <div
          className='absolute top-0 bottom-0 my-auto h-2 rounded-l-full pointer-events-none bg-accent'
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
        <div
          className='absolute top-0 bottom-0 my-auto w-5 h-5 bg-white rounded-full pointer-events-none'
          style={{ left: `${((value - min) / (max - min)) * 95}%` }}
        />
        <input
          type='range'
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className='w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer'
        />
      </div>
      <div className='mt-1'>
        {markers ? (
          <div className='flex justify-between items-center px-1 w-full'>
            {markers.map((marker) => (
              <span
                key={marker}
                className={cn(
                  'flex justify-center items-center w-[6px] text-primary-dark',
                  marker === value && 'text-primary text-xl font-bold drop-shadow-[0_0px_2px_rgb(0,0,0)]'
                )}
              >
                {marker}
              </span>
            ))}
          </div>
        ) : (
          <div className='text-xl font-bold text-center'>{displayValue ? displayValue(value) : value}</div>
        )}
      </div>
    </div>
  );
};

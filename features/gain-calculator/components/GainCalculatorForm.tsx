'use client';

import Image from 'next/image';
import { LEAGUE_TIERS, ORE_CONFIG_GEMS, ORE_CONFIG_MEDALS } from '../constants';
import { capitalizeFirst, createRange } from '../utility';
import { useGainCalculator } from '../hooks/useGainCalculator';
import { Slider } from './Slider';

interface LeagueDisplayProps {
  value: number;
}

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
    <div className='text-xs text-primary-dark'>{label}</div>
    {children}
  </div>
);

interface ResourceDisplayProps {
  value: number;
  type: OreType;
  mode: 'medal' | 'gem';
}

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
        className='object-contain aspect-square '
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

export const GainCalculatorForm = () => {
  const { values, setters } = useGainCalculator();
  const townHallMarkers = createRange(8, 10);
  const attackMarkers = createRange(0, 8);

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
            value={values.trophies}
            onChange={setters.setTrophies}
            min={400}
            max={5000}
            step={50}
            displayValue={(value) => <LeagueDisplay value={value} />}
          />
        </Category>
        <Category label='War Town Hall'>
          <Slider value={values.townHall} onChange={setters.setTownHall} min={8} max={17} markers={townHallMarkers} />
        </Category>
        <Category label='War attacks per week'>
          <Slider value={values.attacks} onChange={setters.setAttacks} min={0} max={7} markers={attackMarkers} />
        </Category>
        <Category label='War win ratio'>
          <Slider
            value={values.winRatio}
            onChange={setters.setWinRatio}
            min={0}
            max={1}
            step={0.01}
            displayValue={(value) => `${(value * 100).toFixed(0)}%`}
          />
        </Category>
        <Category label='Ores from Trader (raid medals)'>
          <div className='space-y-3'>
            {(Object.keys(values.traderMedal) as OreType[]).map((type) => (
              <Slider
                key={type}
                max={2}
                step={1}
                min={0}
                onChange={setters.handleOreValueChange('medal')(type)}
                value={values.traderMedal[type]}
                displayValue={(value) => <ResourceDisplay value={value} type={type} mode='medal' />}
              />
            ))}
          </div>
        </Category>
        <Category label='Ores from Trader (gems)'>
          <div className='space-y-3'>
            {(Object.keys(values.traderGem) as OreType[]).map((type) => {
              const config = ORE_CONFIG_GEMS[type];
              return (
                <Slider
                  key={type}
                  max={config.values.length - 1}
                  min={0}
                  onChange={setters.handleOreValueChange('gem')(type)}
                  value={values.traderGem[type]}
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

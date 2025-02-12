'use client';

import Image from 'next/image';
import { LEAGUE_TIERS, ORE_CONFIG_GEMS } from '../constants';
import { createRange } from '../utility';
import { useGainCalculator } from '../hooks/useGainCalculator';
import { Slider } from './Slider';
import { ResourceDisplay } from './RespurceDisplay';

const LeagueDisplay = ({ value }: { value: number }) => {
  const league = LEAGUE_TIERS.find((tier) => value < tier.maxTrophies) || { name: 'Legend' };

  return (
    <div className='flex gap-2 justify-center items-center'>
      <Image src={`/images/leagues/${league.name}.webp`} alt={league.name} width={32} height={32} />
      <span>{value}</span>
    </div>
  );
};

const Category = ({ children, label }: { label: string; children: React.ReactNode }) => (
  <div className='px-6 py-3'>
    <div className='text-xs text-primary-dark'>{label}</div>
    {children}
  </div>
);

export const GainCalculatorForm = () => {
  const { values, setters } = useGainCalculator();
  const townHallMarkers = createRange(8, 10);
  const attackMarkers = createRange(0, 8);

  return (
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
  );
};

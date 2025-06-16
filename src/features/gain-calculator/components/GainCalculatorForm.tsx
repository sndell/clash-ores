"use client";

import Image from "next/image";
import { LEAGUE_TIERS, ORE_CONFIG_GEMS } from "../constants";
import { createRange } from "../util";
import { useGainStore } from "../stores/gainStore";
import { Slider } from "./Slider";
import { ResourceDisplay } from "./ResourceDisplay";

const LeagueDisplay = ({ value }: { value: number }) => {
  const league = LEAGUE_TIERS.find((tier) => value < tier.maxTrophies) || { name: "Legend" };
  return (
    <div className="flex gap-2 justify-center items-center">
      <Image src={`/images/leagues/${league.name}.webp`} alt={league.name} width={32} height={32} />
      <span>{value}</span>
    </div>
  );
};

const Category = ({ children, label }: { label: string; children: React.ReactNode }) => (
  <div className="px-6 py-3">
    <div className="text-xs text-primary-dark">{label}</div>
    {children}
  </div>
);

export const GainCalculatorForm = () => {
  const {
    trophies,
    townHall,
    attacks,
    winRatio,
    traderMedalValues,
    traderGemValues,
    setTrophies,
    setTownHall,
    setAttacks,
    setWinRatio,
    setTraderOres,
  } = useGainStore();

  const townHallMarkers = createRange(8, 10);
  const attackMarkers = createRange(0, 8);

  return (
    <div className="divide-y divide-primary">
      <Category label="Current trophies">
        <Slider
          value={trophies}
          onChange={setTrophies}
          min={400}
          max={5000}
          step={50}
          displayValue={(value) => <LeagueDisplay value={value} />}
        />
      </Category>

      <Category label="War Town Hall">
        <Slider value={townHall} onChange={setTownHall} min={8} max={17} markers={townHallMarkers} />
      </Category>

      <Category label="War attacks per week">
        <Slider value={attacks} onChange={setAttacks} min={0} max={7} markers={attackMarkers} />
      </Category>

      <Category label="War win ratio">
        <Slider
          value={winRatio}
          onChange={setWinRatio}
          min={0}
          max={1}
          step={0.01}
          displayValue={(value) => `${(value * 100).toFixed(0)}%`}
        />
      </Category>

      <Category label="Ores from Trader per week (raid medals)">
        <div className="space-y-3">
          {(Object.keys(traderMedalValues) as OreType[]).map((type) => (
            <Slider
              key={type}
              max={2}
              step={1}
              min={0}
              onChange={(value) => setTraderOres("medal", type, value)}
              value={traderMedalValues[type]}
              displayValue={(value) => <ResourceDisplay value={value} type={type} mode="medal" />}
            />
          ))}
        </div>
      </Category>

      <Category label="Ores from Trader per week (gems)">
        <div className="space-y-3">
          {(Object.keys(traderGemValues) as OreType[]).map((type) => {
            const config = ORE_CONFIG_GEMS[type];
            return (
              <Slider
                key={type}
                max={config.values.length - 1}
                min={0}
                onChange={(value) => setTraderOres("gem", type, value)}
                value={traderGemValues[type]}
                displayValue={(value) => <ResourceDisplay value={value} type={type} mode="gem" />}
              />
            );
          })}
        </div>
      </Category>
    </div>
  );
};

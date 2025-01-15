type OreType = 'shiny' | 'glowy' | 'starry';
type OreValues = Record<OreType, number>;

interface OreConfig {
  values: number[];
  cost: number;
}

type DailyOres = {
  shiny: number;
  glowy: number;
};

interface GainStore {
  ores: Ores;
  dailyOres: DailyOres;
  weeklyWarOres: Ores;
  weeklyTraderOresGem: Ores;
  weeklyTraderOresMedal: Ores;
  setDailyOres: (ores: DailyOres) => void;
  calculateWeeklyOres: () => void;
  setWeeklyTraderOresGem: (amount: number, type: OreType) => void;
  setWeeklyTraderOresMedal: (amount: number, type: OreType) => void;
  calculateWarOres: (warTargetTownHall: number, warAttacksPerWeek: number, warWinRatio: number) => void;
}

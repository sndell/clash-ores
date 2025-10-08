type OreType = "shiny" | "glowy" | "starry";
type OreValues = Record<OreType, number>;

interface OreConfig {
  values: number[];
  cost: number;
}

type DailyOres = {
  shiny: number;
  glowy: number;
  starry: number;
};

interface GainStore {
  // Calculated state
  ores: Ores;
  dailyOres: DailyOres;
  monthlyWarOres: Ores;
  monthlyTraderOresGem: Ores;
  monthlyTraderOresMedal: Ores;

  // Form state (persisted)
  league: number;
  townHall: number;
  attacks: number;
  winRatio: number;
  traderMedalValues: OreValues;
  traderGemValues: OreValues;

  // Actions
  calculateMonthlyOres: () => void;
  setLeague: (value: number) => void;
  setTownHall: (value: number) => void;
  setAttacks: (value: number) => void;
  setWinRatio: (value: number) => void;
  calculateWarOres: () => void;
  setTraderOres: (mode: "medal" | "gem", type: OreType, value: number) => void;
}

interface DaysToFinishStore {
  showDaysToFinish: boolean;
  toggleShowDaysToFinish: (value?: boolean) => void;
}

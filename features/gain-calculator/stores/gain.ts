import { create } from 'zustand';

type OreType = 'shiny' | 'glowy' | 'starry';

interface Ores {
  shiny: number;
  glowy: number;
  starry: number;
}

interface DailyOres {
  shiny: number;
  glowy: number;
}

interface UpgradeStore {
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

const ORES_PER_TH_WAR = {
  8: { shiny: 380, glowy: 15, starry: 0 },
  9: { shiny: 410, glowy: 18, starry: 0 },
  10: { shiny: 460, glowy: 21, starry: 3 },
  11: { shiny: 560, glowy: 24, starry: 3 },
  12: { shiny: 610, glowy: 27, starry: 4 },
  13: { shiny: 710, glowy: 30, starry: 4 },
  14: { shiny: 810, glowy: 33, starry: 5 },
  15: { shiny: 960, glowy: 36, starry: 5 },
  16: { shiny: 1110, glowy: 39, starry: 6 },
  17: { shiny: 1260, glowy: 39, starry: 6 },
} as const;

const INITIAL_ORES: Ores = {
  shiny: 0,
  glowy: 0,
  starry: 0,
} as const;

const INITIAL_DAILY_ORES: DailyOres = {
  shiny: 0,
  glowy: 0,
} as const;

const calculateOresPerAttack = (ore: number, warWinRatio: number): number => {
  const oresFromWins = ore * warWinRatio;
  const oresFromLosses = Math.floor(ore * 0.5 * (1 - warWinRatio));
  return Math.floor(oresFromWins + oresFromLosses);
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const calculateTotalWeeklyOres = (state: Omit<UpgradeStore, keyof Function>): Ores => ({
  shiny:
    state.dailyOres.shiny * 7 +
    state.weeklyWarOres.shiny +
    state.weeklyTraderOresGem.shiny +
    state.weeklyTraderOresMedal.shiny,
  glowy:
    state.dailyOres.glowy * 7 +
    state.weeklyWarOres.glowy +
    state.weeklyTraderOresGem.glowy +
    state.weeklyTraderOresMedal.glowy,
  starry: state.weeklyWarOres.starry + state.weeklyTraderOresGem.starry + state.weeklyTraderOresMedal.starry,
});

export const useGainStore = create<UpgradeStore>((set, get) => ({
  ores: INITIAL_ORES,
  dailyOres: INITIAL_DAILY_ORES,
  weeklyWarOres: INITIAL_ORES,
  weeklyTraderOresGem: INITIAL_ORES,
  weeklyTraderOresMedal: INITIAL_ORES,
  calculateWeeklyOres: () => {
    const totalOres = calculateTotalWeeklyOres(get());
    set((state) => ({ ...state, ores: totalOres }));
  },
  setDailyOres: (ores: DailyOres) => {
    set((state) => ({ ...state, dailyOres: ores }));
    get().calculateWeeklyOres();
  },
  calculateWarOres: (warTargetTownHall, warAttacksPerWeek, warWinRatio) => {
    const thOres = ORES_PER_TH_WAR[warTargetTownHall as keyof typeof ORES_PER_TH_WAR] ?? ORES_PER_TH_WAR[8];

    const weeklyWarOres: Ores = {
      shiny: calculateOresPerAttack(thOres.shiny, warWinRatio) * warAttacksPerWeek,
      glowy: calculateOresPerAttack(thOres.glowy, warWinRatio) * warAttacksPerWeek,
      starry: calculateOresPerAttack(thOres.starry, warWinRatio) * warAttacksPerWeek,
    };

    set((state) => ({ ...state, weeklyWarOres }));
    get().calculateWeeklyOres();
  },
  setWeeklyTraderOresGem: (amount: number, type: OreType) => {
    set((state) => ({
      ...state,
      weeklyTraderOresGem: {
        ...state.weeklyTraderOresGem,
        [type]: amount,
      },
    }));
    get().calculateWeeklyOres();
  },
  setWeeklyTraderOresMedal: (amount: number, type: OreType) => {
    set((state) => ({
      ...state,
      weeklyTraderOresMedal: {
        ...state.weeklyTraderOresMedal,
        [type]: amount,
      },
    }));
    get().calculateWeeklyOres();
  },
}));

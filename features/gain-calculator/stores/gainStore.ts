import { INITIAL_ORES } from '@/constants';
import { create } from 'zustand';
import { INITIAL_DAILY_ORES, ORES_PER_TH_WAR } from '../constants';
import { calculateOresPerAttack, calculateTotalWeeklyOres } from '../util';

export const useGainStore = create<GainStore>((set, get) => ({
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

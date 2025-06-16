"use client";

import {
  INITIAL_ORES,
  INITIAL_DAILY_ORES,
  LEAGUE_TIERS,
  ORES_PER_TH_WAR,
  ORE_CONFIG_GEMS,
  ORE_CONFIG_MEDALS,
} from "../constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateOresPerAttack, calculateTotalMonthlyOres } from "../util";

export const useGainStore = create<GainStore>()(
  persist(
    (set, get) => ({
      // State
      ores: INITIAL_ORES,
      dailyOres: INITIAL_DAILY_ORES,
      monthlyWarOres: INITIAL_ORES,
      monthlyTraderOresGem: INITIAL_ORES,
      monthlyTraderOresMedal: INITIAL_ORES,

      // Form values
      trophies: 400,
      townHall: 8,
      attacks: 0,
      winRatio: 0,
      traderMedalValues: INITIAL_ORES,
      traderGemValues: INITIAL_ORES,

      // Actions
      calculateMonthlyOres: () => {
        const totalOres = calculateTotalMonthlyOres(get());
        set({ ores: totalOres });
      },

      setTrophies: (value: number) => {
        const tier = LEAGUE_TIERS.find((tier) => value < tier.maxTrophies);
        set({
          trophies: value,
          dailyOres: tier?.ores || INITIAL_DAILY_ORES,
        });
        get().calculateMonthlyOres();
      },

      setTownHall: (value: number) => {
        set({ townHall: value });
        get().calculateWarOres();
      },

      setAttacks: (value: number) => {
        set({ attacks: value });
        get().calculateWarOres();
      },

      setWinRatio: (value: number) => {
        set({ winRatio: value });
        get().calculateWarOres();
      },

      calculateWarOres: () => {
        const { townHall, attacks, winRatio } = get();
        const thOres = ORES_PER_TH_WAR[townHall as keyof typeof ORES_PER_TH_WAR];

        const monthlyWarOres: Ores = {
          shiny: calculateOresPerAttack(thOres.shiny, winRatio, attacks * 4.33),
          glowy: calculateOresPerAttack(thOres.glowy, winRatio, attacks * 4.33),
          starry: calculateOresPerAttack(thOres.starry, winRatio, attacks * 4.33),
        };

        set({ monthlyWarOres });
        get().calculateMonthlyOres();
      },

      setTraderOres: (mode: "medal" | "gem", type: OreType, value: number) => {
        const config = mode === "medal" ? ORE_CONFIG_MEDALS : ORE_CONFIG_GEMS;
        const oreAmount = config[type].values[value] * 4.33; // Convert weekly to monthly

        if (mode === "medal")
          set((state) => ({
            traderMedalValues: { ...state.traderMedalValues, [type]: value },
            monthlyTraderOresMedal: { ...state.monthlyTraderOresMedal, [type]: oreAmount },
          }));
        else
          set((state) => ({
            traderGemValues: { ...state.traderGemValues, [type]: value },
            monthlyTraderOresGem: { ...state.monthlyTraderOresGem, [type]: oreAmount },
          }));

        get().calculateMonthlyOres();
      },
    }),
    {
      name: "gain-store",
      // Only persist form values, not calculated values
      partialize: (state) => ({
        trophies: state.trophies,
        townHall: state.townHall,
        attacks: state.attacks,
        winRatio: state.winRatio,
        traderMedalValues: state.traderMedalValues,
        traderGemValues: state.traderGemValues,
      }),
      // Recalculate everything when store is rehydrated
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Recalculate daily ores from trophies
          const tier = LEAGUE_TIERS.find((tier) => state.trophies < tier.maxTrophies);
          if (tier) {
            state.dailyOres = tier.ores;
          }

          // Recalculate war ores
          state.calculateWarOres();

          // Recalculate trader ores from values
          (Object.keys(state.traderMedalValues) as OreType[]).forEach((type) => {
            const value = state.traderMedalValues[type];
            const oreAmount = ORE_CONFIG_MEDALS[type].values[value] * 4.33;
            state.monthlyTraderOresMedal[type] = oreAmount;
          });

          (Object.keys(state.traderGemValues) as OreType[]).forEach((type) => {
            const value = state.traderGemValues[type];
            const oreAmount = ORE_CONFIG_GEMS[type].values[value] * 4.33;
            state.monthlyTraderOresGem[type] = oreAmount;
          });

          // Recalculate total monthly ores
          state.calculateMonthlyOres();
        }
      },
    }
  )
);

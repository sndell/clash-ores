import { equipmentCost } from "@/data";
import { create } from "zustand";

const INITIAL_ORES: Ores = {
  shiny: 0,
  glowy: 0,
  starry: 0,
};

type UpgradeStore = {
  ores: Ores;
  calculateOres: (rarity: "common" | "epic", startLevel: number, endLevel: number) => void;
};

export const useUpgradeStore = create<UpgradeStore>((set) => ({
  ores: { ...INITIAL_ORES },
  calculateOres: (rarity, startLevel, endLevel) => {
    const data = equipmentCost[rarity].slice(startLevel, endLevel + 1);
    const ores = data.reduce((total, ores) => {
      total.shiny += ores.shiny;
      total.glowy += ores.glowy;
      total.starry += ores.starry;
      return total;
    }, { ...INITIAL_ORES });
    set({ores})
  },
}));

import { INITIAL_ORES } from '@/constants';
import { equipmentCost } from '@/data/equipment';
import { create } from 'zustand';

export const useUpgradeStore = create<UpgradeStore>((set) => ({
  ores: { ...INITIAL_ORES },
  calculateOres: (rarity, startLevel, endLevel) => {
    const data = equipmentCost[rarity].slice(startLevel, endLevel + 1);
    const ores = data.reduce(
      (total, ores) => {
        total.shiny += ores.shiny;
        total.glowy += ores.glowy;
        total.starry += ores.starry;
        return total;
      },
      { ...INITIAL_ORES }
    );
    set({ ores });
  },
}));

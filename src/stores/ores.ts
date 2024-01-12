import { create } from 'zustand';
import { Equipment, Ore } from '../features/calculator/types';

export type Item = Pick<Equipment, 'name'> & { ores: Ore };

type OresStore = {
  items: Item[];
  ores: { shiny: number; glowy: number; starry: number };
  updateItem: (item: Item) => void;
  calculateOres: () => void;
};

export const useOresStore = create<OresStore>((set, get) => ({
  items: [],
  ores: { shiny: 0, glowy: 0, starry: 0 },
  calculateOres: () => {
    const items = get().items;
    const ores = items.reduce(
      (totals, ore) => {
        totals.shiny += ore.ores.shiny;
        totals.glowy += ore.ores.glowy;
        totals.starry += ore.ores.starry;
        return totals;
      },
      { shiny: 0, glowy: 0, starry: 0 }
    );
    set(() => ({ ores }));
  },
  updateItem: (item) => {
    set((state) => ({
      items: state.items.some((i) => i.name === item.name)
        ? state.items.map((i) =>
            i.name === item.name ? { name: item.name, ores: item.ores } : i
          )
        : [...state.items, { name: item.name, ores: item.ores }],
    }));
    get().calculateOres();
  },
}));

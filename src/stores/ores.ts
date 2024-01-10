import { create } from 'zustand';
import { Equipment, Ore } from '../features/calculator';

export type Item = Pick<Equipment, 'name'> & { ores: Ore };

type OresStore = {
  items: Item[];
  updateItem: (item: Item) => void;
};

export const useOresStore = create<OresStore>((set) => ({
  items: [],
  updateItem: (item) =>
    set((state) => ({
      items: state.items.some((i) => i.name === item.name)
        ? state.items.map((i) =>
            i.name === item.name ? { name: item.name, ores: item.ores } : i
          )
        : [...state.items, { name: item.name, ores: item.ores }],
    })),
}));

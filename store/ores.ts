import { create } from 'zustand';
import { equipmentCost } from '@/data/equipment';

const INITIAL_ORES: Ores = {
  shiny: 0,
  glowy: 0,
  starry: 0,
};

const calculateOres = (ores: Ores[]): Ores => {
  return ores.reduce(
    (total, ores) => {
      total.shiny += ores.shiny;
      total.glowy += ores.glowy;
      total.starry += ores.starry;
      return total;
    },
    { ...INITIAL_ORES }
  );
};

const calculateTotalOres = (items: Item[]): Ores => {
  return items.reduce(
    (totals, item) => ({
      shiny: totals.shiny + item.ores.shiny,
      glowy: totals.glowy + item.ores.glowy,
      starry: totals.starry + item.ores.starry,
    }),
    { ...INITIAL_ORES }
  );
};

export const useOresStore = create<OresStore>((set, get) => ({
  items: [],
  ores: { ...INITIAL_ORES },
  calculateOres: () => {
    const items = get().items;
    const ores = calculateTotalOres(items);
    set(() => ({ ores }));
  },
  updateItem: (item) => {
    const ores = equipmentCost[item.type].slice(item.level);

    const newItem = {
      name: item.name,
      ores: calculateOres(ores),
      level: item.level,
    };

    set((state) => ({
      items: state.items.some((i) => i.name === item.name)
        ? state.items.map((i) => (i.name === item.name ? newItem : i))
        : [...state.items, newItem],
    }));

    localStorage.setItem(`${item.name}_level`, item.level.toString());
    get().calculateOres();
  },
  loadItems: (items) => {
    items.forEach((item) => {
      const newItem = {
        name: item.name,
        type: item.maxLevel === 27 ? 'epic' : 'common',
        level: item.level,
      } as ItemUpdate;
      get().updateItem(newItem);
    });
  },
}));

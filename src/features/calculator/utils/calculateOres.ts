import { Ore } from '../types';

export const calculateOres = (data: Ore[], startIndex: number) => {
  const ores = data.slice(startIndex).reduce(
    (totals, ore) => {
      totals.shiny += ore.shiny;
      totals.glowy += ore.glowy;
      totals.starry += ore.starry;
      return totals;
    },
    { shiny: 0, glowy: 0, starry: 0 }
  );

  return ores;
};

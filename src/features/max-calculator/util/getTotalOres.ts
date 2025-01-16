import { equipmentCost } from '@/data';
import { allEquipment } from '../data';
import { INITIAL_ORES } from '@/constants';

export const getTotalOres = () => {
  return allEquipment.reduce((total, equipment) => {
    const levels = equipmentCost[equipment.rarity];
    const ores = levels.reduce((total, level) => {
      return {
        shiny: total.shiny + level.shiny,
        glowy: total.glowy + level.glowy,
        starry: total.starry + level.starry,
      };
    }, INITIAL_ORES);
    return {
      shiny: total.shiny + ores.shiny,
      glowy: total.glowy + ores.glowy,
      starry: total.starry + ores.starry,
    };
  }, INITIAL_ORES);
};

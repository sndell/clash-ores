type Equipment = {
  name: string;
  rarity: 'common' | 'epic';
  imageUrl: string;
};

interface EquipmentStore {
  levels: {
    [key: string]: number;
  };
  equipmentOres: {
    [key: string]: Ores
  }
  remainingOres: Ores;
  totalOres: Ores;
  updateLevel: (name: string, level: number, maxLevel: number, rarity: string) => void;
  updateEquipmentOres: (name: string, level: number, rarity: string) => void;
  calculateAllOres: () => void;
}
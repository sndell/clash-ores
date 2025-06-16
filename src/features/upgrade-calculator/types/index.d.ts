// store type
interface UpgradeStore {
  ores: Ores;
  calculateOres: (rarity: 'common' | 'epic', startLevel: number, endLevel: number) => void;
}

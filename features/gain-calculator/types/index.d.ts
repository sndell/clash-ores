type OreType = 'shiny' | 'glowy' | 'starry';
type OreValues = Record<OreType, number>;

interface OreConfig {
  values: number[];
  cost: number;
}

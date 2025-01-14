export const ORE_CONFIG_MEDALS: Record<OreType, OreConfig> = {
  shiny: { values: [0, 500, 1000], cost: 350 },
  glowy: { values: [0, 50, 100], cost: 300 },
  starry: { values: [0, 5, 10], cost: 350 },
} as const;

export const ORE_CONFIG_GEMS: Record<OreType, OreConfig> = {
  shiny: { values: [0, 300, 600, 900, 1200, 1500], cost: 150 },
  glowy: { values: [0, 60, 120], cost: 150 },
  starry: { values: [0, 15], cost: 275 },
} as const;

export const LEAGUE_TIERS = [
  { maxTrophies: 500, name: 'Bronze3', ores: { shiny: 125, glowy: 6 } },
  { maxTrophies: 600, name: 'Bronze2', ores: { shiny: 175, glowy: 7 } },
  { maxTrophies: 800, name: 'Bronze1', ores: { shiny: 175, glowy: 8 } },
  { maxTrophies: 1000, name: 'Silver3', ores: { shiny: 200, glowy: 9 } },
  { maxTrophies: 1200, name: 'Silver2', ores: { shiny: 250, glowy: 10 } },
  { maxTrophies: 1400, name: 'Silver1', ores: { shiny: 275, glowy: 11 } },
  { maxTrophies: 1600, name: 'Gold3', ores: { shiny: 300, glowy: 12 } },
  { maxTrophies: 1800, name: 'Gold2', ores: { shiny: 325, glowy: 14 } },
  { maxTrophies: 2000, name: 'Gold1', ores: { shiny: 350, glowy: 16 } },
  { maxTrophies: 2200, name: 'Crystal3', ores: { shiny: 375, glowy: 18 } },
  { maxTrophies: 2400, name: 'Crystal2', ores: { shiny: 400, glowy: 20 } },
  { maxTrophies: 2600, name: 'Crystal1', ores: { shiny: 425, glowy: 22 } },
  { maxTrophies: 2800, name: 'Master3', ores: { shiny: 450, glowy: 24 } },
  { maxTrophies: 3000, name: 'Master2', ores: { shiny: 500, glowy: 26 } },
  { maxTrophies: 3200, name: 'Master1', ores: { shiny: 525, glowy: 28 } },
  { maxTrophies: 3500, name: 'Champion3', ores: { shiny: 550, glowy: 30 } },
  { maxTrophies: 3800, name: 'Champion2', ores: { shiny: 625, glowy: 34 } },
  { maxTrophies: 4100, name: 'Champion1', ores: { shiny: 700, glowy: 38 } },
  { maxTrophies: 4400, name: 'Titan3', ores: { shiny: 775, glowy: 42 } },
  { maxTrophies: 4700, name: 'Titan2', ores: { shiny: 850, glowy: 46 } },
  { maxTrophies: 5000, name: 'Titan1', ores: { shiny: 925, glowy: 50 } },
  { maxTrophies: 9999, name: 'Legend', ores: { shiny: 1000, glowy: 54 } },
] as const;

export const INITIAL_ORE_VALUES: OreValues = {
  shiny: 0,
  glowy: 0,
  starry: 0,
};

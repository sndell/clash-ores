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

// export const LEAGUE_TIERS = [
//   { maxTrophies: 500, name: "Bronze3", ores: { shiny: 125, glowy: 6 } },
//   { maxTrophies: 600, name: "Bronze2", ores: { shiny: 175, glowy: 7 } },
//   { maxTrophies: 800, name: "Bronze1", ores: { shiny: 175, glowy: 8 } },
//   { maxTrophies: 1000, name: "Silver3", ores: { shiny: 200, glowy: 9 } },
//   { maxTrophies: 1200, name: "Silver2", ores: { shiny: 250, glowy: 10 } },
//   { maxTrophies: 1400, name: "Silver1", ores: { shiny: 275, glowy: 11 } },
//   { maxTrophies: 1600, name: "Gold3", ores: { shiny: 300, glowy: 12 } },
//   { maxTrophies: 1800, name: "Gold2", ores: { shiny: 325, glowy: 14 } },
//   { maxTrophies: 2000, name: "Gold1", ores: { shiny: 350, glowy: 16 } },
//   { maxTrophies: 2200, name: "Crystal3", ores: { shiny: 375, glowy: 18 } },
//   { maxTrophies: 2400, name: "Crystal2", ores: { shiny: 400, glowy: 20 } },
//   { maxTrophies: 2600, name: "Crystal1", ores: { shiny: 425, glowy: 22 } },
//   { maxTrophies: 2800, name: "Master3", ores: { shiny: 450, glowy: 24 } },
//   { maxTrophies: 3000, name: "Master2", ores: { shiny: 500, glowy: 26 } },
//   { maxTrophies: 3200, name: "Master1", ores: { shiny: 525, glowy: 28 } },
//   { maxTrophies: 3500, name: "Champion3", ores: { shiny: 550, glowy: 30 } },
//   { maxTrophies: 3800, name: "Champion2", ores: { shiny: 625, glowy: 34 } },
//   { maxTrophies: 4100, name: "Champion1", ores: { shiny: 700, glowy: 38 } },
//   { maxTrophies: 4400, name: "Titan3", ores: { shiny: 775, glowy: 42 } },
//   { maxTrophies: 4700, name: "Titan2", ores: { shiny: 850, glowy: 46 } },
//   { maxTrophies: 5000, name: "Titan1", ores: { shiny: 925, glowy: 50 } },
//   { maxTrophies: 9999, name: "Legend", ores: { shiny: 1000, glowy: 54 } },
// ] as const;

export const LEAGUE_TIERS = [
  {name: "Unranked", ores: { shiny: 0, glowy: 0, starry: 0 }, image_name: "unranked"},
  {name: "Skeleton 1", ores: { shiny: 300, glowy: 20, starry: 0 }, image_name: "skeleton"},
  {name: "Skeleton 2", ores: { shiny: 325, glowy: 21, starry: 0 }, image_name: "skeleton"},
  {name: "Skeleton 3", ores: { shiny: 350, glowy: 22, starry: 0 }, image_name: "skeleton"},
  {name: "Barbarian 4", ores: { shiny: 375, glowy: 23, starry: 0 }, image_name: "barbarian"},
  {name: "Barbarian 5", ores: { shiny: 400, glowy: 24, starry: 0 }, image_name: "barbarian"},
  {name: "Barbarian 6", ores: { shiny: 425, glowy: 25, starry: 0 }, image_name: "barbarian"},
  {name: "Archer 7", ores: { shiny: 450, glowy: 27, starry: 0 }, image_name: "archer"},
  {name: "Archer 8", ores: { shiny: 475, glowy: 27, starry: 1 }, image_name: "archer"},
  {name: "Archer 9", ores: { shiny: 500, glowy: 29, starry: 1 }, image_name: "archer"},
  {name: "Wizard 10", ores: { shiny: 525, glowy: 31, starry: 1 }, image_name: "wizard"},
  {name: "Wizard 11", ores: { shiny: 550, glowy: 33, starry: 1 }, image_name: "wizard"},
  {name: "Wizard 12", ores: { shiny: 575, glowy: 35, starry: 1 }, image_name: "wizard"},
  {name: "Valkyrie 13", ores: { shiny: 600, glowy: 37, starry: 1 }, image_name: "valkyrie"},
  {name: "Valkyrie 14", ores: { shiny: 625, glowy: 39, starry: 1 }, image_name: "valkyrie"},
  {name: "Valkyrie 15", ores: { shiny: 650, glowy: 41, starry: 1 }, image_name: "valkyrie"},
  {name: "Witch 16", ores: { shiny: 675, glowy: 43, starry: 1 }, image_name: "witch"},
  {name: "Witch 17", ores: { shiny: 725, glowy: 45, starry: 1 }, image_name: "witch"},
  {name: "Witch 18", ores: { shiny: 775, glowy: 47, starry: 1 }, image_name: "witch"},
  {name: "Golem 19", ores: { shiny: 825, glowy: 49, starry: 1 }, image_name: "golem"},
  {name: "Golem 20", ores: { shiny: 875, glowy: 51, starry: 1 }, image_name: "golem"},
  {name: "Golem 21", ores: { shiny: 900, glowy: 53, starry: 1 }, image_name: "golem"},
  {name: "Pekka 22", ores: { shiny: 925, glowy: 54, starry: 1 }, image_name: "pekka"},
  {name: "Pekka 23", ores: { shiny: 950, glowy: 55, starry: 1 }, image_name: "pekka"},
  {name: "Pekka 24", ores: { shiny: 963, glowy: 56, starry: 1 }, image_name: "pekka"},
  {name: "Titan 25", ores: { shiny: 1000, glowy: 57, starry: 1 }, image_name: "titan"},
  {name: "Titan 26", ores: { shiny: 1010, glowy: 58, starry: 1 }, image_name: "titan"},
  {name: "Titan 27", ores: { shiny: 1020, glowy: 59, starry: 1 }, image_name: "titan"},
  {name: "Dragon 28", ores: { shiny: 1030, glowy: 60, starry: 1 }, image_name: "dragon"},
  {name: "Dragon 29", ores: { shiny: 1040, glowy: 61, starry: 1 }, image_name: "dragon"},
  {name: "Dragon 30", ores: { shiny: 1050, glowy: 62, starry: 1 }, image_name: "dragon"},
  {name: "Electro 31", ores: { shiny: 1060, glowy: 62, starry: 2 }, image_name: "electro"},
  {name: "Electro 32", ores: { shiny: 1070, glowy: 63, starry: 2 }, image_name: "electro"},
  {name: "Electro 33", ores: { shiny: 1080, glowy: 64, starry: 2 }, image_name: "electro"},
  {name: "Legend", ores: { shiny: 1100, glowy: 65, starry: 2 }, image_name: "legend"},
] as const;

export const ORES_PER_TH_WAR = {
  8: { shiny: 380, glowy: 15, starry: 0 },
  9: { shiny: 410, glowy: 18, starry: 0 },
  10: { shiny: 460, glowy: 21, starry: 3 },
  11: { shiny: 560, glowy: 24, starry: 3 },
  12: { shiny: 610, glowy: 27, starry: 4 },
  13: { shiny: 710, glowy: 30, starry: 4 },
  14: { shiny: 810, glowy: 33, starry: 5 },
  15: { shiny: 960, glowy: 36, starry: 5 },
  16: { shiny: 1110, glowy: 39, starry: 6 },
  17: { shiny: 1260, glowy: 39, starry: 6 },
} as const;

export const INITIAL_DAILY_ORES: DailyOres = {
  shiny: 0,
  glowy: 0,
  starry: 0,
} as const;

export const INITIAL_ORES: Ores = {
  shiny: 0,
  glowy: 0,
  starry: 0,
};

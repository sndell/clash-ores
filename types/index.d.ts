type Ores = {
  shiny: number;
  glowy: number;
  starry: number;
};

type Equipment = {
  name: string;
  type: 'common' | 'epic';
  imageUrl: string;
};

// Store types
type ItemUpdate = Pick<Equipment, 'name' | 'type'> & { level: number };

type Item = Pick<Equipment, 'name'> & { ores: Ores; level: number };

type OresStore = {
  items: Item[];
  ores: Ores;
  updateItem: (item: ItemUpdate) => void;
  calculateOres: () => void;
  loadItems: (items: HeroEquipment[]) => void;
};

// Clash Api Types
type IconUrls = {
  small: string;
  medium: string;
  large?: string;
  tiny?: string;
};

type Label = {
  id: number;
  name: string;
  iconUrls: IconUrls;
};

type BadgeUrls = {
  small: string;
  medium: string;
  large: string;
};

type League = {
  id: number;
  name: string;
  iconUrls: IconUrls;
};

type BuilderBaseLeague = {
  id: number;
  name: string;
};

type Clan = {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: BadgeUrls;
};

type Season = {
  id: string;
  rank: number;
  trophies: number;
};

type LegendStatistics = {
  legendTrophies: number;
  bestSeason: Season;
  previousBuilderBaseSeason: Season;
  bestBuilderBaseSeason: Season;
  currentSeason: {
    trophies: number;
  };
};

type Achievement = {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
  village: 'home' | 'builderBase' | 'clanCapital';
};

type PlayerHouseElement = {
  type: 'ground' | 'walls' | 'roof' | 'decoration';
  id: number;
};

type PlayerHouse = {
  elements: PlayerHouseElement[];
};

type Troop = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home' | 'builderBase';
  superTroopIsActive?: boolean;
};

type HeroEquipment = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home';
};

type Hero = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home' | 'builderBase';
  equipment?: HeroEquipment[];
};

type Spell = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home';
};

type Player = {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel: number;
  builderBaseTrophies: number;
  bestBuilderBaseTrophies: number;
  role: string;
  warPreference: string;
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  clan: Clan;
  league?: League;
  builderBaseLeague: BuilderBaseLeague;
  legendStatistics: LegendStatistics;
  achievements: Achievement[];
  playerHouse: PlayerHouse;
  labels: Label[];
  troops: Troop[];
  heroes: Hero[];
  spells: Spell[];
  heroEquipment: HeroEquipment[];
};

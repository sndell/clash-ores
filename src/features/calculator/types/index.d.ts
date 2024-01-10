export type Category = {
  name: string;
  equipment: Equipment[];
};

export type Equipment = {
  name: string;
  rarity: string;
  max_lvl: number;
  img: string;
};

export type Ore = {
  shiny: number;
  glowy: number;
  starry: number;
};

export const INITIAL_ORES: Ores = {
  shiny: 0,
  glowy: 0,
  starry: 0,
};

export const LANDING_NAV_LINKS = [
  {
    label: 'Max all equipments',
    path: '/all',
    image: 'bg-image-first',
  },
  {
    label: 'Upgrade single equipment',
    path: '/single',
    image: 'bg-image-second',
  },
  {
    label: 'Weekly ore gain',
    path: '/gain',
    image: 'bg-image-third',
  },
] as const;

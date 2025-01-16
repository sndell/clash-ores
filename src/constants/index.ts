export const LANDING_NAV_LINKS = [
  {
    label: 'Max all equipments',
    path: '/all',
    image: 'bg-first',
  },
  {
    label: 'Upgrade single equipment',
    path: '/single',
    image: 'bg-second',
  },
  {
    label: 'Weekly ore gain',
    path: '/gain',
    image: 'bg-third',
  },
] as const;

export const INITIAL_ORES: Ores = {
  shiny: 0,
  glowy: 0,
  starry: 0
} 
export const calculateOresPerAttack = (ore: number, warWinRatio: number): number => {
  const oresFromWins = ore * warWinRatio;
  const oresFromLosses = Math.floor(ore * 0.5 * (1 - warWinRatio));
  return Math.floor(oresFromWins + oresFromLosses);
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const calculateTotalWeeklyOres = (state: Omit<GainStore, keyof Function>): Ores => ({
  shiny:
    state.dailyOres.shiny * 7 +
    state.weeklyWarOres.shiny +
    state.weeklyTraderOresGem.shiny +
    state.weeklyTraderOresMedal.shiny,
  glowy:
    state.dailyOres.glowy * 7 +
    state.weeklyWarOres.glowy +
    state.weeklyTraderOresGem.glowy +
    state.weeklyTraderOresMedal.glowy,
  starry: state.weeklyWarOres.starry + state.weeklyTraderOresGem.starry + state.weeklyTraderOresMedal.starry,
});

export const calculateOresPerAttack = (ore: number, warWinRatio: number, attacksPerMonth: number): number => {
  const winWars = Math.floor(attacksPerMonth * warWinRatio);
  const lossWars = attacksPerMonth - winWars;
  const oresFromWins = ore * winWars;
  const oresFromLosses = ore * 0.5 * lossWars;
  return Math.floor(oresFromWins + oresFromLosses);
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const calculateTotalMonthlyOres = (state: Omit<GainStore, keyof Function>): Ores => ({
  shiny:
    state.dailyOres.shiny * 30 +
    state.monthlyWarOres.shiny +
    state.monthlyTraderOresGem.shiny +
    state.monthlyTraderOresMedal.shiny,
  glowy:
    state.dailyOres.glowy * 30 +
    state.monthlyWarOres.glowy +
    state.monthlyTraderOresGem.glowy +
    state.monthlyTraderOresMedal.glowy,
  starry:
    state.dailyOres.starry * 30 +
    state.monthlyWarOres.starry +
    state.monthlyTraderOresGem.starry +
    state.monthlyTraderOresMedal.starry,
});

export const createRange = (start: number, length: number) => Array.from({ length }, (_, i) => i + start);

export const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getDaysToMax = (remainingAmount: number, monthlyAmount: number) =>
  Math.floor(remainingAmount / (monthlyAmount / 30));

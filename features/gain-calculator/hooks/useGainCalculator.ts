'use client';

import { useState } from 'react';
import { INITIAL_ORE_VALUES, LEAGUE_TIERS, ORE_CONFIG_GEMS, ORE_CONFIG_MEDALS } from '../constants';
import { useGainStore } from '../stores/gain';

export const useGainCalculator = () => {
  const [trophiesValue, setTrophiesValue] = useState(0);
  const [townHallValue, setTownHallValue] = useState(8);
  const [attacksValue, setAttacksValue] = useState(0);
  const [winRatioValue, setWinRatioValue] = useState(0);
  const [traderMedalValues, setTraderMedalValues] = useState<OreValues>(INITIAL_ORE_VALUES);
  const [traderGemValues, setTraderGemValues] = useState<OreValues>(INITIAL_ORE_VALUES);

  const { setDailyOres, calculateWarOres, setWeeklyTraderOresGem, setWeeklyTraderOresMedal } = useGainStore();

  const handleOreValueChange = (mode: 'medal' | 'gem') => (type: OreType) => (value: number) => {
    const setter = mode === 'medal' ? setTraderMedalValues : setTraderGemValues;
    const storeSetter = mode === 'medal' ? setWeeklyTraderOresMedal : setWeeklyTraderOresGem;
    const config = mode === 'medal' ? ORE_CONFIG_MEDALS : ORE_CONFIG_GEMS;

    setter((prev) => ({ ...prev, [type]: value }));
    storeSetter(config[type].values[value], type);
  };

  return {
    values: {
      trophies: trophiesValue,
      townHall: townHallValue,
      attacks: attacksValue,
      winRatio: winRatioValue,
      traderMedal: traderMedalValues,
      traderGem: traderGemValues,
    },
    setters: {
      setTrophies: (value: number) => {
        setTrophiesValue(value);
        const tier = LEAGUE_TIERS.find((tier) => value < tier.maxTrophies);
        if (tier) setDailyOres(tier.ores);
      },
      setTownHall: (value: number) => {
        setTownHallValue(value);
        calculateWarOres(value, attacksValue, winRatioValue);
      },
      setAttacks: (value: number) => {
        setAttacksValue(value);
        calculateWarOres(townHallValue, value, winRatioValue);
      },
      setWinRatio: (value: number) => {
        setWinRatioValue(value);
        calculateWarOres(townHallValue, attacksValue, value);
      },
      handleOreValueChange,
    },
  };
};

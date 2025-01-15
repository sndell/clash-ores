'use client';

import { useEffect, useState } from 'react';
import { INITIAL_ORE_VALUES, LEAGUE_TIERS, ORE_CONFIG_GEMS, ORE_CONFIG_MEDALS } from '../constants';
import { useGainStore } from '../stores/gain';

export const useGainCalculator = () => {
  const [trophiesValue, setTrophiesValue] = useState(400);
  const [townHallValue, setTownHallValue] = useState(8);
  const [attacksValue, setAttacksValue] = useState(0);
  const [winRatioValue, setWinRatioValue] = useState(0);
  const [traderMedalValues, setTraderMedalValues] = useState<OreValues>(INITIAL_ORE_VALUES);
  const [traderGemValues, setTraderGemValues] = useState<OreValues>(INITIAL_ORE_VALUES);

  const { setDailyOres, calculateWarOres, setWeeklyTraderOresGem, setWeeklyTraderOresMedal } = useGainStore();

  // Simplified localStorage handling for basic values
  const persistValue = (key: string, value: number) => {
    localStorage.setItem(key, value.toString());
  };

  // Simplified trader value handling
  const handleOreValueChange = (mode: 'medal' | 'gem') => (type: OreType) => (value: number) => {
    const config = mode === 'medal' ? ORE_CONFIG_MEDALS : ORE_CONFIG_GEMS;
    const setter = mode === 'medal' ? setTraderMedalValues : setTraderGemValues;
    const storeSetter = mode === 'medal' ? setWeeklyTraderOresMedal : setWeeklyTraderOresGem;

    // Update state and store
    setter((prev) => ({ ...prev, [type]: value }));
    storeSetter(config[type].values[value], type);

    // Save to localStorage
    const values = JSON.parse(localStorage.getItem(`trader-${mode}-values`) || '{}');
    localStorage.setItem(`trader-${mode}-values`, JSON.stringify({ ...values, [type]: value }));
  };

  const setters = {
    setTrophies: (value: number) => {
      setTrophiesValue(value);
      const tier = LEAGUE_TIERS.find((tier) => value < tier.maxTrophies);
      if (tier) setDailyOres(tier.ores);
      persistValue('trophies', value);
    },
    setTownHall: (value: number) => {
      setTownHallValue(value);
      calculateWarOres(value, attacksValue, winRatioValue);
      persistValue('townHall', value);
    },
    setAttacks: (value: number) => {
      setAttacksValue(value);
      calculateWarOres(townHallValue, value, winRatioValue);
      persistValue('attacks', value);
    },
    setWinRatio: (value: number) => {
      setWinRatioValue(value);
      calculateWarOres(townHallValue, attacksValue, value);
      persistValue('winRatio', value);
    },
    handleOreValueChange,
  };

  // Load initial values
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load basic values
    const loadValue = (key: string, setter: (value: number) => void) => {
      const stored = localStorage.getItem(key);
      if (stored) setter(Number(stored));
    };

    loadValue('trophies', setters.setTrophies);
    loadValue('townHall', setters.setTownHall);
    loadValue('attacks', setters.setAttacks);
    loadValue('winRatio', setters.setWinRatio);

    // Load trader values
    const loadTraderValues = (mode: 'medal' | 'gem') => {
      const stored = JSON.parse(localStorage.getItem(`trader-${mode}-values`) || '{}');
      const config = mode === 'medal' ? ORE_CONFIG_MEDALS : ORE_CONFIG_GEMS;
      const setter = mode === 'medal' ? setTraderMedalValues : setTraderGemValues;
      const storeSetter = mode === 'medal' ? setWeeklyTraderOresMedal : setWeeklyTraderOresGem;

      if (Object.keys(stored).length > 0) {
        setter((prev) => ({ ...prev, ...stored }));
        Object.entries(stored).forEach(([type, value]) => {
          storeSetter(config[type as OreType].values[value as number], type as OreType);
        });
      }
    };

    loadTraderValues('medal');
    loadTraderValues('gem');
  }, []);

  return {
    values: {
      trophies: trophiesValue,
      townHall: townHallValue,
      attacks: attacksValue,
      winRatio: winRatioValue,
      traderMedal: traderMedalValues,
      traderGem: traderGemValues,
    },
    setters,
  };
};

'use client'

import { INITIAL_ORES } from '@/constants';
import { equipmentCost } from '@/data';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getTotalOres } from '../util/getTotalOres';

export const useEquipmentStore = create<EquipmentStore>()(persist((set, get) => ({
  levels: {},
  equipmentOres: {},
  remainingOres: INITIAL_ORES,
  totalOres: getTotalOres(),
  updateLevel: (name, level, maxLevel, rarity) => {
    set((state) => ({ levels: { ...state.levels, [name]: Math.max(0, Math.min(level, maxLevel)) } }))
    get().updateEquipmentOres(name, level, rarity)
  },
  updateEquipmentOres: (name, level, rarity) => {
    const availableOres = equipmentCost[rarity as keyof typeof equipmentCost].slice(0, level)
    const totalOres: Ores = availableOres.reduce((total, ore) => ({
      shiny: total.shiny + ore.shiny,
      glowy: total.glowy + ore.glowy,
      starry: total.starry + ore.starry,
    }), INITIAL_ORES)
    set((state) => ({ equipmentOres: { ...state.equipmentOres, [name]: totalOres } }))
    get().calculateAllOres()
  },
  calculateAllOres: () => {
    const { equipmentOres, totalOres } = get()
    const totalSpent = Object.keys(equipmentOres).reduce((total, key) => {
      const { shiny, glowy, starry } = equipmentOres[key]
      return {
        shiny: total.shiny + shiny,
        glowy: total.glowy + glowy,
        starry: total.starry + starry,
      }
    }, INITIAL_ORES)
    const remainingOres = {
      shiny: totalOres.shiny - totalSpent.shiny,
      glowy: totalOres.glowy - totalSpent.glowy,
      starry: totalOres.starry - totalSpent.starry,
    }
    set({ remainingOres })
  }
}), { name: 'equipment-store' }))
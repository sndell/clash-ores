"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDaysToFinishStore = create<DaysToFinishStore>()(
  persist(
    (set, get) => ({
      showDaysToFinish: false,
      toggleShowDaysToFinish: (value?: boolean) => {
        set({ showDaysToFinish: value ?? !get().showDaysToFinish });
        navigator.vibrate(20);
      },
    }),
    { name: "days-to-finish" }
  )
);

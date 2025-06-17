"use client";

import { DaysToMax, useGainStore } from "@/features/gain-calculator";
import { useDaysToFinishStore } from "@/features/gain-calculator/stores/daysToFinishStore";
import { getDaysToMax } from "@/features/gain-calculator/util";
import { useEquipmentStore } from "@/features/max-calculator";
import { useUpgradeStore } from "@/features/upgrade-calculator";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const OreResult = () => {
  const pathname = usePathname();
  const { showDaysToFinish, toggleShowDaysToFinish } = useDaysToFinishStore();
  const { remainingOres: equipmentOres } = useEquipmentStore();
  const { ores: gainOres } = useGainStore();
  const { ores: upgradeOres } = useUpgradeStore();

  const selectedOres = pathname === "/single" ? upgradeOres : pathname === "/all" ? equipmentOres : gainOres;
  const canExpand = pathname === "/single" || pathname === "/all";

  const handleClick = () => {
    if (canExpand) toggleShowDaysToFinish();
  };

  return (
    <button
      onClick={handleClick}
      className="space-y-2 py-2 rounded-full border backdrop-blur-xl bg-primary border-primary max-sm:flex-1"
    >
      <div className="flex gap-6 justify-center items-center px-6 ">
        <div className="flex xs:gap-1.5 items-center max-xs:flex-col">
          <Image
            src="/images/ores/Shiny.webp"
            alt="shiny"
            width={24}
            height={24}
            className="object-contain aspect-square"
          />
          <div className="flex flex-col items-start max-xs:items-center">
            <span>{selectedOres.shiny.toFixed(0)}</span>
            {showDaysToFinish && canExpand && (
              <span className="text-xs text-primary-dark">{getDaysToMax(selectedOres.shiny, gainOres.shiny)}d</span>
            )}
          </div>
        </div>
        <div className="flex xs:gap-1.5 items-center max-xs:flex-col">
          <Image
            src="/images/ores/Glowy.webp"
            alt="shiny"
            width={24}
            height={24}
            className="object-contain aspect-square"
          />
          <div className="flex flex-col items-start max-xs:items-center">
            <span>{selectedOres.glowy.toFixed(0)}</span>
            {showDaysToFinish && canExpand && (
              <span className="text-xs text-primary-dark">{getDaysToMax(selectedOres.glowy, gainOres.glowy)}d</span>
            )}
          </div>
        </div>
        <div className="flex xs:gap-1.5 items-center max-xs:flex-col">
          <Image
            src="/images/ores/Starry.webp"
            alt="shiny"
            width={24}
            height={24}
            className="object-contain aspect-square"
          />
          <div className="flex flex-col items-start max-xs:items-center">
            <span>{selectedOres.starry.toFixed(0)}</span>
            {showDaysToFinish && canExpand && (
              <span className="text-xs text-primary-dark">
                {Number.isFinite(getDaysToMax(selectedOres.starry, gainOres.starry))
                  ? `${getDaysToMax(selectedOres.starry, gainOres.starry)}d`
                  : "Infinite"}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* {isExpanded && <DaysToMax remainingOres={selectedOres} monthlyOres={selectedOres} />} */}
    </button>
  );
};

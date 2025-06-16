"use client";

import { useGainStore } from "@/features/gain-calculator";
import { useEquipmentStore } from "@/features/max-calculator/stores/equipmentStore";
import { useUpgradeStore } from "@/features/upgrade-calculator";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const OreResult = () => {
  const pathname = usePathname();

  const { remainingOres: equipmentOres } = useEquipmentStore();
  const { ores: gainOres } = useGainStore();
  const { ores: upgradeOres } = useUpgradeStore();

  const selectedOres = pathname === "/single" ? upgradeOres : pathname === "/all" ? equipmentOres : gainOres;

  return (
    <div className="flex gap-6 justify-center items-center px-6 rounded-full border backdrop-blur-xl bg-primary border-primary max-sm:flex-1">
      <div className="flex xs:gap-1.5 items-center max-xs:flex-col">
        <Image
          src="/images/ores/Shiny.webp"
          alt="shiny"
          width={24}
          height={24}
          className="object-contain aspect-square"
        />
        <span>{selectedOres.shiny.toFixed(0)}</span>
      </div>
      <div className="flex xs:gap-1.5 items-center max-xs:flex-col">
        <Image
          src="/images/ores/Glowy.webp"
          alt="shiny"
          width={24}
          height={24}
          className="object-contain aspect-square"
        />
        <span>{selectedOres.glowy.toFixed(0)}</span>
      </div>
      <div className="flex xs:gap-1.5 items-center max-xs:flex-col">
        <Image
          src="/images/ores/Starry.webp"
          alt="shiny"
          width={24}
          height={24}
          className="object-contain aspect-square"
        />
        <span>{selectedOres.starry.toFixed(0)}</span>
      </div>
    </div>
  );
};

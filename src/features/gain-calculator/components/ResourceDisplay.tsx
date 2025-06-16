"use client";

import { cn } from "@/util/cn";
import Image from "next/image";
import { capitalizeFirst } from "../util";
import { ORE_CONFIG_GEMS, ORE_CONFIG_MEDALS } from "../constants";

interface Props {
  value: number;
  type: OreType;
  mode: "medal" | "gem";
}

export const ResourceDisplay = ({ value, type, mode }: Props) => {
  const config = mode === "medal" ? ORE_CONFIG_MEDALS : ORE_CONFIG_GEMS;
  const oreAmount = config[type].values[value];
  const cost = config[type].cost * value;
  const imageName = capitalizeFirst(type);

  return (
    <div className="flex gap-2 justify-center items-center">
      <Image
        src={`/images/ores/${imageName}.webp`}
        alt={type}
        width={24}
        height={24}
        className="object-contain aspect-square "
      />
      <span className={cn(value === 0 && "text-primary-dark text-base")}>{oreAmount}</span>
      {value > 0 && (
        <>
          <Image
            src={`/images/misc/${mode === "medal" ? "Raid_Medal" : "Gem"}.webp`}
            alt={mode === "medal" ? "Raid Medal" : "Gem"}
            width={16}
            height={16}
            className="object-contain aspect-square"
          />
          <span className="text-sm text-primary-dark">{cost}</span>
        </>
      )}
    </div>
  );
};

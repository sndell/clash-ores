"use client";

import { equipmentCost } from "@/data";
import { cn } from "@/util/cn";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [selectedRarity, setSelectedRarity] = useState<"common" | "epic">("common");

  return (
    <div id="single-page" className="grid place-items-center px-3 pt-3 pb-19 h-dvh">
      <div className="absolute inset-0 backdrop-blur-sm h-dvh bg-primary" />
      <div className="flex overflow-hidden relative flex-col space-y-3 w-full h-full sm:max-w-96">
        <div className="overflow-y-auto overflow-x-hidden flex-1 rounded-2xl border backdrop-blur-xl scrollbar-slim bg-primary border-primary">
          <table className="w-full border-collapse table-auto">
            <thead className="sticky top-0 z-10 bg-black border-b border-primary">
              <tr>
                <th className="p-3 center-text">Level</th>
                <th>
                  <div className="flex gap-1 justify-center items-center p-3 center-text max-xs:flex-col">
                    <Image src="/images/ores/Shiny.webp" alt="Shiny ore" width={20} height={20} />
                    Shiny
                  </div>
                </th>
                <th>
                  <div className="flex gap-1 justify-center items-center p-3 center-text max-xs:flex-col">
                    <Image src="/images/ores/Glowy.webp" alt="Glowy ore" width={20} height={20} />
                    Glowy
                  </div>
                </th>
                {selectedRarity === "epic" && (
                  <th>
                    <div className="flex gap-1 justify-center items-center p-3 center-text max-xs:flex-col">
                      <Image src="/images/ores/Starry.webp" alt="Starry ore" width={20} height={20} />
                      Starry
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-primary">
              {equipmentCost[selectedRarity].map((item, index) => (
                <tr key={index} className="text-center border-primary">
                  <td className="p-1 center-text text-primary-dark">{index + 1}</td>
                  <td className="p-1 center-text">{item.shiny}</td>
                  <td className={cn("p-1 center-text", item.glowy === 0 && "text-primary-dark")}>{item.glowy}</td>
                  {selectedRarity === "epic" && (
                    <td className={cn("p-1 center-text", item.starry === 0 && "text-primary-dark")}>{item.starry}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-3 rounded-2xl bg-gradient-to-t from-stone-800 to-stone-500 pb-2 pt-[1px] border-2 border-black">
          <div className="p-3 space-y-3 rounded-2xl bg-stone-700">
            <div className="flex flex-col gap-1 text-sm">
              <span className="drop-shadow-[0px_3px_0px_rgb(0,0,0)]">Rarity</span>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <button
                  onClick={() => setSelectedRarity("common")}
                  className={cn(
                    "bg-gradient-to-t from-blue-600 to-blue-400 p-[3px] rounded-full transition-all border-2 border-black",
                    selectedRarity !== "common" && "grayscale"
                  )}
                >
                  <div className="p-2 rounded-full bg-gradient-to-b from-blue-600 via-blue-500 via-30% to-blue-400">
                    <span className="drop-shadow-[0px_3px_0px_rgb(0,0,0)]">Common</span>
                  </div>
                </button>
                or
                <button
                  onClick={() => setSelectedRarity("epic")}
                  className={cn(
                    "bg-gradient-to-t from-fuchsia-700 to-fuchsia-500 p-[3px]  rounded-full transition-all border-2 border-black overflow-hidden",
                    selectedRarity !== "epic" && "grayscale"
                  )}
                >
                  <div className="p-2 bg-gradient-to-b from-fuchsia-700 to-fuchsia-500 rounded-full">
                    <span className="drop-shadow-[0px_3px_0px_rgb(0,0,0)]">Epic</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="drop-shadow-[0px_3px_0px_rgb(0,0,0)]">Levels</span>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                <div className="bg-black rounded-full  p-[2px] ">
                  <input
                    type="text"
                    placeholder="0"
                    className="px-4 py-2 w-full text-base bg-white rounded-full border-2 border-stone-300 text-secondary bg-secondary placeholder:text-primary-light"
                  />
                </div>
                to
                <div className="bg-black rounded-full  p-[2px] ">
                  <input
                    type="text"
                    placeholder={`${selectedRarity === "common" ? 18 : 27}`}
                    className="px-4 py-2 w-full text-base bg-white rounded-full border-2 border-stone-300 text-secondary bg-secondary placeholder:text-primary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

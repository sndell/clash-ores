import { NavButton } from "./NavButton";
import { OreResult } from "./OreResult";

export const BottomDock = () => {
  return (
    <div className="flex fixed bottom-0 gap-2 justify-center px-2 mb-2 w-full h-16 max-xs:h-20">
      <OreResult />
      <NavButton />
    </div>
  );
};

import { HeroCard } from '@/components/HeroCard';
import { HeroGrid } from '@/components/HeroGrid';
import {
  archerQueenEquipment,
  barbarianKingEquipment,
  grandWardenEquipment,
  minionPrinceEquipment,
  royalChampionEquipment,
} from '@/data';

export default function Page() {
  return (
    <div id="all-page" className="relative flex flex-col h-dvh">
      <div className="absolute h-dvh inset-0 bg-primary backdrop-blur-sm" />
      <HeroGrid>
        <HeroCard equipment={barbarianKingEquipment} title="Barbarian King" />
        <HeroCard equipment={archerQueenEquipment} title="Archer Queen" />
        <HeroCard equipment={grandWardenEquipment} title="Grand Warden" />
        <HeroCard equipment={royalChampionEquipment} title="Royal Champion" />
        <HeroCard equipment={minionPrinceEquipment} title="Minion Prince" />
      </HeroGrid>
    </div>
  );
}

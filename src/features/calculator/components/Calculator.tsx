import { CalculatorCategory } from './CalculatorCategory';
import king from '../../../assets/data/equipment/barbarian_king.json';
import queen from '../../../assets/data/equipment/archer_queen.json';
import warden from '../../../assets/data/equipment/grand_warden.json';
import champion from '../../../assets/data/equipment/royal_champion.json';

export const Calculator = () => {
  return (
    <div className="grid grid-cols-4 mgap-2 max-[1324px]:grid-cols-2 max-[1324px]:gap-8 max-[727px]:grid-cols-1 max-[727px]:w-full">
      <CalculatorCategory name="Barbarian King" equipment={king} />
      <CalculatorCategory name="Archer Queen" equipment={queen} />
      <CalculatorCategory name="Grand Warden" equipment={warden} />
      <CalculatorCategory name="Royal Champion" equipment={champion} />
    </div>
  );
};

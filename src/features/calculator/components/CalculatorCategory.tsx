import { Category } from '../types';
import { CalculatorItem } from './CalculatorItem';

export const CalculatorCategory = ({ equipment, name }: Category) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs text-primary max-[727px]:text-center">{name}</div>
      {equipment.map((item) => (
        <CalculatorItem item={item} key={item.name} />
      ))}
    </div>
  );
};

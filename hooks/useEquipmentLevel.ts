import { useOresStore } from '@/store/ores';
import { useMemo } from 'react';

export const useEquipmentLevel = ({ name, type }: Pick<Equipment, 'name' | 'type'>) => {
  const { updateItem, items } = useOresStore();
  const maxLevel = useMemo(() => (type === 'epic' ? 27 : 18), [type]);

  const getInitialLevel = (): number => {
    if (typeof window === 'undefined') return 0;

    const storedLevel = localStorage.getItem(`${name}_level`);
    const initialLevel = storedLevel ? Number(storedLevel) : 0;

    updateItem({ name, type, level: initialLevel });
    return initialLevel;
  };

  const getItemLevel = (): string => {
    const item = items.find((item) => item.name === name);
    return item?.level.toString() ?? getInitialLevel().toString();
  };

  const updateLevel = (newLevel: number) => {
    const validLevel = Math.min(Math.max(0, newLevel), maxLevel);

    updateItem({ name, type, level: validLevel });

    return validLevel;
  };

  return {
    maxLevel,
    getItemLevel,
    updateLevel,
    level: getItemLevel().toString(),
  };
};

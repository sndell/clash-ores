'use client';

import { useEquipmentLevel } from '@/hooks/useEquipmentLevel';
import Image from 'next/image';

export const HeroEquipment = ({ name, imageUrl, type }: Equipment) => {
  const { level, maxLevel, updateLevel } = useEquipmentLevel({ name, type });

  return (
    <div className="flex items-center gap-3 p-3">
      <Image src={imageUrl} alt={name} width={48} height={48} className="object-contain aspect-square" />
      <div className="flex flex-col gap-0.5">
        <div className="text-sm">{name}</div>
        <div className="flex gap-1.5">
          <input
            type="number"
            value={level}
            onChange={(e) => updateLevel(Number(e.target.value))}
            className="w-12 pt-[2px] text-center rounded-lg appearance-none text-secondary"
          />
          <div className="text-primary-dark center-text"> / {maxLevel}</div>
        </div>
      </div>
    </div>
  );
};

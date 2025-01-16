'use client';

import Image from 'next/image';
import { HeroLevel } from './HeroLevel';
import { useEquipmentStore } from '../stores/equipmentStore';

export const HeroEquipment = ({ equipment }: { equipment: Equipment }) => {
	const { levels, updateLevel } = useEquipmentStore();

	return (
		<div key={equipment.name} className='flex items-center justify-between p-3'>
			<div className='flex items-center gap-2'>
				<Image
					src={equipment.imageUrl}
					alt={equipment.name}
					height={48}
					width={48}
					className='aspect-square object-cover'
				/>
				<div className='flex flex-col justify-between'>
					{equipment.name}
					<HeroLevel
						equipment={equipment}
						level={levels[equipment.name] || 0}
						updatelevel={(level: number, maxLevel: number) =>
							updateLevel(equipment.name, level, maxLevel, equipment.rarity)
						}
					/>
				</div>
			</div>
		</div>
	);
};

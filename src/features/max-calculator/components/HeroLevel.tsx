import { equipmentCost } from '@/data';

interface HeroLevelProps {
	equipment: Equipment;
	level: number;
	updatelevel: (value: number, maxLevel: number) => void;
}

export const HeroLevel = ({ equipment, level, updatelevel }: HeroLevelProps) => {
	const maxLevel = equipmentCost[equipment.rarity as keyof typeof equipmentCost].length;

	return (
		<div className='flex items-center gap-2'>
			<input
				value={level.toString()}
				onChange={(e) => updatelevel(Number(e.target.value), maxLevel)}
				type='number'
				className='w-12 rounded-lg text-center text-secondary'
			/>
			<span className='center-text text-sm text-primary-dark'>/ {maxLevel}</span>
		</div>
	);
};

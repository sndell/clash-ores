import { HeroEquipment } from './HeroEquipment';

export const HeroCard = ({ name, equipment }: { name: string; equipment: Equipment[] }) => {
	return (
		<div className='border-primary divide-primary h-fit divide-y rounded-xl border bg-black/40 backdrop-blur-xl'>
			<div className='center-text p-3 text-center text-sm text-primary-dark'>{name}</div>
			{equipment.map((equipment) => (
				<HeroEquipment key={equipment.name} equipment={equipment} />
			))}
		</div>
	);
};

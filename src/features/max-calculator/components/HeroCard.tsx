import { HeroEquipment } from './HeroEquipment';

export const HeroCard = ({ name, equipment }: { name: string; equipment: Equipment[] }) => {
  return (
    <div className='h-fit divide-y divide-primary rounded-xl border border-primary bg-black/40 backdrop-blur-xl'>
      <div className='center-text p-3 text-center text-sm text-primary-dark'>{name}</div>
      {equipment.map((equipment) => (
        <HeroEquipment key={equipment.name} equipment={equipment} />
      ))}
    </div>
  );
};

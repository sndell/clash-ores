import { HeroEquipment } from './HeroEquipment';

export const HeroCard = ({ name, equipment }: { name: string; equipment: Equipment[] }) => {
  return (
    <div className='rounded-xl border divide-y backdrop-blur-xl h-fit divide-primary border-primary bg-black/40'>
      <div className='p-3 text-sm text-center center-text text-primary-dark'>{name}</div>
      {equipment.map((equipment) => (
        <HeroEquipment key={equipment.name} equipment={equipment} />
      ))}
    </div>
  );
};

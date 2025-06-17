type DaysToMaxProps = {
  remainingOres: Ores;
  monthlyOres: Ores;
};

export const DaysToMax = ({ remainingOres, monthlyOres }: DaysToMaxProps) => {
  return (
    <div className="flex gap-6 px-6 justify-between items-center">
      <div className="text-sm text-primary-dark">70 days</div>
      <div className="text-sm text-primary-dark">50 days</div>
      <div className="text-sm text-primary-dark">70 days</div>
    </div>
  );
};

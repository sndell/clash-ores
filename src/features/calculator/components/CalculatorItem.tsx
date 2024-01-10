import { useEffect, useState } from 'react';
import { Equipment, Ore } from '..';
import epic from '../../../assets/data/rarities/epic.json';
import common from '../../../assets/data/rarities/common.json';
import { useOresStore } from '../../../stores/ores';
// import { Icon } from '@iconify/react';

export const CalculatorItem = ({ item }: { item: Equipment }) => {
  const [lvl, setLvl] = useState<number>(() => {
    const savedLvl = localStorage.getItem(`lvl_${item.name}`);
    return savedLvl ? parseInt(savedLvl, 10) : 0;
  });
  const { updateItem } = useOresStore();

  const calculateOres = (data: Ore[], startIndex: number) => {
    const ores = data.slice(startIndex).reduce(
      (totals, ore) => {
        totals.shiny += ore.shiny;
        totals.glowy += ore.glowy;
        totals.starry += ore.starry;
        return totals;
      },
      { shiny: 0, glowy: 0, starry: 0 }
    );

    return ores;
  };

  const updateOres = () => {
    const ores = calculateOres(item.rarity === 'common' ? common : epic, lvl);
    updateItem({ name: item.name, ores });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (input.length <= 2 && Number(input) <= item.max_lvl) {
      setLvl(Number(input));
      localStorage.setItem(`lvl_${item.name}`, Number(input).toString());
    }
  };

  // const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //   e.target.select();
  // };

  useEffect(() => {
    updateOres();
  }, [lvl]);

  // const handleClick = (mode: 'plus' | 'minus') => {
  //   if (mode === 'plus' && lvl < item.max_lvl) setLvl((old) => (old += 1));
  //   else if (mode === 'minus' && lvl > 0) setLvl((old) => (old -= 1));
  // };

  return (
    <div className="flex gap-2 p-2 border rounded-2xl bg-primary/50 border-primary">
      <img
        src={item.img}
        alt="Equipment preview"
        className="h-12 aspect-square"
      />
      <div className="flex flex-col flex-1 gap-1">
        <div className="text-sm text-primaryLight whitespace-nowrap">
          {item.name}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={lvl.toString()}
            onChange={handleChange}
            // onFocus={handleFocus}
            className="flex w-12 text-center rounded-lg outline-none font-supercellMagicNumbers"
          />
          {/* <div className="flex px-2 rounded-lg bg-accent text-secondary">
            <button
              onClick={() => handleClick('minus')}
              className="cursor-pointer"
            >
              <Icon icon="typcn:minus" />
            </button>
            <input
              type="number"
              value={lvl.toString()}
              onChange={handleChange}
              className="flex w-8 py-1 text-center bg-transparent outline-none"
            />
            <button
              onClick={() => handleClick('plus')}
              className="cursor-pointer"
            >
              <Icon icon="typcn:plus" />
            </button>
          </div> */}
          <div className="text-xs text-primary">
            /{' '}
            <span className="text-base font-supercellMagicNumbers">
              {item.max_lvl}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center gap-2">
        <div className="h-full bg-separator w-[1px]" />
        <div className="text-xs transition-colors cursor-pointer text-primary hover:text-primaryLight">
          View
        </div>
      </div> */}
    </div>
  );
};

import { useEffect, useState } from 'react';
import epic from '../../../assets/data/rarities/epic.json';
import common from '../../../assets/data/rarities/common.json';
import { useOresStore } from '../../../stores/ores';
import { createPortal } from 'react-dom';
import { CalculatorModal } from './CalculatorModal';
import { Equipment } from '../types';
import { calculateOres } from '../utils/calculateOres';
// import { Icon } from '@iconify/react/dist/iconify.js';

export const CalculatorItem = ({ item }: { item: Equipment }) => {
  const [lvl, setLvl] = useState<number>(() => {
    const savedLvl = localStorage.getItem(`lvl_${item.name}`);
    return savedLvl ? parseInt(savedLvl, 10) : 0;
  });
  const [isActive, setIsActive] = useState(false);
  const { updateItem } = useOresStore();

  const toggleActive = () => {
    setIsActive((state) => !state);
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

  // const handleClick = (action: 'plus' | 'minus') => {
  //   switch (action) {
  //     case 'plus':
  //       if (lvl + 1 <= item.max_lvl) setLvl((state) => (state += 1));
  //       break;
  //     case 'minus':
  //       if (lvl - 1 >= 0) setLvl((state) => (state -= 1));
  //       break;
  //     default:
  //       break;
  //   }
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
          {/* <div className="flex gap-1 text-secondary">
            <button
              onClick={() => handleClick('minus')}
              className="px-2 rounded-lg cursor-pointer bg-accent"
            >
              <Icon icon="typcn:minus" />
            </button>
            <input
              type="number"
              value={lvl.toString()}
              onChange={handleChange}
              className="flex w-12 text-center rounded-lg outline-none font-supercellMagicNumbers"
            />
            <button
              onClick={() => handleClick('plus')}
              className="px-2 rounded-lg cursor-pointer bg-accent"
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
      <div className="flex items-center gap-2">
        <div className="h-full bg-separator w-[1px]" />
        <button
          onClick={toggleActive}
          className="text-xs transition-colors cursor-pointer text-primary hover:text-primaryLight"
        >
          View
        </button>
      </div>
      {isActive &&
        createPortal(
          <CalculatorModal item={item} level={lvl} close={toggleActive} />,
          document.body
        )}
    </div>
  );
};

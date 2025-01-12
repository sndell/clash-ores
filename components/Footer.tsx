'use client';

import { getEquipmentData } from '@/actions/getAccountData';
import { useOresStore } from '@/store/ores';
import { cn } from '@/util/cn';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex w-full gap-2 px-2 pb-2 mx-auto max-sm:bg-gradient-to-t from-black/50 to-transparent sm:w-fit">
      <OreResult />
      <AccountButton toggleModal={toggleModal} />
      {isOpen && <AccountModal close={toggleModal} />}
    </div>
  );
};

const AccountButton = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <button
      onClick={toggleModal}
      className="grid p-5 overflow-hidden border rounded-full bg-black/40 border-primary backdrop-blur-3xl place-content-center"
    >
      <span className="icon-[solar--cloud-bold] text-xl" />
    </button>
  );
};

const AccountModal = ({ close }: { close: () => void }) => {
  const [tag, setTag] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { loadItems } = useOresStore();

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setTag(e.target.value.toUpperCase());
  };

  const handleLoad = async () => {
    setError('');
    const regex = /^[#PYLQGRJCUV0289]+$/;
    if (regex.test(tag)) {
      setLoading(true);
      try {
        const data = await getEquipmentData(tag);
        loadItems(data);
        close();
      } catch {
        setError('Invalid tag');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Invalid tag');
    }
  };

  return createPortal(
    <div onMouseDown={close} className="absolute inset-0 z-50 grid px-3 bg-black/50 place-content-center">
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="w-full p-3 overflow-hidden border bg-black/50 rounded-2xl border-secondary backdrop-blur-xl max-w-96 max-sm:max-w-full"
      >
        <div className="pt-3 pb-6 space-y-1 ">
          <div className="text-center">Load equipment data</div>
          <p className="text-sm text-center text-primary-dark">Enter your account tag to load your equipment data.</p>
        </div>
        <input
          type="text"
          placeholder="Enter your account tag"
          className={cn(
            'w-full pb-2 px-3 pt-2.5 text-sm bg-white rounded-full text-secondary placeholder:text-primary-light  appearance-none',
            error ? 'border-2 border-red-600' : 'border border-primary'
          )}
          value={tag}
          onChange={handleTagChange}
        />
        <button
          onClick={handleLoad}
          className="grid w-full pb-2 pt-2.5 mt-3 text-sm border rounded-full place-content-center bg-accent border-accent"
        >
          {loading ? <span className="icon-[svg-spinners--3-dots-move] text-xl" /> : 'Load'}
        </button>
        {error && <p className="mt-3 text-sm text-center text-red-600">{error}</p>}
      </div>
    </div>,
    document.body
  );
};

const OreResult = () => {
  const { ores } = useOresStore();

  return (
    <div className="flex items-center justify-center gap-6 px-4 pt-[2px] overflow-hidden border rounded-full bg-black/40 border-primary backdrop-blur-3xl max-sm:flex-1">
      <div className="flex items-center gap-2 max-xs:flex-col max-xs:gap-1">
        <Image src="/images/ores/Shiny.webp" alt="Shiny" width={24} height={24} className="object-contain" />
        {ores.shiny}
      </div>
      <div className="flex items-center gap-2 max-xs:flex-col max-xs:gap-1">
        <Image src="/images/ores/Glowy.webp" alt="Glowy" width={24} height={24} className="object-contain" />
        {ores.glowy}
      </div>
      <div className="flex items-center gap-2 max-xs:flex-col max-xs:gap-1">
        <Image src="/images/ores/Starry.webp" alt="Starry" width={24} height={24} className="object-contain" />
        {ores.starry}
      </div>
    </div>
  );
};

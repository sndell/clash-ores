'use client';

import { getEquipmentData } from '@/features/max-calculator';
import { useOresStore } from '@/features/max-calculator/stores/oreStore';
import { sendGAEvent } from '@next/third-parties/google';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { cn } from '@/util/cn';

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
        sendGAEvent('event', 'account_loading_complete', { value: tag });
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      onMouseDown={close}
      className='grid absolute inset-0 z-50 place-content-center px-2 bg-black/60'
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
        onMouseDown={(e) => e.stopPropagation()}
        className='overflow-hidden p-3 w-full rounded-2xl border backdrop-blur-xl bg-primary border-primary max-w-96 max-sm:max-w-full'
      >
        <div className='pt-3 pb-6 space-y-1'>
          <div className='text-center'>Load equipment data</div>
          <p className='text-sm text-center text-primary-dark'>
            Enter your Clash of Clans account tag to load your equipment data.
          </p>
        </div>
        <input
          type='text'
          placeholder='Clash tag...'
          className={cn(
            'w-full pb-2 px-3 pt-2.5 text-sm bg-secondary rounded-full text-secondary placeholder:text-primary-light  appearance-none',
            error ? 'border-2 border-red-600' : 'border border-secondary'
          )}
          value={tag}
          onChange={handleTagChange}
        />
        <button
          onClick={handleLoad}
          className='grid w-full pb-2 pt-2.5 mt-3 text-sm border rounded-full place-content-center bg-accent border-accent'
        >
          {loading ? <span className='icon-[svg-spinners--3-dots-move] text-xl' /> : 'Load'}
        </button>
        {error && <p className='mt-3 text-sm text-center text-red-600'>{error}</p>}
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default AccountModal;

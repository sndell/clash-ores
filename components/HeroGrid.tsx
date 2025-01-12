'use client';

import { useElementSize } from '@/hooks/useElementSize';
import { usePageSize } from '@/hooks/usePageSize';
import { cn } from '@/util/cn';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export const HeroGrid = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = usePageSize();
  const { height: elementHeight } = useElementSize(ref);

  return (
    <div className="flex flex-col flex-1 overflow-auto justify-evenly scrollbar-slim">
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-5 gap-3 p-3 max-sm:px-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-content-center',
          elementHeight > windowHeight && 'pb-19'
        )}
      >
        {children}
      </div>
    </div>
  );
};

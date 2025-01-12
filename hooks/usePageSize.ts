import { useState, useEffect } from 'react';

type PageSize = {
  width: number;
  height: number;
};

export const usePageSize = (): PageSize => {
  const [pageSize, setPageSize] = useState<PageSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Check if window is defined (i.e., running on the client)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setPageSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Set initial page size
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return pageSize;
};

import { useState, useEffect } from 'react';

export const usePageSize = () => {
  const [pageSize, setPageSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setPageSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return pageSize;
};

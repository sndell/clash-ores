import { useState, useEffect, RefObject } from 'react';

export const useElementSize = <T extends HTMLElement>(ref: RefObject<T | null>) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref?.current;

    const updateSize = () => {
      if (element) {
        setSize({
          width: element.offsetWidth,
          height: element.offsetHeight,
        });
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    if (element) resizeObserver.observe(element);

    return () => {
      if (element) resizeObserver.unobserve(element);
    };
  }, [ref]);

  return size;
};

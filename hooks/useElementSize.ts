import { useState, useEffect, RefObject } from 'react';

type ElementSize = {
  width: number;
  height: number;
};

export const useElementSize = <T extends HTMLElement>(ref: RefObject<T | null>): ElementSize => {
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

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

    // Call updateSize initially to set the initial size
    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [ref]);

  return size;
};

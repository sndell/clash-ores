"use client";

import { cn } from "@/util/cn";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  markers?: number[];
  displayValue?: (value: number) => string | React.ReactNode;
}

export const Slider = ({ value, onChange, min, max, step = 1, markers, displayValue }: SliderProps) => {
  const handleChange = (value: number) => {
    navigator.vibrate(30);
    onChange(value);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="relative select-none touch-none">
        <div className="absolute top-0 bottom-0 my-auto w-full h-2 rounded-r-full pointer-events-none bg-primary" />
        <div
          className="absolute top-0 bottom-0 my-auto h-2 rounded-l-full pointer-events-none bg-accent"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="absolute top-0 bottom-0 my-auto w-5 h-5 bg-white rounded-full pointer-events-none"
          style={{ left: `${percentage * 0.95}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="mt-1 w-full h-4 bg-transparent rounded-lg appearance-none cursor-pointer accent-black/10 thumb-none"
        />
      </div>
      <div>
        {markers ? (
          <div className="flex justify-between items-center px-1 w-full">
            {markers.map((marker) => (
              <span
                key={marker}
                className={cn(
                  "flex justify-center items-center w-[10px] text-primary-dark",
                  marker === value && "text-primary text-xl font-bold drop-shadow-[0_0px_2px_rgb(0,0,0)]"
                )}
              >
                {marker}
              </span>
            ))}
          </div>
        ) : (
          <div className="text-xl font-bold text-center">{displayValue ? displayValue(value) : value}</div>
        )}
      </div>
    </div>
  );
};

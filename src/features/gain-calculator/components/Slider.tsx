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
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(30);
    }
    onChange(value);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="relative w-full select-none touch-none h-6">
        {/* Track Background */}
        <div className="absolute top-1/2 left-0 w-full h-2 rounded-full bg-primary -translate-y-1/2" />

        {/* Filled Track */}
        <div
          className="absolute top-1/2 left-0 h-2 bg-accent rounded-full -translate-y-1/2"
          style={{ width: `${percentage}%` }}
        />

        {/* Native Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className={cn(
            "w-full h-6 bg-transparent appearance-none pointer-events-auto z-10 relative",
            "range-thumb" // custom class we will define below
          )}
        />
      </div>

      {/* Markers or Display Value */}
      <div>
        {markers ? (
          <div className="flex justify-between items-center px-1 w-full mt-1">
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
          <div className="text-xl font-bold text-center mt-1">{displayValue ? displayValue(value) : value}</div>
        )}
      </div>
    </div>
  );
};

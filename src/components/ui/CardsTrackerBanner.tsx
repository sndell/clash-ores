"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const EVENT_END = new Date("2026-08-31T08:00:00Z").getTime();

const getTimeRemaining = () => {
  const remaining = EVENT_END - Date.now();

  if (remaining <= 0) return null;

  const totalHours = Math.floor(remaining / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  return `${days}d ${hours.toString().padStart(2, "0")}h`;
};

export const CardsTrackerBanner = () => {
  const [timeRemaining, setTimeRemaining] = useState<string | null>("18d 22h");

  useEffect(() => {
    const updateTimeRemaining = () => setTimeRemaining(getTimeRemaining());

    updateTimeRemaining();
    const timer = window.setInterval(updateTimeRemaining, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  if (!timeRemaining) return null;

  return (
    <aside className="fixed top-2 left-1/2 z-50 -translate-x-1/2" aria-label="Clash of Cards event">
      <Link
        href="https://clashify.app/cards"
        className="group flex h-[2.7rem] min-w-[15.25rem] items-center rounded-[0.58rem] bg-gradient-to-r from-[#8751b1] via-[#542777] to-[#351a56] py-[0.2rem] pr-[0.45rem] pl-[0.4rem] text-white shadow-md [text-shadow:0_1px_1px_rgba(30,0,45,0.9)] transition duration-150 hover:-translate-y-px hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
        aria-label="Open the Clash of Cards Tracker and Trade Finder"
      >
        <span className="mr-1 block h-8 w-8 shrink-0" aria-hidden="true">
          <Image src="/images/misc/pack.png" alt="" width={32} height={32} priority />
        </span>
        <span className="flex min-w-[6.7rem] flex-col text-[0.82rem] font-bold leading-[0.78rem] tracking-[-0.01em]">
          <span>Clash of Cards</span>
          <small className="mt-[0.16rem] text-[0.54rem] font-bold leading-[0.6rem] tracking-normal text-[#e8d7ff]">
            Tracker &amp; Trade Finder
          </small>
        </span>
        <span className="ml-[0.32rem] rounded-[0.22rem] bg-[rgba(28,8,57,0.72)] px-[0.34rem] pt-[0.22rem] pb-[0.16rem] font-sans text-[0.7rem] font-extrabold leading-none">
          {timeRemaining}
        </span>
        <span className="icon-[solar--alt-arrow-right-linear] ml-[0.52rem] text-base" aria-hidden="true" />
      </Link>
    </aside>
  );
};

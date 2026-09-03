import Link from "next/link";
import Image from "next/image";

export const ClashifyBanner = () => {
  return (
    <aside className="fixed top-2 left-1/2 z-50 -translate-x-1/2" aria-label="Clashify">
      <Link
        href="https://clashify.app"
        className="group flex h-[2.85rem] items-center rounded-[0.65rem] border-2 border-[#a36b12] bg-gradient-to-b from-[#ffe27a] via-[#f0b429] to-[#c88814] py-[0.15rem] pr-[0.5rem] pl-[0.2rem] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_0_rgba(120,60,0,0.28),0_3px_0_#6b4508,0_6px_12px_rgba(0,0,0,0.35)] [text-shadow:0_1px_1px_rgba(80,40,0,0.85)] transition duration-150 hover:-translate-y-px hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
        aria-label="Open Clashify, the new and improved ore calculator"
      >
        <span className="relative -my-1 mr-1 block h-10 w-10 shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" aria-hidden="true">
          <Image src="/images/ores/Starry.webp" alt="" width={40} height={40} priority className="object-contain" />
        </span>
        <span className="flex min-w-[8.4rem] flex-col text-[0.9rem] font-bold leading-[0.82rem] tracking-[-0.01em]">
          <span>Clashify</span>
          <small className="mt-[0.18rem] text-[0.54rem] font-bold leading-[0.6rem] tracking-normal text-[#fff6d0]">
            New &amp; improved website
          </small>
        </span>
        <span className="ml-2 rounded-[0.22rem] bg-[rgba(90,45,0,0.55)] px-[0.38rem] pt-[0.22rem] pb-[0.16rem] font-sans text-[0.62rem] font-extrabold leading-none tracking-wide">
          NEW
        </span>
        <span className="icon-[solar--alt-arrow-right-linear] ml-[0.4rem] text-base" aria-hidden="true" />
      </Link>
    </aside>
  );
};

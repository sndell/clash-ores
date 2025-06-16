import { BackgroundOverlay } from "@/components/elements/BackgroundOverlay";
import { GainCalculatorForm } from "@/features/gain-calculator";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ore Calculator - Gain per month",
  description: "Enter your details and calculate how many ores you can gain per month.",
  openGraph: {
    title: "Ore Calculator - Gain per month",
    description: "Enter your details and calculate how many ores you can gain per month.",
    url: "https://ores.sundell.dev/gain",
    siteName: "Ore Calculator",
  },
  alternates: {
    canonical: "https://ores.sundell.dev/gain",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col pb-18 py-3 px-5 justify-evenly items-center  bg-center bg-cover h-dvh bg-third">
      <BackgroundOverlay />
      <div className="overflow-auto relative w-full rounded-xl border backdrop-blur-xl scrollbar-slim bg-primary border-primary sm:max-w-96">
        <GainHeader />
        <GainCalculatorForm />
      </div>
    </div>
  );
}

const GainHeader = () => (
  <header className="px-3 pt-6 pb-6 space-y-1 text-center">
    <h1>Ore gain calculator</h1>
    <p className="text-sm text-primary-dark">Enter the details below to calculate how many ores you gain per month</p>
  </header>
);

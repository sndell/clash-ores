import { UpgradeCalculatorForm } from "@/features/upgrade-calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ore Calculator - Single equipment",
  description: "Specify rarity and levels to calculate ores for a single equipment.",
  openGraph: {
    title: "Ore Calculator - Single equipment",
    description: "Specify rarity and levels to calculate ores for a single equipment.",
    url: "https://ores.sundell.dev/single",
    siteName: "Ore Calculator",
  },
  alternates: {
    canonical: "https://ores.sundell.dev/single",
  },
};

export default function Page() {
  return (
    <div className="grid place-items-center px-3 pt-3 bg-center bg-cover pb-19 h-dvh bg-second">
      <div className="absolute inset-0 backdrop-blur-sm h-dvh bg-primary" />
      <UpgradeCalculatorForm />
    </div>
  );
}

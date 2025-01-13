import { UpgradeCalculatorForm } from "@/features/upgrade-calculator";

export default function Page() {
  return (
    <div id="single-page" className="grid place-items-center px-3 pt-3 pb-19 h-dvh">
      <div className="absolute inset-0 backdrop-blur-sm h-dvh bg-primary" />
      <UpgradeCalculatorForm />
    </div>
  );
}

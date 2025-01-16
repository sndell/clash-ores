import { Footer } from '@/components/ui/Footer';

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

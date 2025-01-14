import { Footer } from '@/components/Footer';

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

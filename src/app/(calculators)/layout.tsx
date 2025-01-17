import { BottomDock } from '@/components/ui/BottomDock';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <BottomDock />
    </>
  );
}

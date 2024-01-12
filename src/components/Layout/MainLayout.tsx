import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col overflow-auto h-dscreen no-scrollbar">
      <div className="flex flex-col items-center flex-1 gap-8 p-2 justify-evenly backdrop-blur-md bg-black/80">
        {children}
      </div>
    </div>
  );
};

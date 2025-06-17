import { cn } from "@/util/cn";

interface BackgroundOverlayProps {
  className?: string;
}

export const BackgroundOverlay = ({ className }: BackgroundOverlayProps) => {
  return <div className={cn("absolute inset-0 backdrop-blur-sm bg-black/50", className)} />;
};


import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export const GradientBackground = ({
  className,
  children,
}: GradientBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background transform rotate-12 scale-150" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-accent/5 to-background transform -rotate-12 scale-150" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

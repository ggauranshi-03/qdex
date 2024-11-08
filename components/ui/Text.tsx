// Text.tsx
import React from "react";
import clsx from "clsx";

type TextSize = "small" | "medium" | "large" | "xlarge";

interface TextProps {
  children: React.ReactNode;
  size?: TextSize;
  color?: string;
  className?: string; // New prop for additional styling
}

const Text: React.FC<TextProps> = ({
  children,
  size = "medium",
  color,
  className,
}) => {
  const sizeClasses = clsx({
    "text-sm md:text-base lg:text-lg": size === "small",
    "text-base md:text-lg lg:text-xl": size === "medium",
    "text-lg md:text-xl lg:text-2xl": size === "large",
    "text-xl md:text-2xl lg:text-4xl": size === "xlarge",
  });

  return <p className={clsx(sizeClasses, color, className)}>{children}</p>;
};

export default Text;

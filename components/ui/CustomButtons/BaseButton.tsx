"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/utils";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  gradientType?: "red-black" | "black-red";
  className?: string;
}

export default function BaseButton({
  children,
  icon: Icon,
  gradientType = "red-black",
  className,
  onClick,
  ...props
}: GradientButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const gradientClasses = {
    "red-black": "from-red-600 to-black",
    "black-red": "from-black to-red-600",
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset after animation
    if (onClick) onClick(event);
  };

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-xl shadow-2xl group",
        "transition-all ease-out duration-300",
        "hover:ring-2 hover:ring-offset-2 hover:ring-red-600",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600",
        "hover:scale-105",
        isClicked && "scale-95",
        gradientClasses[gradientType],
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-75 bg-gradient-to-br group-hover:opacity-100"></span>
      <span className="absolute bottom-0 right-0 w-64 h-64 mb-32 mr-4 transition-all duration-300 ease-out transform translate-x-12 translate-y-12 bg-red-600 rounded-full opacity-25 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-50"></span>
      <span className="relative flex items-center">
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {children}
      </span>
    </button>
  );
}

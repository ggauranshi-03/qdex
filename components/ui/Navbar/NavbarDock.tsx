"use client";
import React from "react";

import { Dock, DockIcon } from "../dock";
import { usePathname } from "next/navigation";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  const currentPath = usePathname();

  // Function to determine if the current path matches the icon
  const getOpacity = (path: string) => {
    return currentPath === path ? "opacity-100" : "opacity-50"; // Full opacity for the active page
  };

  return (
    <div className="relative ">
      <Dock
        className="space-x-5 outline-none font-bold text-neutral-400"
        direction="middle"
      >
        <DockIcon className={`w-fit ${getOpacity("/swap")}`}>
          <h1>Swap</h1>
        </DockIcon>
        <DockIcon className={`w-fit ${getOpacity("/limit")}`}>
          <h1>Limit</h1>
        </DockIcon>
        <DockIcon className={`w-fit ${getOpacity("/")}`}>
          <Link href="/">
            <h1>Home</h1>
          </Link>
        </DockIcon>
        <DockIcon className={`w-fit ${getOpacity("/pool")}`}>
          <Link href="/pool">
            <h1>Pool</h1>
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}

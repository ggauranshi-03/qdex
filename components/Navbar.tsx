"use client";
import React from "react";

import ConnectWalletButton from "./ui/CustomButtons/ConnectButton";
import { DockDemo } from "./ui/Navbar/NavbarDock";
import { usePathname } from "next/navigation";

import NetworkDropDown from "./ui/NetworkDropDown/NetworkDropDown";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex flex-row justify-between items-start w-full px-5">
      <DockDemo />
      <div className="flex flex-row items-center mt-5">
        {pathName != "/" && <NetworkDropDown />}
        <ConnectWalletButton />
      </div>
    </nav>
  );
};

export default Navbar;

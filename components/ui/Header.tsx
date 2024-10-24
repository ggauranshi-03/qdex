"use client";
import React from "react";
import SwapComponent from "../web3/swap-component";

const Header = () => {
  return (
    <main className="flex flex-col w-2/3 justify-center items-center gap-10 ">
      <h1 className="text-6xl font-semibold text-center">
        {" "}
        Swap with Quantum proof security
      </h1>
      <SwapComponent />
    </main>
  );
};

export default Header;

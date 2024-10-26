// src/components/ui/PriceComponent.tsx

import React from "react";
import { Coin } from "@/types/coin"; // Adjust the path as necessary

interface PriceComponentProps {
  token: Coin | null; // The selected token
  amount: number | undefined; // The amount to convert
}

const PriceComponent: React.FC<PriceComponentProps> = ({ token, amount }) => {
  // Calculate the price based on the amount and token price
  const price = token ? (amount ? amount * (token.current_price || 0) : 0) : 0;

  return (
    <div className="flex flex-col items-start">
      <p className="text-neutral-400 font-semibold text-sm">
        {token ? `${price.toFixed(2)} ${token.symbol}` : "Select a token"}
      </p>
    </div>
  );
};

export default PriceComponent;

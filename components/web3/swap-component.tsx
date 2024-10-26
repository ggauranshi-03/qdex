// src/components/SwapComponent.tsx

import React, { useState } from "react";
import TokenInput from "./token-input";
import PriceComponent from "@/components/ui/PriceComponent";
import { Button } from "@/components/ui/button";
import { Coin } from "@/types/coin"; // Adjust the path as necessary

const SwapComponent = () => {
  const [sellValue, setSellValue] = useState<number | undefined>(undefined);
  const [buyValue, setBuyValue] = useState<number | undefined>(undefined);
  const [token1, setToken1] = useState<Coin | null>(null); // State for Token 1
  const [token2, setToken2] = useState<Coin | null>(null); // State for Token 2

  // Disable input fields if no token is selected
  const isSellInputDisabled = !token1;
  const isBuyInputDisabled = !token2;

  return (
    <div className="flex w-full p-3 space-y-5 flex-col items-center justify-center">
      <div className="w-full space-y-5 rounded-xl bg-black p-4 border">
        <div className="flex flex-col border p-3 rounded-lg space-y-4">
          <TokenInput
            value={sellValue}
            onChange={setSellValue}
            selectedCoin={token1}
            onSelect={setToken1}
            title="Sell"
            disabled={isSellInputDisabled} // Disable if no token is selected
          />
          <PriceComponent token={token1} amount={sellValue} />
          {isSellInputDisabled && (
            <p className="text-red-500 text-sm">
              Please select a token to sell.
            </p>
          )}
        </div>
        <div className="flex flex-col border p-3 rounded-lg space-y-4">
          <TokenInput
            value={buyValue}
            onChange={setBuyValue}
            selectedCoin={token2}
            onSelect={setToken2}
            title="Buy"
            disabled={isBuyInputDisabled} // Disable if no token is selected
          />
          <PriceComponent token={token2} amount={buyValue} />
          {isBuyInputDisabled && (
            <p className="text-red-500 text-sm">
              Please select a token to buy.
            </p>
          )}
        </div>
        <Button
          className="w-full text-xl font-bold"
          size="lg"
          disabled={!token1 || !token2}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SwapComponent;

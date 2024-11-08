// src/components/SwapComponent.tsx

import React, { useState } from "react";
import TokenInput from "./token-input";
import PriceComponent from "@/components/ui/PriceComponent";
import { Button } from "@/components/ui/button";

import { useSwapStore } from "@/stores/swapStore";

const SwapComponent = () => {
  const swapStore = useSwapStore();
  const { token1, token2, setToken1, setToken2 } = swapStore;
  const [sellValue, setSellValue] = useState<number | undefined>(undefined);
  const [buyValue, setBuyValue] = useState<number | undefined>(undefined);

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
            disabled={isSellInputDisabled}
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
            disabled={isBuyInputDisabled}
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

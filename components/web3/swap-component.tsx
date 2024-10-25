import React, { useState } from "react";
import { Input } from "../ui/input";
import TokenSelectButton from "../ui/CustomButtons/TokenSelectButton";
import PriceComponent from "../ui/PriceComponent";
import { Button } from "../ui/button";

const SwapComponent = () => {
  const [sellValue, setSellValue] = useState<number>();
  const [buyValue, setBuyValue] = useState<number>();

  return (
    <div className="flex w-full p-2 space-y-5 flex-col items-center justify-center">
      <div className="w-full space-y-5 rounded-xl bg-black p-2 border">
        {/* sell component */}
        <div className="flex flex-col rounded-xl space-y-5 border p-2 ">
          <h1 className="text-neutral-400 text-xl font-bold">Sell</h1>
          <div className="w-full flex flex-row items-center justify-between -mx-2">
            <Input
              onChange={(e) =>
                setSellValue(Number(e.target.value) || undefined)
              }
              value={sellValue || ""}
              placeholder="0"
              className="border-none outline-none text-3xl font-bold text-neutral-200"
              type="number"
            />
            <TokenSelectButton />
          </div>
          <PriceComponent />
        </div>
        <div className="flex flex-col px-2 space-y-5 rounded-xl p-2 border">
          <h1 className="text-neutral-400 text-xl font-bold">Buy</h1>
          <div className="w-full flex flex-row items-center justify-between -mx-2">
            <Input
              onChange={(e) => setBuyValue(Number(e.target.value) || undefined)}
              value={buyValue}
              placeholder="0"
              className="border-none outline-none text-3xl font-bold text-neutral-200"
              type="number"
            />
            <TokenSelectButton />
          </div>
          <PriceComponent />
        </div>
        <Button className="w-full text-xl font-bold text-red-600" size="lg">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SwapComponent;

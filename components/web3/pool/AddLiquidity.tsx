// AddLiquidity.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TokenSelectButton from "@/components/ui/CustomButtons/TokenSelectButton";
import { Separator } from "@/components/ui/separator";
import Text from "@/components/ui/Text";
import { Coin } from "@/types/coin";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

interface Props {
  slug?: string;
}

const AddLiquidity: React.FC<Props> = ({ slug }) => {
  const [selectedCoin1, setSelectedCoin1] = useState<Coin | null>(null);
  const [selectedCoin2, setSelectedCoin2] = useState<Coin | null>(null);

  const handleSelectCoin1 = (coin: Coin) => setSelectedCoin1(coin);
  const handleSelectCoin2 = (coin: Coin) => setSelectedCoin2(coin);

  const clearSelection = () => {
    setSelectedCoin1(null);
    setSelectedCoin2(null);
  };

  return (
    <main className="w-full p-4">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            <ArrowLeft className="cursor-pointer" />
            <Text size="large" className="text-center">
              Add Liquidity
            </Text>
            <Button
              variant="ghost"
              onClick={clearSelection}
              className="font-semibold hover:text-red-500 text-red-500/60 hover:bg-transparent"
            >
              Clear
            </Button>
          </CardTitle>
          <Separator className="my-4" />
        </CardHeader>

        <CardContent>
          <Text className="font-semibold mb-2" size="small">
            Select pair
          </Text>
          <div className="flex flex-row space-x-4">
            <TokenSelectButton
              onSelect={handleSelectCoin1}
              selectedCoin={selectedCoin1}
            />
            <TokenSelectButton
              onSelect={handleSelectCoin2}
              selectedCoin={selectedCoin2}
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default AddLiquidity;

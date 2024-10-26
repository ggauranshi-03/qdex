// src/components/ui/TokenInput.tsx

import React from "react";
import { Input } from "../ui/input";
import TokenSelectButton from "../ui/CustomButtons/TokenSelectButton";
import { Coin } from "@/types/coin"; // Adjust the path as necessary

interface TokenInputProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  selectedCoin: Coin | null;
  onSelect: (coin: Coin) => void;
  title: string;
  disabled: boolean;
}

const TokenInput: React.FC<TokenInputProps> = ({
  value,
  onChange,
  selectedCoin,
  onSelect,
  title,
  disabled,
}) => (
  <div className="flex flex-col space-y-  p-2">
    <h1 className="text-neutral-400 text-xl font-bold">{title}</h1>
    <div className="w-full flex flex-row items-center justify-between -mx-2">
      <Input
        onChange={(e) => onChange(Number(e.target.value) || undefined)}
        value={value || ""}
        placeholder="0"
        className="border-none outline-none text-3xl font-bold text-neutral-200"
        type="number"
        disabled={disabled}
      />
      <TokenSelectButton selectedCoin={selectedCoin} onSelect={onSelect} />
    </div>
  </div>
);

export default TokenInput;

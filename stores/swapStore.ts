// src/stores/swapStore.ts
import { create } from "zustand";
import zukeeper from "zukeeper";
import { Coin } from "@/types/coin";

interface SwapStore {
  token1: Coin | null;
  token2: Coin | null;
  setToken1: (coin: Coin | null) => void;
  setToken2: (coin: Coin | null) => void;
}

export const useSwapStore = create<SwapStore>()(
  zukeeper((set) => ({
    token1: null,
    token2: null,
    setToken1: (coin) => set({ token1: coin }),
    setToken2: (coin) => set({ token2: coin }),
  }))
);

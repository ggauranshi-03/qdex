import { createStore } from "zustand/vanilla";

// Define the properties of a Coin
export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  ath: number; // All-Time High
  ath_change_percentage: number; // Percentage change from ATH
  ath_date: string; // Date of ATH
  atl: number; // All-Time Low
  atl_change_percentage: number; // Percentage change from ATL
  atl_date: string; // Date of ATL
  circulating_supply: number; // Circulating Supply
  current_price: number; // Current Price
  fully_diluted_valuation: number; // Fully Diluted Valuation
  high_24h: number; // 24h High
  low_24h: number; // 24h Low
  market_cap: number; // Market Cap
  market_cap_change_24h: number; // Market Cap Change (24h)
  market_cap_change_percentage_24h: number; // Market Cap Change Percentage (24h)
  market_cap_rank: number; // Market Cap Rank
  max_supply: number; // Max Supply
  price_change_24h: number; // Price Change (24h)
  price_change_percentage_24h: number; // Price Change Percentage (24h)
  roi: null | unknown; // Return on Investment
  total_supply: number; // Total Supply
  total_volume: number; // Total Volume
}

// Define the structure of the store
export interface CoinStore {
  coins: Coin[];
  setCoins: (coins: Coin[]) => void;
}

// Default state for the store
export const defaultCoinState: CoinStore = {
  coins: [],
  setCoins: () => {}, // Placeholder, will be defined later
};

// Create the coin store
export const createCoinStore = (initState: CoinStore = defaultCoinState) => {
  return createStore<CoinStore>()((set) => ({
    ...initState,
    setCoins: (coins) => set({ coins }), // Update the coins state
  }));
};

// Create a new instance of the store
export const coinStore = createCoinStore();

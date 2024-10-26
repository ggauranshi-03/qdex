// src/types.ts

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | null;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  total_supply: number;
  total_volume: number;
}

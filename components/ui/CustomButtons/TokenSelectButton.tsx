import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { getAllCoinsData } from "@/actions/getCoinData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import SearchBar from "../CustomSearch/CustomSearch";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Separator } from "../separator";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  // Add other coin properties as needed
}

const TokenSelectButton = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);

  const fetchCoins = async () => {
    try {
      const data = await getAllCoinsData();
      console.log(data);
      setCoins(data);
      setFilteredCoins(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = (query: string) => {
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      setFilteredCoins(coins);
      return;
    }

    const filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm) ||
        coin.symbol.toLowerCase().includes(searchTerm)
    );

    setFilteredCoins(filtered);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Select Token</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[455px] gap-5">
        <DialogHeader className="gap-3">
          <DialogTitle>Select Token</DialogTitle>
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search name or token symbol"
            debounceDelay={500}
            className="my-4"
            initialValue=""
          />
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="flex flex-col gap-3">
            {filteredCoins.map((coin) => (
              <div key={coin.id}>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 p-5 py-6  w-full"
                  onClick={() => {
                    // Handle coin selection here
                    console.log("Selected coin:", coin);
                  }}
                >
                  {coin.symbol && (
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={36}
                      height={36}
                    />
                  )}
                  <div className="flex flex-col items-start w-full">
                    <span className="font-medium">{coin.name}</span>

                    <span className="text-sm text-gray-500">{coin.symbol}</span>
                  </div>
                </Button>
                <Separator />
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TokenSelectButton;

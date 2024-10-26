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
import useSearch from "@/hooks/useSearch"; // Import the custom hook
import TokenSkeleton from "@/components/Loaders/TokenSkeleton"; // Import the TokenSkeleton
import { Coin } from "@/types/coin"; // Import the Coin type

interface TokenSelectButtonProps {
  onSelect: (coin: Coin) => void; // Callback to set selected coin
  selectedCoin: Coin | null; // Currently selected coin
}
//TODO:for now passing as props later will be stored in store
const TokenSelectButton: React.FC<TokenSelectButtonProps> = ({
  onSelect,
  selectedCoin,
}) => {
  //states for every variables
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [dialogOpen, setDialogOpen] = useState(false); // State to manage dialog open/close

  //function to fetch coins from action files
  const fetchCoins = async () => {
    try {
      setIsLoading(true);
      const data = await getAllCoinsData();
      console.log(data);
      setCoins(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  //fetch coin when component mounts
  useEffect(() => {
    fetchCoins();
  }, []);
  //use search hook to search coins with name and symbol
  const { query, setQuery, filteredItems } = useSearch(coins, [
    "name",
    "symbol",
  ]);

  const handleImageLoad = (coinId: string) => {
    setLoadedImages((prev) => new Set([...prev, coinId]));
  };

  const handleCoinSelect = (coin: Coin) => {
    onSelect(coin); // Call the provided callback with the selected coin
    setDialogOpen(false); // Close the dialog after selecting the coin
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setDialogOpen(true)}
          className="border-2 p-4"
        >
          {selectedCoin ? ( // Conditionally render the selected coin's details
            <div className="flex flex-row justify-center items-center gap-2">
              <Image
                src={selectedCoin.image}
                alt={selectedCoin.symbol}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="uppercase">{selectedCoin.symbol}</span>
            </div>
          ) : (
            "Select Token"
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[455px] gap-5">
        <DialogHeader className="gap-3">
          <DialogTitle>Select Token</DialogTitle>
          <SearchBar
            onSearch={setQuery}
            placeholder="Search name or token symbol"
            debounceDelay={500}
            className="my-4"
            initialValue={query}
          />
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="flex flex-col gap-3">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <div key={index}>
                    <TokenSkeleton /> <Separator />
                  </div>
                ))
              : filteredItems.map((coin) => (
                  <div key={coin.id}>
                    <Button
                      variant="ghost"
                      className="flex items-center justify-start gap-2 p-5 py-6 w-full"
                      onClick={() => handleCoinSelect(coin)} // Select the coin and close the dialog
                    >
                      <div className="relative w-9 h-9">
                        {!loadedImages.has(coin.id) && (
                          <TokenSkeleton height="9" width="9" />
                        )}
                        <Image
                          src={coin.image}
                          alt={coin.name}
                          width={36}
                          height={36}
                          onLoad={() => handleImageLoad(coin.id)}
                          style={{
                            visibility: loadedImages.has(coin.id)
                              ? "visible"
                              : "hidden",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <span className="font-medium">{coin.name}</span>
                        <span className="text-sm text-gray-500">
                          {coin.symbol}
                        </span>
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

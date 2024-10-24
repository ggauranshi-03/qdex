import React from "react";
import PulsatingButton from "../pulsating-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  useAccount,
  useEnsName,
  useBalance,
  useDisconnect,
  useEnsAvatar,
} from "wagmi"; // Import useBalance
import DisconnectButton from "./DisconnectButton";
import Image from "next/image";

const ConnectedButton = () => {
  const { address } = useAccount();
  const { connectors } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const displayAddress =
    ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "");

  // Use the useBalance hook to fetch the balance
  const {
    data: balanceData,
    isLoading,
    isError,
  } = useBalance({
    address: address,
    watch: true, // Keep the balance updated
  });

  // Handle loading and error states
  if (isLoading) return <p>Loading balance...</p>;
  if (isError) return <p>Error fetching balance</p>;

  const balance = balanceData?.formatted || "0.00"; // Format balance if available

  return (
    <div className="rounded-full p-2 flex items-center justify-center cursor-pointer">
      <Sheet>
        <SheetTrigger>
          {connectors.map((connector) => (
            <div key={connector.id} className="relative">
              <Image
                width={50} // Larger size for the icon
                height={50}
                src={connector.icon}
                alt="connector"
                className="rounded-full"
              />
              <div className="absolute top-9 right-0">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-75 animate-ping" />{" "}
                {/* Pulsating effect */}
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />{" "}
                {/* Solid badge */}
              </div>
            </div>
          ))}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className=" flex flex-row items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-2">
                <PulsatingButton className="bg-green-500 rounded-full"></PulsatingButton>

                {displayAddress}
              </div>
              <DisconnectButton />
            </SheetTitle>
            <SheetDescription>
              Balance: {balance} ETH {/* Display the balance */}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ConnectedButton;

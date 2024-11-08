import AddLiquidity from "@/components/web3/pool/AddLiquidity";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col h-full w-full items-center justify-start  sm:px-6 lg:px-8  max-w-3xl ">
      <AddLiquidity />
    </main>
  );
};

export default page;

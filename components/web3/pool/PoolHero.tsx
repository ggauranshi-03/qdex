"use client";
import { Button } from "@/components/ui/button";
import BaseButton from "@/components/ui/CustomButtons/BaseButton";
import GradientButton from "@/components/ui/CustomButtons/BaseButton";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const PoolHero = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col h-full w-full items-center justify-start  sm:px-6 lg:px-8">
      <div className="flex flex-col items-center w-full max-w-3xl justify-center">
        {/* Header */}
        <div className="flex flex-row  justify-between w-full items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Positions</h1>
          <BaseButton
            gradientType="red-black"
            onClick={() => router.push("/add/eth")}
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            New Positions
          </BaseButton>
        </div>
      </div>
    </main>
  );
};

export default PoolHero;

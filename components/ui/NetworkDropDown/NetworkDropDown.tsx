// components/AssetDropdown.tsx

import React from "react";
import useAssetPlatforms from "@/hooks/useAssetPlatform"; // Import the custom hook
import Image from "next/image";

const NetworkDropDown: React.FC = () => {
  const { platforms, loading, error } = useAssetPlatforms();
  console.log("platforms", platforms);
  if (loading) {
    return <p>Loading asset platforms...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!platforms || platforms.length === 0) {
    return <p>No asset platforms available</p>;
  }

  return (
    <select>
      {platforms.map((platform) => (
        <option key={platform?.id} value={platform?.id}>
          {/* <Image
            priority
            src={platform?.image?.thumb}
            alt={platform?.name}
            width="20"
            height="20"
          /> */}
          {platform?.name}
        </option>
      ))}
    </select>
    // <p>{platforms[0].name}</p>
  );
};

export default NetworkDropDown;

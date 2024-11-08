// hooks/useAssetPlatforms.ts

import { getAssetPlatforms } from "@/actions/getCoinData";
import { useEffect, useState } from "react";

interface Image {
  thumb: string;
  small: string;
  large: string;
}

const useAssetPlatforms = () => {
  const [platforms, setPlatforms] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getAssetPlatforms();

        console.log(response);
        setPlatforms(response);
      } catch (err: any) {
        setError("Failed to load asset platforms. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  return { platforms, loading, error };
};

export default useAssetPlatforms;

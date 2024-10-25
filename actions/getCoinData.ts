"use server";
export const getAllCoinsData = async () => {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY || "",
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Failed to fetch data: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return { error: "Failed to fetch coin data" };
  }
};

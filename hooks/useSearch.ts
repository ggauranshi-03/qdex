// hooks/useSearch.ts
import { useState } from "react";

interface Searchable {
  name?: string;
  symbol?: string;
}

const useSearch = <T extends Searchable>(
  items: T[],
  searchKeys: (keyof T)[]
) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    searchKeys.some(
      (key) => String(item[key]).toLowerCase().includes(query.toLowerCase()) // Convert to string for search
    )
  );

  return {
    query,
    setQuery,
    filteredItems,
  };
};

export default useSearch;

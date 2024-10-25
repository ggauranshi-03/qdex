// SearchBar.tsx
import React, { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  debounceDelay?: number;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search...",
  className = "",
  debounceDelay = 300,
  initialValue = "",
}) => {
  const [searchQuery, setSearchQuery] = useState<string>(initialValue);

  const debouncedSearch = useCallback(
    (value: string) => {
      const timeoutId = setTimeout(() => {
        onSearch(value);
      }, debounceDelay);

      return () => clearTimeout(timeoutId);
    },
    [onSearch, debounceDelay]
  );

  useEffect(() => {
    const cleanup = debouncedSearch(searchQuery);
    return cleanup;
  }, [searchQuery, debouncedSearch]);

  const clearSearch = (): void => {
    setSearchQuery("");
    onSearch("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder={placeholder}
        className="pr-8"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

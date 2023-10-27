"use client";

import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      onSearch(search);
    }, 800);
    return () => clearTimeout(debounceSearch);
  }, [search]);

  return (
    <div className="w-full md:w-1/2 mx-auto flex justify-between items-center gap-2 mt-8 rounded-full px-6 py-3 ring ring-black focus:ring-2 ">
      <input
        type="search"
        placeholder="Search for the blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-transparent outline-none"
      />
      <div className="justify-center">
        <SearchIcon />
      </div>
    </div>
  );
}

export default Searchbar;

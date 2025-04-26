import React, { useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { useTheme } from "../contexts/ThemeContext";

const Filters = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const productContext = useProductContext();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    productContext.filterProducts(search, filter);
    if (sort === "lowToHigh") {
      productContext.lowToHigh();
    } else if (sort === "highToLow") {
      productContext.highToLow();
    }
  };

  const inputClasses = `border p-2 rounded w-full md:w-1/4 ${
    theme?.darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white"
  }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row md:items-center gap-4 mb-6"
    >
      <input
        className={inputClasses}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className={inputClasses}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        {[...new Set(productContext?.products?.map((p) => p.category))].map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        className={inputClasses}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Price Sort</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full md:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default Filters;
import React, { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { debounce } from "../../utils/helpers";

const SearchAndFilter = () => {
  const {
    categories,
    selectedCategory,
    sortOrder,
    handleSearch,
    handleCategoryChange,
    handleSortChange,
  } = useProducts();

  const [searchQuery, setSearchQuery] = useState("");

  // Debounce search
  const debouncedSearch = debounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery("");
    handleSearch("");
    handleCategoryChange("all");
    handleSortChange("default");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="md:w-48">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="md:w-48">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={sortOrder}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={handleClearFilters}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;

import React, { useEffect, useState } from "react";
import ProductGrid from "../components/products/ProductGrid";
import SearchAndFilter from "../components/products/SearchAndFilter";
import { useProducts } from "../hooks/useProducts";

const Products = () => {
  const { filteredProducts, loadProducts, loadCategories, isLoading } =
    useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8); // ✅ Default 8 per page

  // ✅ Load data once
  useEffect(() => {
    if (filteredProducts.length === 0) {
      loadProducts();
      loadCategories();
    }
  }, [loadProducts, loadCategories, filteredProducts.length]);

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentProducts = filteredProducts.slice(start, end);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // ✅ When filters/search applied, reset to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        All Products
      </h1>

      {/* 🔍 Search + Filter section */}
      <SearchAndFilter />

      {/* 🛍 Product grid */}
      <ProductGrid products={currentProducts} isLoading={isLoading} />

      {/* 🔢 Pagination Controls */}
      {filteredProducts.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          {/* Products per page selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-gray-700 text-sm">
              Show:
            </label>
            <select
              id="perPage"
              value={productsPerPage}
              onChange={(e) => {
                setProductsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
            </select>
          </div>

          {/* Page navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md text-sm border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Previous
            </button>

            {/* Page number buttons */}
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 text-sm rounded-full ${
                    currentPage === i + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md text-sm border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

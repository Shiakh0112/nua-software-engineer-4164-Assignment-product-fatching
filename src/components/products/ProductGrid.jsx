import React from "react";
import ProductCard from "./ProductCard";
import Loading from "../common/Loading";

const ProductGrid = ({ products, isLoading }) => {
  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

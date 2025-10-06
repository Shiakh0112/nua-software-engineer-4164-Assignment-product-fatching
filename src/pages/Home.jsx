import React, { useEffect } from "react";
import Banner from "../components/home/Banner";
import AboutSection from "../components/home/AboutSection";
import ProductSlider from "../components/products/ProductSlider";
import ProductGrid from "../components/products/ProductGrid";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";

const Home = () => {
  const { products, loadProducts, isLoading } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []); // ✅ No dependency to prevent infinite loop

  const displayProducts = products.slice(0, 9);

  return (
    <div>
      <Banner />

      <div className="container mx-auto  py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600">Check out our most popular products</p>
        </div>

        <ProductGrid products={displayProducts} isLoading={isLoading} />

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition"
          >
            View All Products
          </Link>
        </div>
      </div>

      <AboutSection />
      <ProductSlider />
    </div>
  );
};

export default Home;

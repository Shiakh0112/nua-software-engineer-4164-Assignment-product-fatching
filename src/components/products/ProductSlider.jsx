import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // ✅ React Slider
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { useProducts } from "../../hooks/useProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const { products, loadProducts } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) loadProducts();
  }, [products, loadProducts]);

  useEffect(() => {
    if (products.length > 0) {
      const sorted = [...products].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      setFeaturedProducts(sorted.slice(0, 6));
    }
  }, [products]);

  if (featuredProducts.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
        </div>

        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div key={product.id} className="px-3">
              <div className="bg-white h-[50vh] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="h-48 flex justify-center items-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-xl font-bold text-indigo-600">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;

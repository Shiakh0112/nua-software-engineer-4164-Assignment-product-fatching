import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../hooks/useCart";
import Loading from "../common/Loading";
import { formatPrice } from "../../utils/helpers";

const ProductDetail = () => {
  const { id } = useParams();
  const { currentProduct, isLoading, loadProductById } = useProducts();
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    loadProductById(id);
  }, [id]);

  if (isLoading) return <Loading message="Loading product..." />;
  if (!currentProduct)
    return <p className="text-center py-8">Product not found.</p>;

  const handleAddToCart = () => {
    addItemToCart(currentProduct, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/products"
        className="text-indigo-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="w-full h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{currentProduct.title}</h1>
          <p className="text-gray-700 mb-4">{currentProduct.description}</p>
          <p className="text-2xl font-semibold text-indigo-600 mb-6">
            {formatPrice(currentProduct.price)}
          </p>

          <div className="flex items-center mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="bg-gray-200 px-3 py-1 rounded-l-md"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 text-center border-t border-b border-gray-300"
            />
            <button
              onClick={() => setQuantity((q) => Math.min(5, q + 1))}
              className="bg-gray-200 px-3 py-1 rounded-r-md"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-md text-white ${
              added ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {added ? "Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

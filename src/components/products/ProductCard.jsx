import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { useCart } from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addItemToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  // Get current quantity in cart for this product
  const currentQty = cartItems.find((item) => item.id === product.id)?.qty || 0;

  const handleAddToCart = (e) => {
    e.preventDefault(); // prevent Link navigation when clicking button

    if (currentQty >= 5) {
      alert("You cannot add more than 5 items of this product.");
      return;
    }

    addItemToCart(product, 1); // Add 1 item
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col relative"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />
      <h3 className="text-sm font-medium text-gray-800 flex-grow">
        {product.title.length > 50
          ? product.title.slice(0, 50) + "..."
          : product.title}
      </h3>
      <p className="text-indigo-600 font-semibold mt-2">
        {formatPrice(product.price)}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`mt-3 w-full py-2 rounded-md text-white text-sm font-medium transition ${
          added ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {currentQty >= 5
          ? "Max Quantity Reached"
          : added
          ? "Added!"
          : "Add to Cart"}
      </button>
    </Link>
  );
};

export default ProductCard;

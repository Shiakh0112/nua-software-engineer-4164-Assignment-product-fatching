import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa"; // ✅ React icon

const CartItem = ({ item }) => {
  const { updateItemQuantity, removeItemFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateItemQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to remove "${item.title}" from the cart?`
    );
    if (confirmDelete) {
      removeItemFromCart(item.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-24 h-24 flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-grow">
          <Link
            to={`/product/${item.id}`}
            className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition"
          >
            {item.title}
          </Link>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Price:</span>
              <span className="font-medium">{formatPrice(item.price)}</span>
            </div>

            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Subtotal:</span>
              <span className="font-medium text-indigo-600">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <QuantitySelector
            value={item.quantity}
            min={1}
            max={10}
            onChange={handleQuantityChange}
          />

          <button
            onClick={handleRemove}
            className="mt-2 text-red-600 hover:text-red-800 transition text-xl"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

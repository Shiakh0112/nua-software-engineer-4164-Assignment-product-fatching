import React from "react";
import { Link } from "react-router-dom";
import {
  formatPrice,
  calculateSubtotal,
  calculateTotal,
} from "../../utils/helpers";

const CartSummary = ({ cartItems }) => {
  const subtotal = calculateSubtotal(cartItems);
  const total = calculateTotal(cartItems);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{cartItems.length > 0 ? formatPrice(10) : formatPrice(0)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>{formatPrice(subtotal * 0.08)}</span>
        </div>

        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold text-indigo-600">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      <Link
        to="/checkout"
        className={`block w-full bg-indigo-600 text-white py-3 px-4 rounded-md text-center hover:bg-indigo-700 transition ${
          cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={(e) => cartItems.length === 0 && e.preventDefault()}
      >
        Proceed to Checkout
      </Link>

      <Link
        to="/products"
        className="block w-full mt-3 bg-gray-200 text-gray-800 py-3 px-4 rounded-md text-center hover:bg-gray-300 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;

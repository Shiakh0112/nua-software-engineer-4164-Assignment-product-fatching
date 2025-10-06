import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';

const OrderConfirmation = ({ orderDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
      </div>
      
      <div className="border-t border-b py-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Order Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Order ID:</span>
            <p className="font-medium">{orderDetails.id}</p>
          </div>
          <div>
            <span className="text-gray-600">Order Date:</span>
            <p className="font-medium">
              {new Date(orderDetails.orderDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            <span className="text-gray-600">Payment Method:</span>
            <p className="font-medium capitalize">{orderDetails.paymentMethod.replace('-', ' ')}</p>
          </div>
          <div>
            <span className="text-gray-600">Total Amount:</span>
            <p className="font-medium">{formatPrice(orderDetails.total)}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
        <p className="text-gray-700">
          {orderDetails.shippingAddress.name}<br />
          {orderDetails.shippingAddress.address}<br />
          {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}<br />
          {orderDetails.shippingAddress.country}
        </p>
      </div>
      
      <div className="flex space-x-4">
        <Link
          to="/"
          className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition text-center"
        >
          Continue Shopping
        </Link>
        <Link
          to="/profile"
          className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition text-center"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
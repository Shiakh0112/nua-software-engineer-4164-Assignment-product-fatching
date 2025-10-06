import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;

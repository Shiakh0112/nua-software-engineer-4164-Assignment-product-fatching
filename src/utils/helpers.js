import { SHIPPING_COST, TAX_RATE } from "./constants";

// Format price to currency
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

// Calculate subtotal
export const calculateSubtotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

// Calculate total with shipping and tax
export const calculateTotal = (cartItems) => {
  const subtotal = calculateSubtotal(cartItems);
  const tax = subtotal * TAX_RATE;
  const shipping = cartItems.length > 0 ? SHIPPING_COST : 0;
  return subtotal + tax + shipping;
};

// Generate a random order ID
export const generateOrderId = () => {
  return "ORD-" + Date.now().toString(36).toUpperCase();
};

// Validate email
export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  calculateTotals,
} from "../store/slices/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  const addItemToCart = (product, quantity = 1) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const removeItemFromCart = (id) => dispatch(removeFromCart(id));

  const updateItemQuantity = (id, quantity) => {
    // Limit quantity to max 10
    const newQuantity = Math.min(quantity, 10);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
    dispatch(calculateTotals());
  };

  const clearCartItems = () => dispatch(clearCart());

  return {
    cartItems,
    totalAmount,
    totalQuantity,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCartItems,
  };
};

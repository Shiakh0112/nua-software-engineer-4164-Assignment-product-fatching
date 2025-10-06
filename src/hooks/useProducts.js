import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchProductById,
  fetchCategories,
  setSearchQuery,
  setSelectedCategory,
  setSortOrder,
  clearCurrentProduct,
} from "../store/slices/productsSlice";

export const useProducts = () => {
  const dispatch = useDispatch();

  const {
    products,
    currentProduct,
    categories,
    filteredProducts,
    isLoading,
    isError,
    message,
    searchQuery,
    selectedCategory,
    sortOrder,
  } = useSelector((state) => state.products);

  const loadProducts = () => dispatch(fetchProducts());
  const loadProductById = (id) => dispatch(fetchProductById(id));
  const loadCategories = () => dispatch(fetchCategories());

  const handleSearch = (query) => dispatch(setSearchQuery(query));
  const handleCategoryChange = (category) =>
    dispatch(setSelectedCategory(category));
  const handleSortChange = (order) => dispatch(setSortOrder(order));

  const clearProduct = () => dispatch(clearCurrentProduct());

  return {
    products,
    currentProduct,
    categories,
    filteredProducts,
    isLoading,
    isError,
    message,
    searchQuery,
    selectedCategory,
    sortOrder,
    loadProducts,
    loadProductById,
    loadCategories,
    handleSearch,
    handleCategoryChange,
    handleSortChange,
    clearProduct,
  };
};

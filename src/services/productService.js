import api from "./api";

export const productService = {
  // Get all products
  getProducts: () => {
    return api.get("/products");
  },

  // Get product by ID
  getProductById: (id) => {
    return api.get(`/products/${id}`);
  },

  // Get all categories
  getCategories: () => {
    return api.get("/products/categories");
  },

  // Get products by category
  getProductsByCategory: (category) => {
    return api.get(`/products/category/${category}`);
  },

  // Search products
  searchProducts: (query) => {
    return api.get(`/products?q=${query}`);
  },
};

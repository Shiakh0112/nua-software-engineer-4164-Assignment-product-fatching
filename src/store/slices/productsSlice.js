import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/productService";

// Async actions
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await productService.getProducts();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id, thunkAPI) => {
    try {
      const res = await productService.getProductById(id);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "products/categories",
  async (_, thunkAPI) => {
    try {
      const res = await productService.getCategories();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Initial state
const initialState = {
  products: [],
  filteredProducts: [],
  currentProduct: null,
  categories: [],
  searchQuery: "",
  selectedCategory: "all",
  sortOrder: "default",
  isLoading: false,
  isError: false,
  message: "",
};

// Filter & sort helper
const filterAndSort = (state) => {
  let result = state.products;

  // Filter by search
  if (state.searchQuery) {
    result = result.filter((p) =>
      p.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }

  // Filter by category
  if (state.selectedCategory && state.selectedCategory !== "all") {
    result = result.filter(
      (p) => p.category.toLowerCase() === state.selectedCategory.toLowerCase()
    );
  }

  // Sort by price
  if (state.sortOrder === "lowToHigh") {
    result = result.slice().sort((a, b) => a.price - b.price);
  } else if (state.sortOrder === "highToLow") {
    result = result.slice().sort((a, b) => b.price - a.price);
  }

  state.filteredProducts = result;
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      filterAndSort(state);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      filterAndSort(state);
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
      filterAndSort(state);
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (s) => {
        s.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.isLoading = false;
        s.products = a.payload;
        filterAndSort(s);
      })
      .addCase(fetchProducts.rejected, (s, a) => {
        s.isLoading = false;
        s.isError = true;
        s.message = a.payload;
      })
      .addCase(fetchProductById.pending, (s) => {
        s.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (s, a) => {
        s.isLoading = false;
        s.currentProduct = a.payload;
      })
      .addCase(fetchCategories.fulfilled, (s, a) => {
        // Convert all categories to lowercase
        s.categories = ["all", ...a.payload.map((cat) => cat.toLowerCase())];
      });
  },
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setSortOrder,
  clearCurrentProduct,
} = productsSlice.actions;

export default productsSlice.reducer;

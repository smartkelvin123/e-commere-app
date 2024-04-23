import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const productFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    try {
      // const response = await axios.get(`${url}/products`);
      const response = await axios.get(`${url}/productsRoute`);
      console.log(response.data);
      return response?.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
);
export const productsCreate = createAsyncThunk(
  "products/productCreate",
  async (values) => {
    try {
      const response = await axios.get(`${url}/productsRoute`, values);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Product creation failed!");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(productFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(productFetch.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(productsCreate.pending, (state, action) => {
        state.createStatus = "pending";
      })
      .addCase(productsCreate.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.createStatus = "success";
        toast.success("Product Created!");
      })
      .addCase(productsCreate.rejected, (state, action) => {
        state.createStatus = "rejected";
      });
  },
});

export default productsSlice.reducer;

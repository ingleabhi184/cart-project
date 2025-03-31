import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");
const initialState = {
  product: storedCart ? JSON.parse(storedCart) : [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const alreadyExist = state.product.find((item) => item.id === action.payload.id);
      if (!alreadyExist) {
        state.product.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.product)); // Save to localStorage
      }
    },
    remove(state, action) {
      state.product = state.product.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.product)); // Update localStorage
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

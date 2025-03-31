import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartSlice"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import sushiReducer from "./slices/sushiSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    sushi: sushiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

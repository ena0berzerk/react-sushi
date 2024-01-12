import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filterReducer from "./filter/slice";
import cartReducer from "./cart/slice";
import sushiReducer from "./sushi/slice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    sushi: sushiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

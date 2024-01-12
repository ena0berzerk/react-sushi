import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { caclTotalPrice } from "../../utils/calcTotalPrice";
import { ICartSlice, ID, TItems } from "./types";

const initialState: ICartSlice = getCartFromLS()!;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<TItems>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = caclTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      const removedItem = (state.items = state.items.filter(
        (item) => item.id !== action.payload
      ));

      state.totalPrice = removedItem.reduce((acc, obj) => {
        return (acc + obj.price) * obj.count;
      }, 0);
    },

    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    minusSushi(state, action: PayloadAction<ID>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count--;

        state.totalPrice -= findItem.price;
      }
    },
  },
});

export const { addItems, removeItem, clearItem, minusSushi } =
  cartSlice.actions;

export default cartSlice.reducer;

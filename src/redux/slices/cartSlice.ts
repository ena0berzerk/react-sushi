import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
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

      state.totalPrice += Number(action.payload.price);
    },
    removeItem(state, action) {
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

    minusSushi(state, action) {
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

// selectors
export const selectCart = (state) => state.cart;
export const selectCartById = (id) => (state) =>
  state.cart.items.find((item) => item.id === id);

export const { addItems, removeItem, clearItem, minusSushi } =
  cartSlice.actions;

export default cartSlice.reducer;

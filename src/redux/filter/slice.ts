import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSlice, TSortProperty } from "./types";

const initialState: IFilterSlice = {
  categoryID: 0,
  currentPage: 1,
  searchValue: "",
  sort: {
    name: "самые популярные",
    sortProperty: "-rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryID(state, action: PayloadAction<number>) {
      state.categoryID = action.payload;
    },
    setSort(state, action: PayloadAction<TSortProperty>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryID, setSort, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;

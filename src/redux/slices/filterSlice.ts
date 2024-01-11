import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TSortProperty = {
  name: string;
  sortProperty: "-rating" | "rating" | "-title" | "title" | "-price" | "price";
};

interface IFilterState {
  categoryID: number;
  currentPage: number;
  searchValue: string;
  sort: TSortProperty;
}

const initialState: IFilterState = {
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
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

// selectors
export const selectorFilter = (state: RootState) => state.filter;

export const { setCategoryID, setSort, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;

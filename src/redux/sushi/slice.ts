import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TPizza, IPizzaSlice, STATUS } from "./types";

export const fetchSushi = createAsyncThunk<TPizza[], Record<string, string>>(
  "sushi/fetchSushi",
  async (params) => {
    const { filterReq, sortByReq, searchReq, currentPage } = params;
    const { data } = await axios.get(
      `https://6ecb02a0c4ef18fe.mokky.dev/sushi?${filterReq}${sortByReq}${searchReq}&page=${currentPage}&limit=8`
    );

    return data.items;
  }
);

const initialState: IPizzaSlice = {
  status: STATUS.LOADING,
  items: [],
};

export const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setSushi(state, action: PayloadAction<TPizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSushi.pending, (state) => {
      state.status = STATUS.LOADING;
      state.items = [];
    });
    builder.addCase(
      fetchSushi.fulfilled,
      (state, action: PayloadAction<TPizza[]>) => {
        state.status = STATUS.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchSushi.rejected, (state) => {
      state.status = STATUS.ERROR;
      state.items = [];
    });
  },
});

export const { setSushi } = sushiSlice.actions;

export default sushiSlice.reducer;

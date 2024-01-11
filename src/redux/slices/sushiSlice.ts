import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSushi = createAsyncThunk(
  "sushi/fetchSushi",
  async (params, thunkAPI) => {
    const { filterReq, sortByReq, searchReq, currentPage } = params;
    const { data } = await axios.get(
      `https://6ecb02a0c4ef18fe.mokky.dev/sushi?${filterReq}${sortByReq}${searchReq}&page=${currentPage}&limit=8`
    );

    // data.meta.total_pages
    // console.log(thunkAPI.getState());
    // console.log(data.meta.total_pages);
    // console.log(thunkAPI.dispatch(data.meta));

    return data.items;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setSushi(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSushi.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchSushi.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(fetchSushi.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

// selectors
export const selectorSushi = (state) => state.sushi;

export const { setSushi, setPageList } = sushiSlice.actions;

export default sushiSlice.reducer;

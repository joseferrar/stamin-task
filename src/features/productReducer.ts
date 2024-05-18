import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
  detail: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (state, { payload }) => {
      state.products = payload;
    },
    setDetailList: (state, { payload }) => {
      state.detail = payload;
    },
  },
});

export const { setProductList, setDetailList } = productSlice.actions;
export default productSlice.reducer;

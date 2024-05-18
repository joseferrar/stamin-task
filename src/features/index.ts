import { configureStore } from "@reduxjs/toolkit";
import {useDispatch} from 'react-redux';
import productReducer from "./productReducer";


const store = configureStore({
  reducer: {
    productList: productReducer,
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
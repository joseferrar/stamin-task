import { Dispatch } from "@reduxjs/toolkit";
import { setDetailList, setProductList } from "../features/productReducer";
import { REACT_URL } from "../components/api";

export const GetProductService =
  (search: string) => (dispatch: Dispatch<any>) => {
    REACT_URL.get(`/products/search?q=${search}`)
      .then((res) => {
        dispatch(setProductList(res.data?.products));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

export const GetDetailService =
  (id: number) => (dispatch: Dispatch<any>) => {
    REACT_URL.get(`/products/${id}`)
      .then((res) => {
        dispatch(setDetailList(res.data));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

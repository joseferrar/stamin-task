import axios from "axios";

export const REACT_URL = axios.create({
  baseURL: "https://dummyjson.com",
});
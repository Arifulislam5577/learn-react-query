import axios from "axios";

export const getProducts = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export const getProductById = (id) => {
  return axios.get("https://fakestoreapi.com/products/" + id);
};

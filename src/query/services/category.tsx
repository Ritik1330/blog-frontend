import axios from "axios";
import { API_BASE_URL } from "../urls";

export const newCategory = async (e: any) => {
  return await axios.post(API_BASE_URL + "/category/new", e, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getAllCategories = async (e: any) => {
  const response = await axios.get("http://localhost:4000/api/v1/category/all");
  console.log(response.data)
  return response.data;

};

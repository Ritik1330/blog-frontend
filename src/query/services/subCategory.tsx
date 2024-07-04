import axios from "axios";
import { API_BASE_URL } from "../urls";

export const newSubCategory = async (e: any) => {
  return await axios.post(API_BASE_URL + "/subCategory/new", e, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getAllSubCategories = async (e: any) => {
  const response = await axios.get(API_BASE_URL + "/subCategory/all");
  console.log(response.data);
  return response.data;
};

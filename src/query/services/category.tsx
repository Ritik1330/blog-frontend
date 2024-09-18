import axios from "axios";
import { API_BASE_URL } from "../urls";

export const newCategory = async (e: any) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`,
    e,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
export const getAllCategories = async (e: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`,
  );
  console.log(response.data);
  return response.data;
};

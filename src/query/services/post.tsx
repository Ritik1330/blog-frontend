import axios from "axios";
import { API_BASE_URL } from "../urls";

export const newPost = async (e: any) => {
  return await axios.post(API_BASE_URL + "/post/new", e, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getAllPost = async (e: any) => {
  const response = await axios.get(API_BASE_URL + "/post/all");
  console.log(response.data);
  return response.data;
};

import axios from "axios";
import { API_BASE_URL } from "../urls";

export const newstaticPage = async (e: any) => {
  const response = await axios.post(API_BASE_URL + "/staticPages", e, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const getAllstaticPage = async (e: any) => {
  const response = await axios.get(API_BASE_URL + "/staticPages");
  return response.data;
};

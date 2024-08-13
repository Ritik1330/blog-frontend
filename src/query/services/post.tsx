import axios from "axios";
import { API_BASE_URL } from "../urls";

export const newPost = async (e: any) => {
  return await axios.post(API_BASE_URL + "/posts", e, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getAllPost = async (e: any) => {
  const response = await axios.get(API_BASE_URL + "/posts");
  console.log(response.data);
  return response.data;
};

export const postDetails = async (e: any) => {
  const dynamicData = await fetch(`${process.env.API_BASE_URL}/posts/${e}`, {
    cache: "no-store",
  });
  return dynamicData.json();
  
  // const response = await axios.get(
  //   process.env.API_BASE_URL + "/posts/" + e,
  // );
  
  // return response.data;
};

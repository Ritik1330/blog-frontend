import axios from "axios";

export const newPost = async (e: any) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`,
    e,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
export const getAllPost = async (e: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`,
  );
  console.log(response.data);
  return response.data;
};

export const postDetails = async (e: any) => {
  const dynamicData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`,
    {
      cache: "no-store",
    },
  );
  return dynamicData.json();

  // const response = await axios.get(
  //   process.env.NEXT_PUBLIC_API_URL  + "/posts/" + e,
  // );

  // return response.data;
};

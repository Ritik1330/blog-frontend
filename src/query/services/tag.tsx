import axios from "axios";

export const newTag = async (e: any) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/tags`, e, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getAllTags = async (e: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/tags`,
  );
  return response.data;
};

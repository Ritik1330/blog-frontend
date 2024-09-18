import axios from "axios";

export const newstaticPage = async (e: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staticPages`,
    e,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};
export const getAllstaticPage = async (e: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staticPages`,
  );
  return response.data;
};

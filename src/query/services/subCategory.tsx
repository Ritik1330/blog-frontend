import axios from "axios";

export const newSubCategory = async (e: any) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subCategories`,
    e,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
export const getAllSubCategories = async (e: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subCategories`,
  );
  console.log(response.data);
  return response.data;
};

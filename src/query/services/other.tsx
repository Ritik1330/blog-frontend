import axios from "axios";
// import { HEROIMAGE, TRANSLATER } from "./urls";

export const UplodImage = async (e: any) => {
  console.log(e);
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/files/image`,
    e,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
export const Translater = async (e: any) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/translater?value=${e}`,
  );
  return response.data;
};

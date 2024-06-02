import axios from "axios";
import { HEROIMAGE, TRANSLATER } from "./urls";

// export const test = async () => await axios.get(API_BASE_URL + "/posts");

export const UplodImage = async (e: any) => {
  return await axios.post(HEROIMAGE, e, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
export const Translater = async (e: any) => {
  return await axios.put(`${TRANSLATER}?value=${e}`);
};

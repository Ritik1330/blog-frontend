import axios from "axios";
// import { HEROIMAGE, TRANSLATER } from "./urls";

const API_BASE_URL = "http://localhost:4000/api/v1";
const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;
const HEROIMAGE = getApiUrl("/image");
const TRANSLATER = getApiUrl("/translater");




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

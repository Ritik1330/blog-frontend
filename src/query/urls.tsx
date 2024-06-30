export const API_BASE_URL = "http://localhost:4000/api/v1";
const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;
export const HEROIMAGE = getApiUrl("/image");
export const TRANSLATER = getApiUrl("/translater");



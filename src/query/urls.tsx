export const API_BASE_URL = process.env.API_BASE_URL;
const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;
export const HEROIMAGE = getApiUrl("/image");
export const TRANSLATER = getApiUrl("/translater");

import axios from "../../utilities/axios";

export const getTags = async () => {
  const response = axios.get("/tags");

  return response.data;
};

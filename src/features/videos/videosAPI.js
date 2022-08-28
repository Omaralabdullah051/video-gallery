import axios from "../../utilities/axios";

export const getVideos = async () => {
  const response = axios.get("/videos");

  return (await response).data;
};

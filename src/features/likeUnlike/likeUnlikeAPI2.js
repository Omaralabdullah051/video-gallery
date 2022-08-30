import axios from "../../utilities/axios";

export const updateUnlike = async ({ id, numberOfUnlikes }) => {
  const response = await axios.patch(`/videos/${id}`, {
    unlikes: numberOfUnlikes,
  });

  return response.data;
};

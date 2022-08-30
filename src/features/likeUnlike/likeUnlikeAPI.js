import axios from "../../utilities/axios";

export const updateLike = async ({ id, numberOfLikes }) => {
  const response = await axios.patch(`/videos/${id}`, { likes: numberOfLikes });

  return response.data;
};

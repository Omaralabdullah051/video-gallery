import axios from "../../utilities/axios";

//? Our url should be like that (almost same example)
//* https://lws-server-client.herokuapp.com/videos?tags_like=javascript&tags_like=react&id_ne=4&_limit=5

//? tags = ['javascript', 'react']
//? tags.map((tag) => `tags_like=${tag}`) will return the array
//* ['tags_like=javascript', 'tags_like=react']
//* tags.map((tag) => `tags_like=${tag}`).join("&") +`&id_ne=${id}&_limit=${limit}` will return tags_like=javascript&tags_like=react&id_ne=4&_limit=5

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const response = await axios.get(`/videos?${queryString}`);

  return response.data;
};

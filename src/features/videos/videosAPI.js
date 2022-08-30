import axios from "../../utilities/axios";

export const getVideos = async (tags, search, pageNumber) => {
  let queryString = "";
  let queryString2 = "";

  if (pageNumber) {
    if (pageNumber === 1) queryString2 = `&_start=0&_end=8`;
    if (pageNumber === 2) queryString2 = `&_start=8&_end=16`;
    if (pageNumber === 3) queryString2 = `&_start=16&_end=24`;
    if (pageNumber === 4) queryString2 = `&_start=24&_end=32`;
  }

  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    queryString2 = "";
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`/videos?${queryString}${queryString2}`);

  return response.data;
};

import axios from "axios";

const API_URL = process.env.API_URL;
const TEST_API = process.env.TEST_API;
export const getSCTStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/stories?populate=*`);
    return response.data.data.map((story) => ({
      id: story.id,
      ...story.attributes,
      photo: story.attributes.photo
        ? `${API_URL}${story.attributes.photo.data.attributes.url}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching stories:", error);
    return [];
  }
};

export const getSCTStory = async (slug) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/stories?filters[slug][$eq]=${slug}&populate=*`
    );
    const story = response.data.data[0];
    if (story) {
      return {
        id: story.id,
        ...story.attributes,
        photo: story.attributes.photo
          ? `${API_URL}${story.attributes.photo.data.attributes.url}`
          : null,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching story:", error);
    return null;
  }
};

export const getSCTArticles = async () => {
  // try {
  const response = await axios.get(`${TEST_API}/api/articles?populate=*`);
  return response.data.data;
  //.map((article) => ({
  //     id: article.id,
  //     ...article.attributes,
  //     image: article.attributes.image
  //       ? `${TEST_API}${story.attributes.image.data.attributes.url}`
  //       : null,
  //   }));
  // } catch (error) {
  //   console.error("Error fetching stories:", error);
  //   return [];
  // }
};

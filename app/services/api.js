import axios from 'axios';

const API_URL = process.env.API_URL;

export const getSCTStories = async () => {
  console.log(API_URL);
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
    console.error('Error fetching stories:', error);
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
    console.error('Error fetching story:', error);
    return null;
  }
};

export const getArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/articles?populate=*`);
    return response.data.data.map((article) => ({
      id: article.id,
      ...article.attributes,
      photo: article.attributes.photo
        ? `${API_URL}${article.attributes.photo.data[0].attributes.url}`
        : null,
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const getArticle = async (slug) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`
    );
    const article = response.data.data[0];
    if (article) {
      return {
        id: article.id,
        ...article.attributes,
        photo: article.attributes.photo
          ? `${API_URL}${article.attributes.photo.data[0].attributes.url}`
          : null,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

export const getSCTCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/courses?populate=*`);
    return response.data.data.map((course) => ({
      id: course.id,
      ...course.attributes,
    }));
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

export const getSCTCourse = async (slug) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/courses?filters[slug][$eq]=${slug}&populate=*`
    );
    const course = response.data.data[0];
    if (course) {
      return {
        id: course.id,
        ...course.attributes,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
};

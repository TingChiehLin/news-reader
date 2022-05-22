import axios from "axios";

export const getNewsData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${process.env.News_API_KEY}`;
  try {
    const newsData = await axios.get(url).then((res) => res.data);
    return newsData;
  } catch (error) {
    console.log(error);
  }
};

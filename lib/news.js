import axios from "axios";

export const getNewsData = async (searchQuery) => {
  let url = "";
  if (searchQuery?.length > 0) {
    url = `https://newsapi.org/v2/top-headlines?sources=${searchQuery}&apiKey=${process.env.News_API_KEY}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=${process.env.News_API_KEY}`;
  }

  try {
    const newsData = await axios.get(url).then((res) => res.data);
    return newsData;
  } catch (error) {
    console.log(error);
  }
};

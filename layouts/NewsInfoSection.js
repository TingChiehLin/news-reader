import NewsCard from "../components/NewsCard";

const NewsInfoSection = ({ articles }) => {
  return (
    <main className=" w-full h-full p-20">
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          imgURL={article.urlToImage}
          title={article.title}
          url={article.url}
          author={article.author}
          date={article.publishedAt}
          description={article.description}
          source={article.source}
        />
      ))}
    </main>
  );
};

export default NewsInfoSection;

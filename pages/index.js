import Head from "next/head";
import NewsInfoSection from "../layouts/NewsInfoSection";

import { getNewsData } from "../lib/news";

export async function getServerSideProps(context) {
  const source = context.query.source;
  const newsData = await getNewsData(source);
  return {
    props: { newsData },
  };
}

const Home = (props) => {
  const articles = props.newsData.articles;
  return (
    <div>
      <Head>
        <title>News Reader</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="allows you to keep up to date"></meta>
      </Head>
      <div className="flex justify-center">
        <NewsInfoSection articles={articles} />
      </div>
    </div>
  );
};

export default Home;

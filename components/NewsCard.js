import Link from "next/link";
const NewsCard = ({ imgURL, title, author, date, description }) => {
  return (
    <div className=" flex items-start gap-6 mb-8 shadow rounded">
      <img
        alt={author}
        src={imgURL}
        className="object-cover w-[300px] h-[300px] flex-2"
      />
      <div className="flex-1">
        <h1 className="font-bold">{title}</h1>
        <div>
          <h3>{author}</h3>
          <h3>{date}</h3>
        </div>
        <p>{description}</p>
        <Link href={`/`}>
          <a className="inline-block px-4 py-3 bg-orange-300 rounded">
            <p className="font-bold">READ MORE</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;

// - Main-Title: 56px
// - Sub-Title: 28px
// - News-Title: 24px
// - News-Sub-Title: 20px
// - Paragraph: 16px
// - Sub-Paragraph: 12px

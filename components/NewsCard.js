import Link from "next/link";
const NewsCard = ({
  imgURL,
  title,
  url,
  author,
  date,
  description,
  source,
}) => {
  const dateFormat = new Date(date).toLocaleDateString("en-US");

  return (
    <div className="flex items-start gap-6 mb-8 shadow rounded">
      <img
        alt={author}
        src={imgURL}
        className="object-cover w-[300px] h-[300px] flex-2"
      />
      <div className="flex-1 flex items-start justify-between flex-col h-[300px]">
        <div>
          <Link href={`${url}`}>
            <a target={"_blank"} rel="noopener noreferrer">
              <h1 className="font-bold text-2xl">{title}</h1>
            </a>
          </Link>
          <div className="flex justify-start items-center text-gray-500 text-lg my-2">
            {author && <h3 className="mr-2">{author + ","}</h3>}
            <h3>{dateFormat}</h3>
          </div>
          <p className="text-base">{description}</p>
        </div>
        {source.id && (
          <Link href={`/?source=${source.id}`}>
            <a className="inline-block px-4 py-3 bg-orange-300 rounded mb-2">
              <p className="font-bold">{source.name}</p>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsCard;

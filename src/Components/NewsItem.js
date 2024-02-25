import ABtn from "./ABtn";

function NewsItem({ title, description, imgUrl, href, author, time }) {
  return (
    <div className="overflow-hidden shadow-lg rounded-xl max-w-fit sm:max-w-full hover:shadow-2xl min-h-[330px]">
      <div className="">
        <img src={imgUrl} alt="" className="w-full h-60 sm:w-full sm:h-40" />
        <div className="p-4">
          <h3 className="font-semibold line-clamp-2">{title}</h3>
          <p className="mt-2 text-xs line-clamp-3">{description}</p>
          <p className="my-2 text-xs text-gray-500">
            By {author} on {time}
          </p>
          <ABtn href={href} />
        </div>
      </div>
    </div>
  );
}

export default NewsItem;

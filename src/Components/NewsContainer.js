import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

function NewsContainer({ newsNos, category }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=19306f9108a6441bb913a5219203b056&page=${page}&pageSize=${newsNos}&category=${category}`
      );
      setLoading(true);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
      console.log(page);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, []);

  function handleNextPage() {
    setPage(page + 1);
    fetchData(page + 1);
  }
  function handlePrevPage() {
    setPage(page - 1);

    fetchData(page);
  }
  return (
    <div className="mt-0">
      <h1 className="p-4 px-12 pt-20 mb-4 text-2xl font-semibold text-white bg-red-700 text-text-primary">
        Todays Top Headlines
      </h1>
      <div>
        {!loading && (
          <div className="grid grid-cols-1 gap-4 p-8 mx-8 align-middle rounded-3xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center">
            {/* news Items */}
            {data.articles &&
              data.articles.map((el) => (
                <div key={el.url}>
                  <NewsItem
                    title={el.title ? el.title : ""}
                    description={el.description ? el.description : ""}
                    imgUrl={
                      el.urlToImage
                        ? el.urlToImage
                        : "https://aaftonline.com/blog/wp-content/uploads/2022/02/11.jpg"
                    }
                    href={el.url}
                    author={el.author}
                    time={el.publishedAt}
                  />
                </div>
              ))}
          </div>
        )}
        {loading && <Spinner />}
      </div>

      <div className="relative flex flex-row justify-between mx-20 mb-8 bottom-4">
        <button
          className="h-8 text-center text-white bg-red-600 w-28 rounded-xl disabled:bg-red-200"
          onClick={handlePrevPage}
          disabled={page <= 1}
        >
          &#8592; Previous
        </button>
        <button
          className="h-8 text-center text-white bg-red-600 w-28 rounded-xl disabled:bg-red-200"
          onClick={handleNextPage}
          disabled={page + 1 > Math.ceil(data.totalResults / newsNos)}
        >
          Next &#8594;
        </button>
      </div>
    </div>
  );
}

export default NewsContainer;

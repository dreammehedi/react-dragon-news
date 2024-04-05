import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaLongArrowAltRight } from "react-icons/fa";
import usePosts from "../../../posts/usePosts";
import SkeletonLoader from "../../../sharedComponents/SkeletonLoader";
function Article() {
  const { fetchData, loader } = usePosts(
    "https://raw.githubusercontent.com/dreammehedi/react-dragon-news/main/public/data/news.json"
  );

  // data not found
  if (loader) {
    return <SkeletonLoader></SkeletonLoader>;
  }

  return (
    <article className="lg:col-span-2 border border-gray-50 p-4 shadow-sm rounded-sm h-fit">
      <h2 className="text-dark-2 font-semibold text-xl"> Dragon News Home</h2>
      {/* article posts */}
      <div className="flex flex-col space-y-8 mt-4">
        {fetchData.slice(1, 4).map((posts, ind) => {
          const { author, title, image_url, details, rating, total_view } =
            posts;
          return (
            <div
              key={ind}
              className="flex flex-col ring-1 ring-dark-6 rounded-sm space-y-4"
            >
              <div className="flex justify-between items-center py-2 bg-dark-7 px-4">
                <div className="flex space-x-3 items-center">
                  <img
                    className="object-cover w-[40px] h-[40px] bg-dark-6 rounded-full"
                    src={author?.img}
                    alt=""
                  />
                  <div>
                    <h4 className="font-semibold text-dark-2">
                      {author?.name}
                    </h4>
                    <p className="text-dark-4 text-sm">
                      {author?.published_date.split(" ")[0]}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3 *:text-dark-3 *:text-2xl *:cursor-pointer">
                  <CiBookmark></CiBookmark>
                  <CiShare2></CiShare2>
                </div>
              </div>
              <div className="flex flex-col p-4 space-y-2">
                <h1 className="font-bold text-xl text-dark-2">{title}</h1>
                <img
                  className="border-2 border-dashed border-dark-4 w-full h-[260px] object-cover p-2"
                  src={image_url}
                  alt=""
                />
                <p className="text-dark-3">
                  {details.length > 200 ? details.slice(0, 200) : details}...
                </p>
                <button className="flex items-center text-sm font-medium text-[#FF8C47] mr-auto">
                  Read More
                  <FaLongArrowAltRight className="ml-1"></FaLongArrowAltRight>
                </button>
                <hr />
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <span className="text-sm font-medium ml-2 text-dark-3">
                      {rating?.number}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaEye className="text-dark-3 text-xl"></FaEye>
                    <span className="text-sm font-medium ml-2 text-dark-3">
                      {total_view}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Article;

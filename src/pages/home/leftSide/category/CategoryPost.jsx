import { MdOutlineDateRange } from "react-icons/md";
import usePosts from "../../../../posts/usePosts";
function CategoryPost() {
  // posts data get
  const { loading, fetchData } = usePosts(
    "https://raw.githubusercontent.com/dreammehedi/react-dragon-news/main/public/data/news.json"
  );

  //   posts not found
  if (loading) {
    return (
      <div className="flex flex-col  rounded shadow-md w-full animate-pulse h-[300px]">
        <div className="h-48 rounded-t bg-gray-300"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
          <div className="w-full h-6 rounded bg-gray-300"></div>
          <div className="w-full h-6 rounded bg-gray-300"></div>
          <div className="w-3/4 h-6 rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="felx flex-col space-y-8">
      {fetchData.slice(3, 6).map((singlePost, ind) => {
        const { title, image_url, author } = singlePost;
        return (
          <div key={ind} className="flex flex-col space-y-4">
            <img
              className="max-h-[150px] w-full h-full object-cover rounded-sm"
              src={image_url}
              alt=""
            />
            <h1 className="text-xl font-semibold text-dark-2">{title}</h1>
            <div className="flex justify-between items-center">
              <span className="text-dark-2 font-medium">Sports</span>
              <span className="flex font-medium text-dark-4">
                <MdOutlineDateRange className="text-xl mr-1"></MdOutlineDateRange>
                {author?.published_date.split(" ")[0]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryPost;

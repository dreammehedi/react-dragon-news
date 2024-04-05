import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import usePosts from "../../posts/usePosts";
import SkeletonLoader from "../../sharedComponents/SkeletonLoader";
function News() {
  // dynamic path
  const { id } = useParams();

  const { fetchData, loading } = usePosts(
    "https://raw.githubusercontent.com/dreammehedi/react-dragon-news/main/public/data/news.json"
  );

  const newsData = fetchData.find((newsPost) => newsPost._id === id);

  if (loading) {
    return <SkeletonLoader></SkeletonLoader>;
  }

  return (
    <div className="flex flex-col space-y-3 p-4 ring-1 ring-gray-50 rounded-sm">
      <img
        className="w-full h-[400px] object-cover"
        src={newsData?.image_url}
        alt=""
      />
      <h1 className="font-bold text-xl text-dark-2">{newsData?.title}</h1>
      <p className="text-dark-3">{newsData?.details}</p>
      <button className="flex items-center text-sm font-medium text-white bg-[#FF8C47] mr-auto py-3 px-4 rounded-sm">
        <FaLongArrowAltLeft className="mr-1 text-white"></FaLongArrowAltLeft>
        All news in this category
      </button>
    </div>
  );
}

export default News;

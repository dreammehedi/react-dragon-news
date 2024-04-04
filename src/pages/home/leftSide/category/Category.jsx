import { Link } from "react-router-dom";
import usePosts from "../../../../posts/usePosts";
import SkeletonLoader from "../../../../sharedComponents/SkeletonLoader";
function Category() {
  // dynamic category
  const { fetchData, loading } = usePosts(
    "https://raw.githubusercontent.com/dreammehedi/react-dragon-news/main/public/data/categories.json"
  );

  // category not available shwo loading
  if (loading) {
    return <SkeletonLoader></SkeletonLoader>;
  }

  return (
    <ul
      className="mt-4 flex flex-col space-y-2
        text-dark-4 *:cursor-pointer"
    >
      {fetchData.map((category) => {
        const { id, name } = category;
        return (
          <li
            key={id}
            className="px-[50px] py-4  rounded-sm transition-all duration-300 ease-linear  hover:text-dark-2 hover:bg-dark-6 "
          >
            <Link to="/">{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Category;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Category() {
  // dynamic category
  const [category, setCategory] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // category data fetch
  useEffect(() => {
    setLoading(true);
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((category) => {
        setCategory(category);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // category not available shwo loading
  if (loading) {
    return (
      <h1 className="w-full h-full flex justify-center items-center bg-white text-dark-2">
        Loading.....
      </h1>
    );
  }

  return (
    <ul
      className="mt-4 flex flex-col space-y-2
        text-dark-4 *:cursor-pointer"
    >
      {category.map((category) => {
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

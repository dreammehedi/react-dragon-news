import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftAside() {
  // dynamic category
  const [category, setCategory] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // category data fetch
  useEffect(() => {
    setLoading(true);
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((category) => setCategory(category))
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
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
    <aside className="border border-gray-50 p-4 shadow-sm rounded-sm">
      <h2 className="text-dark-2 font-semibold text-xl">Category</h2>
      <ul
        className="mt-4 flex flex-col space-y-2
       ml-6 text-dark-3 *:cursor-pointer"
      >
        {category.map((category) => {
          const { id, name } = category;
          return (
            <li
              key={id}
              className="transition-all duration-300 ease-linear hover:pl-1 hover:text-primary hover:font-medium"
            >
              <Link to="/">{name}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default LeftAside;

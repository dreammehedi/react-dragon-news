import { Link } from "react-router-dom";
import DateFormate from "../../components/header/DateFormate";
import Logo from "../../components/header/Logo";
import Navbar from "../../components/navbar/Navbar";
import RightAside from "../../pages/home/rightSide/RightAside";
import CategoryPost from "../home/leftSide/category/CategoryPost";
import News from "./News";
function NewsDetailes() {
  return (
    <>
      {/* header */}
      <header className="container py-3 flex flex-col justify-center items-center space-y-3">
        <Link to="/" className="border-2 p-1 border-dashed border-gray-300">
          <Logo></Logo>
        </Link>
        <span className="font-medium text-sm text-dark-3">
          Journalism Without Fear or Favour
        </span>
        <DateFormate></DateFormate>
      </header>
      {/* navbar */}
      <Navbar></Navbar>

      {/* news detailes */}
      <section className="container my-8 grid grid-cols-2 md:grid-cols-4 justify-between gap-6">
        {/* news detailes post */}
        <div className="col-span-3 border border-gray-50 p-4 shadow-sm h-fit">
          <h2 className="text-dark-2 font-semibold text-xl">Dragon News</h2>
          <div className="flex flex-col space-y-8 mt-4">
            <News></News>
          </div>

          {/* category post */}
          <div className="container my-8">
            <h2 className="text-dark-2 font-semibold text-xl">
              Editors Insight
            </h2>

            <CategoryPost cls="grid grid-cols-1 md:grid-cols-3 justify-between gap-6 items-start !space-y-0 my-8"></CategoryPost>
          </div>
        </div>

        {/* right side */}
        <div>
          <RightAside></RightAside>
        </div>
      </section>
    </>
  );
}

export default NewsDetailes;

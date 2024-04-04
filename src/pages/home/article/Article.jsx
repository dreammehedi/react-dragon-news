import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaLongArrowAltRight } from "react-icons/fa";
function Article() {
  return (
    <article className="lg:col-span-2 border border-gray-50 p-4 shadow-sm rounded-sm">
      <h2 className="text-dark-2 font-semibold text-xl"> Dragon News Home</h2>
      {/* article posts */}
      <div className="flex flex-col space-y-8 mt-4">
        <div className="flex flex-col ring-1 ring-dark-6 rounded-sm space-y-4">
          <div className="flex justify-between items-center py-2 bg-dark-7 px-4">
            <div className="flex space-x-3 items-center">
              <img
                className="object-cover w-[40px] h-[40px] bg-dark-6 rounded-full"
                src=""
                alt=""
              />
              <div>
                <h4 className="font-semibold text-dark-2">Awlad Hossain</h4>
                <p className="text-dark-4 text-sm">2022-08-21</p>
              </div>
            </div>
            <div className="flex space-x-3 *:text-dark-3 *:text-2xl *:cursor-pointer">
              <CiBookmark></CiBookmark>
              <CiShare2></CiShare2>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-2">
            <h1 className="font-bold text-xl text-dark-2">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h1>
            <img
              className="border-2 border-dark-4 w-full h-[260px] object-contain"
              src=""
              alt=""
            />
            <p className="text-dark-3">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...{" "}
            </p>
            <button className="flex items-center text-sm font-medium text-[#FF8C47] mr-auto">
              Read More{" "}
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
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <span className="text-sm font-medium ml-2 text-dark-3">
                  4.9
                </span>
              </div>
              <div className="flex items-center">
                <FaEye className="text-dark-3 text-xl"></FaEye>
                <span className="text-sm font-medium ml-2 text-dark-3">
                  499
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;

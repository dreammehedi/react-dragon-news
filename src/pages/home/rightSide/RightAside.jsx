import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import newspaperBg from "../../../assets/bg.png";
import swimming from "../../../assets/qzone1.avif";
import classzone from "../../../assets/qzone2.avif";
import playground from "../../../assets/qzone3.avif";
import Button from "../../../sharedComponents/Button";

function RightAside() {
  return (
    <aside className="flex flex-col space-y-8 border border-gray-50 p-4 shadow-sm rounded-sm">
      {/* login */}
      <div>
        <h2 className="text-dark-2 font-semibold text-xl">Login With</h2>
        {/* login button */}
        <div className="flex flex-wrap lg:flex-col gap-6 mt-4">
          <button className="flex justify-center items-center font-medium text-dark-2 ring-1 ring-dark-4 px-6 lg:px-2 py-2 rounded-sm bg-transparent transition-all duration-300 ease-linear hover:text-primary hover:ring-primary">
            <FaGoogle className="mr-1"></FaGoogle> Login with Google
          </button>
          <button className="flex justify-center items-center font-medium text-dark-2 ring-1 ring-dark-4 px-6 lg:px-2 py-2 rounded-sm bg-transparent transition-all duration-300 ease-linear hover:text-primary hover:ring-primary">
            <FaGithub className="mr-1"></FaGithub> Login with Github
          </button>
        </div>
      </div>
      {/* find on us */}
      <div>
        <h2 className="text-dark-2 font-semibold text-xl">Find Us On</h2>
        {/* soccial link*/}
        <div className="flex flex-wrap lg:flex-col gap-6 mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=61554869056271"
            target="_blank"
          >
            <button className="flex justify-start px-6 items-center font-medium text-dark-2 ring-1 ring-dark-4 w-full py-2 rounded-sm bg-transparent transition-all duration-300 ease-linear hover:text-primary hover:ring-primary">
              <div className="p-2 text-center bg-slate-100 rounded-full mr-2">
                <FaFacebookF className="text-[#3B599C]"></FaFacebookF>
              </div>
              Facebook
            </button>
          </a>
          <a href="https://github.com/dreammehedi" target="_blank">
            <button className="flex justify-start px-6 items-center font-medium text-dark-2 ring-1 ring-dark-4 w-full py-2 rounded-sm bg-transparent transition-all duration-300 ease-linear hover:text-primary hover:ring-primary">
              <div className="p-2 text-center bg-slate-100 rounded-full mr-2">
                <FaGithub className="text-[#58A7DE]"></FaGithub>
              </div>
              Github
            </button>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <button className="flex justify-start px-6 items-center font-medium text-dark-2 ring-1 ring-dark-4 w-full py-2 rounded-sm bg-transparent transition-all duration-300 ease-linear hover:text-primary hover:ring-primary">
              <div className="p-2 text-center bg-slate-100 rounded-full mr-2">
                <FaInstagram className="text-[#D82D7E]"></FaInstagram>
              </div>
              Instagram
            </button>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <button className="flex justify-start px-6 items-center font-medium text-dark-2 ring-1 ring-dark-4 w-full py-2 rounded-sm bg-transparent transition-all duration-300 ease-linear hover:text-primary hover:ring-primary">
              <div className="p-2 text-center bg-slate-100 rounded-full mr-2">
                <FaTwitter className="text-[#D85D7E]"></FaTwitter>
              </div>
              Twitter
            </button>
          </a>
        </div>
      </div>

      {/* q zone */}
      <div className="bg-dark-7 p-4 rounded-sm">
        <h2 className="text-dark-2 font-semibold text-xl">Q-Zone</h2>
        <div className="flex flex-col space-y-8 mt-4">
          <div className="group relative border-2 border-dashed border-dark-4">
            <div className="group-hover:rotate-0 transition-all duration-300 ease-linear z-20 relative flex flex-col ring-1 ring-dark-6 bg-white rounded-sm  p-4 -rotate-6">
              <img src={swimming} alt="" />
              <h4 className="font-semibold text-dark-2 capitalize text-center mt-2">
                Swimming
              </h4>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full bg-white ring-1 ring-dark-6 rounded-sm"></div>
          </div>
          <div className="group relative border-2 border-dashed border-dark-4">
            <div className="group-hover:rotate-0 transition-all duration-300 ease-linear z-20 relative flex flex-col ring-1 ring-dark-6 bg-white rounded-sm  p-4 -rotate-6">
              <img src={classzone} alt="" />
              <h4 className="font-semibold text-dark-2 capitalize text-center mt-2">
                Class
              </h4>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full bg-white ring-1 ring-dark-6 rounded-sm"></div>
          </div>
          <div className="group relative border-2 border-dashed border-dark-4">
            <div className="group-hover:rotate-0 transition-all duration-300 ease-linear z-20 relative flex flex-col ring-1 ring-dark-6 bg-white rounded-sm  p-4 -rotate-6">
              <img src={playground} alt="" />
              <h4 className="font-semibold text-dark-2 capitalize text-center mt-2">
                Play Ground
              </h4>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full bg-white ring-1 ring-dark-6 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* amazing newspaper */}
      <div
        style={{ background: `url(${newspaperBg})` }}
        className={`p-6 lg:px-8 lg:py-12 flex flex-col justify-center items-center text-center space-y-3 rounded-sm bg-no-repeat bg-center bg-cover`}
      >
        <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
          Create an Amazing Newspaper
        </h2>
        <p className="text-white">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button cls="bg-[#D72050] py-4" name="Learn More"></Button>
      </div>
    </aside>
  );
}

export default RightAside;

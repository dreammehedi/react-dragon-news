import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../sharedComponents/Button";

function Register() {
  const { pathname } = useLocation();

  useEffect(() => {
    const changeBgLogin = () => {
      if (pathname === "/register") {
        document.querySelector("html").style.backgroundColor = "#F3F3F3";
        document.querySelector("body").style.backgroundColor = "#F3F3F3";
      } else {
        document.querySelector("html").style.backgroundColor = "";
        document.querySelector("body").style.backgroundColor = "";
      }
    };

    changeBgLogin();
    return () => {
      document.querySelector("html").style.backgroundColor = "";
      document.querySelector("body").style.backgroundColor = "";
    };
  }, [pathname]);
  return (
    <>
      <Navbar></Navbar>

      {/* login form */}
      <section className="container my-8">
        <div className="flex flex-col bg-white shadow-sm rounded-sm w-full mx-auto max-w-[650px] p-4 md:p-10">
          <h1 className="text-center mb-4 text-3xl md:text-4xl text-dark-2 font-semibold pb-6 border-b border-gray-300">
            Register your account
          </h1>
          <form className="mt-8 flex flex-col space-y-4 md:space-y-6">
            <div>
              <label
                className="block text-dark-2 font-semibold text-sm mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="w-full px-3 py-3 border bg-dark-7 text-dark-4  rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                id="name"
                type="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                className="block text-dark-2 font-semibold text-sm mb-2"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                className="w-full px-3 py-3 border bg-dark-7 text-dark-4  rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                id="photo"
                type="text"
                name="photo"
                placeholder="Enter your url"
              />
            </div>
            <div>
              <label
                className="block text-dark-2 font-semibold text-sm mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="w-full px-3 py-3 border bg-dark-7 text-dark-4  rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label
                className="block text-dark-2 font-semibold text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-3 border bg-dark-7 text-dark-4  rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="text-sm">
              <input type="checkbox" className="mr-1" />
              Accept{" "}
              <Link to="/term&condition" className="font-semibold">
                Term & Conditions
              </Link>
            </div>
            <Button cls={"bg-dark-2"} type={"submit"} name="Login"></Button>
          </form>
          <p className="text-center text-sm font-semibold mt-3">
            Already Have An Account ?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;

import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Career from "../pages/career/Career";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import NewsDetailes from "../pages/newsDetailes/NewsDetailes";
import Login from "../pages/sign/Login";
import Register from "../pages/sign/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/news/:id",
        element: <NewsDetailes></NewsDetailes>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;

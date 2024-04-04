import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Career from "../pages/career/Career";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
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
    ],
  },
]);
export default router;
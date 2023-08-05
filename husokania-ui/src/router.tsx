import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./components/errors/ErrorPage";
import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import ContactMe from "./components/contact-me/ContactMe";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <div>Hello mazafaka! This is blog page</div>,
        },
        {
          path: "/utilities",
          element: <div>Hello mazafaka!</div>,
        },
        {
          path: "/about-me",
          element: <AboutMe />,
        },
        {
          path: "/contact-me",
          element: <ContactMe />,
        },
      ],
    },
  ]);
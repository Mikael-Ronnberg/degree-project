import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewsBlog } from "../pages/NewsBlog";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import { Locations } from "../pages/Locations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/news",
    element: <NewsBlog />,
  },
]);

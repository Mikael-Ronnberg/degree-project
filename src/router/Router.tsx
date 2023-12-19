import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { NewsBlog } from "../pages/newsblog/NewsBlog";
import { Contact } from "../pages/contact/Contact";
import { About } from "../pages/about/About";
import { Locations } from "../pages/locations/Locations";
import { Admin } from "../pages/admin/Admin";

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
  {
    path: "/admin",
    element: <Admin />,
  },
]);

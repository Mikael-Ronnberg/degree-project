import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { NewsBlog } from "../pages/newsblog/NewsBlog";
import { Contact } from "../pages/contact/Contact";
import { About } from "../pages/about/About";
import { Locations } from "../pages/locations/Locations";
import { Admin } from "../pages/admin/Admin";
import { Login } from "../pages/admin/feature/Login";
import { RequireAuth } from "./RequireAuth";
import { SubmittedLocations } from "../pages/admin/admin-pages/SubmittedLocations";
import { OurEvents } from "../pages/admin/admin-pages/OurEvents";
import { OurArticles } from "../pages/admin/admin-pages/OurArticles";
import { OurLocations } from "../pages/admin/admin-pages/OurLocations";
import { CreateEvent } from "../pages/admin/admin-pages/CreateEvent";
import { WriteArticle } from "../pages/admin/admin-pages/WriteArticle";
import { HandleOurLocations } from "../pages/admin/admin-pages/HandleOurLocations";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <RequireAuth>
        <Admin />
      </RequireAuth>
    ),
  },
  {
    path: "/subLocations",
    element: (
      <RequireAuth>
        <SubmittedLocations />
      </RequireAuth>
    ),
  },
  {
    path: "/ourLocations",
    element: (
      <RequireAuth>
        <OurLocations />
      </RequireAuth>
    ),
  },
  {
    path: "/handleOurLocations",
    element: (
      <RequireAuth>
        <HandleOurLocations />
      </RequireAuth>
    ),
  },
  {
    path: "/ourArticles",
    element: (
      <RequireAuth>
        <OurArticles />
      </RequireAuth>
    ),
  },
  {
    path: "/writeArticle",
    element: (
      <RequireAuth>
        <WriteArticle />
      </RequireAuth>
    ),
  },
  {
    path: "/ourEvents",
    element: (
      <RequireAuth>
        <OurEvents />
      </RequireAuth>
    ),
  },
  {
    path: "/createEvents",
    element: (
      <RequireAuth>
        <CreateEvent />
      </RequireAuth>
    ),
  },
]);

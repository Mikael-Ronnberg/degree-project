import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { NewsBlog } from "../pages/newsblog/NewsBlog";
import { Contact } from "../pages/contact/Contact";
import { About } from "../pages/about/About";
import { Locations } from "../pages/locations/Locations";
import { Admin } from "../pages/admin/Admin";
import { Login } from "../pages/login/Login";
import { RequireAuth } from "./RequireAuth";
import { SubmittedLocations } from "../pages/submitted-locations/SubmittedLocations";
import { OurEvents } from "../pages/our-events/OurEvents";
import { OurArticles } from "../pages/our-articles/OurArticles";
import { OurLocations } from "../pages/our-locations/OurLocations";
import { CreateEvent } from "../pages/create-event/CreateEvent";
import { WriteArticle } from "../pages/write-articles/WriteArticle";
import { HandleOurLocations } from "../pages/handle-our-locations/HandleOurLocations";
import { AddUser } from "../pages/add-user/AddUser";

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
  {
    path: "/addUser",
    element: (
      <RequireAuth>
        <AddUser />
      </RequireAuth>
    ),
  },
]);

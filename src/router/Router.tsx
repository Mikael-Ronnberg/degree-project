import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Contact } from "../pages/contact/Contact";
import { About } from "../pages/about/About";
import { Locations } from "../pages/locations/Locations";
import { Admin } from "../pages/admin/Admin";
import { Login } from "../pages/login/Login";
import { SubmittedLocations } from "../pages/submitted-locations/SubmittedLocations";
import { OurEvents } from "../pages/our-events/OurEvents";
import { OurArticles } from "../pages/our-articles/OurArticles";
import { OurLocations } from "../pages/our-locations/OurLocations";
import { CreateEvent } from "../pages/create-event/CreateEvent";
import { WriteArticle } from "../pages/write-articles/WriteArticle";
import { HandleOurLocations } from "../pages/handle-our-locations/HandleOurLocations";
import { AddUser } from "../pages/add-user/AddUser";
import { Events } from "../pages/events/Events";
import { RequireAuthLayout } from "./RequireAuthLayout";
import { NormalLayout } from "./NormalLayout";
import { Articles } from "../pages/articles/Articles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NormalLayout>
        <Home />,
      </NormalLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <NormalLayout>
        <About />
      </NormalLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <NormalLayout>
        <Contact />
      </NormalLayout>
    ),
  },
  {
    path: "/locations",
    element: (
      <NormalLayout>
        <Locations />
      </NormalLayout>
    ),
  },
  {
    path: "/articles",
    element: (
      <NormalLayout>
        <Articles />
      </NormalLayout>
    ),
  },
  {
    path: "/events",
    element: (
      <NormalLayout>
        <Events />
      </NormalLayout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <RequireAuthLayout>
        <Admin />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/subLocations",
    element: (
      <RequireAuthLayout>
        <SubmittedLocations />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/ourLocations",
    element: (
      <RequireAuthLayout>
        <OurLocations />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/handleOurLocations",
    element: (
      <RequireAuthLayout>
        <HandleOurLocations />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/ourArticles",
    element: (
      <RequireAuthLayout>
        <OurArticles />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/writeArticle",
    element: (
      <RequireAuthLayout>
        <WriteArticle />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/ourEvents",
    element: (
      <RequireAuthLayout>
        <OurEvents />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/createEvents",
    element: (
      <RequireAuthLayout>
        <CreateEvent />
      </RequireAuthLayout>
    ),
  },
  {
    path: "/addUser",
    element: (
      <RequireAuthLayout>
        <AddUser />
      </RequireAuthLayout>
    ),
  },
]);

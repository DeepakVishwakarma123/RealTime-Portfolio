import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import WrappedHome from "./Components/Home";
import About from "./Components/About";
import ProjectsPage from "./Components/ProjectsPage";
import ContactPage from "./Components/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",          // parent
    element: <Layout />, // Layout has NAV + OUTLET
    children: [
      {
        index: true,   // "/" →   Home
        element: <WrappedHome />
      },
       {
        path: "home",                // → "/home"
        element: <WrappedHome />
      },
      {
        path: "about",   // "/about"
        element: <About />
      },
      {
        path: "profile", // "/profile"
        element: <ProjectsPage />
      },
        {
        path: "contact", // "/profile"
        element: <ContactPage />
      }
    ]
  }
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
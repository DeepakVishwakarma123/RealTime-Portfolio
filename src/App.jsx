import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "./HomePage";
import Contact from "./ContactPage";
import AboutPage from "./AboutPage";
import Projects from "./ProjectsPage";


const router = createBrowserRouter([
  {
    path: "/",          // parent
    element: <Layout />, // Layout has NAV + OUTLET
    children: [
      {
        index: true,   // "/" →   Home
        element: <HomePage />
      },
       {
        path: "home",                // → "/home"
        element: <HomePage />
      },
      {
        path: "about",   // "/about"
        element: <AboutPage />
      },
      {
        path: "profile", // "/profile"
        element: <Projects />
      },
        {
        path: "contact", // "/profile"
        element: <Contact />
      }
    ]
  }
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
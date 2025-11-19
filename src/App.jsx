import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import WrappedHome from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";

const router = createBrowserRouter([
  {
    path: "/",          // parent
    element: <Layout />, // Layout has NAV + OUTLET
    children: [
      {
        index: true, 
        path:"home",   // "/" → Home
        element: <WrappedHome />
      },
      {
        path: "about",   // "/about"
        element: <About />
      },
      {
        path: "profile", // "/profile"
        element: <Profile />
      }
    ]
  }
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
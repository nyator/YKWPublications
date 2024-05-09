import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Publications from "./pages/Publications.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Gallery from "./pages/Gallery.jsx";
import Team from "./pages/Team.jsx";
import NotFound from "./pages/NotFound.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Publications />,
  },
  {
    path: "/",
    element: <AboutUs />,
  },
  {
    path: "/",
    element: <Gallery />,
  },
  {
    path: "/",
    element: <Team />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

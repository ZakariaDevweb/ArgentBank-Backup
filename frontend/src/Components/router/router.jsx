import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../pages/layout";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import Connexion from "../../pages/Connexion/Connexion.jsx";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import { action as signInAction } from "../../actions/signAction.js";
import User, { loader as loaderUser } from "../../pages/User/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/user",
        element: <User />,
        loader: loaderUser,
      },
      {
        path: "/sign",
        element: <Connexion />,
        action: signInAction,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

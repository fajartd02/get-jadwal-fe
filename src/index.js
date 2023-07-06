import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import CheckIn from "./pages/CheckIn/CheckIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckIn />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

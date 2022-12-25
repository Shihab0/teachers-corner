import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Login from "../../LoginAndRegister/Login";
import Register from "../../LoginAndRegister/Register";

import Home from "../../pages/Homepage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

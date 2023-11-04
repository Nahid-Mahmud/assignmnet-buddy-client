import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error Page</div>,
    children: [
      {
        element: <Home></Home>,
        index: true
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },{
    path: '/signin',
    element: <div>Signin</div>
  }
]);

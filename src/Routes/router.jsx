import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import AllAssignMents from "../Pages/AllAssignMents/AllAssignMents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error Page</div>,
    children: [
      {
        element: <Home></Home>,
        index: true,
      },
      {
        element: <CreateAssignment></CreateAssignment>,
        path: "/createAssitnment",
      },
      {
        element: <MyAssignments></MyAssignments>,
        path: "/myAssignments",
      },
      {
        element: <SubmittedAssignments></SubmittedAssignments>,
        path: "/submittedAssignments",
      },{
        element: <AllAssignMents></AllAssignMents>,
        path:"/allAssignments"
      }
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import AllAssignMents from "../Pages/AllAssignMents/AllAssignMents";
import ViewAssitnmentDetail from "../SharedComponents/ViewAssitnmentDetail";
import UpdateAssignment from "../SharedComponents/UpdateAssignment";
import TakeAssignment from "../SharedComponents/TakeAssignment";
import GiveMark from "../SharedComponents/GiveMark";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
        path: "/createAssitnment",
      },
      {
        element: (
          <PrivateRoute>
            <MyAssignments></MyAssignments>
          </PrivateRoute>
        ),
        path: "/myAssignments",
      },
      {
        element: (
          <PrivateRoute>
            <SubmittedAssignments></SubmittedAssignments>
          </PrivateRoute>
        ),
        path: "/submittedAssignments",
      },
      {
        element: <AllAssignMents></AllAssignMents>,
        path: "/allAssignments",
        loader: ()=> fetch (`${import.meta.env.VITE_serverUrl}/assignment-count`)
      },
      {
        element: (
          <PrivateRoute>
            <ViewAssitnmentDetail></ViewAssitnmentDetail>
          </PrivateRoute>
        ),
        path: "/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverUrl}/assignment/${params.id}`),
      },
      {
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        path: "/:id/update",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverUrl}/assignment/${params.id}`),
      },
      {
        element: (
          <PrivateRoute>
            <TakeAssignment></TakeAssignment>
          </PrivateRoute>
        ),
        path: "/:id/takeAssignment",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverUrl}/assignment/${params.id}`),
      },
      {
        element: (
          <PrivateRoute>
            <GiveMark></GiveMark>
          </PrivateRoute>
        ),
        path: "/:id/giveMark",
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_serverUrl}/assignment/submitted/${
              params.id
            }`
          ),
      },
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

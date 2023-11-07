import React from "react";
import { useAuth } from "../../Hooks/useAuth";
import Loader from "../../SharedComponents/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useAuth();

  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
  }
};

export default PrivateRoute;

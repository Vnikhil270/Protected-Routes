import React from "react";
import { Navigate, Outlet, } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

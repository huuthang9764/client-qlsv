import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const user = localStorage.getItem("token") ? true : false;
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export const LoginRoute = () => {
  const user = localStorage.getItem("token") ? true : false;
  return user ? <Navigate to={"/"} /> : <Outlet />;
};

import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

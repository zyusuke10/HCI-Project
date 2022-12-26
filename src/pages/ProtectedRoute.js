import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  return <Navigate to="/landing" />;
};

export default ProtectedRoute;

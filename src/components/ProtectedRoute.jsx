import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Iltimos, avval tizimga kiring!");
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;

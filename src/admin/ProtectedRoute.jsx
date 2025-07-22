import { useAuth } from "../components/authentification/Auth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user?.role?.toLowerCase() === "admin") return <Navigate to="/dashboard" />;

  return children;
}

export default ProtectedRoute;

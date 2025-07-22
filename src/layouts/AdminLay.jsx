import Dashboard from "../adminpages/Dashboard";
import { useAuth } from "../components/authentification/Auth";
import { Navigate, Outlet } from "react-router-dom";

function AdminLay() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user?.role?.toLowerCase() !== 'admin') return <Navigate to="/collection" />;

  return (
    <>
      <Dashboard/>
    </>
  );
}

export default AdminLay;

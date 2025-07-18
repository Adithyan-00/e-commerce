import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../components/authentification/Auth';

function AuthLay() {
  const { user } = useAuth();

 
  if (user) {
    return <Navigate to="/collection" replace />;
  }

  return <Outlet />;
}

export default AuthLay;

import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); 

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;

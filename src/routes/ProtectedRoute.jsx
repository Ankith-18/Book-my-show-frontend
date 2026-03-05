// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from './routePaths';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ requiredRole }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Or your custom loader component
  }

  // Not logged in
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // Check for required role
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  // Authorized
  return <Outlet />;
};

export default ProtectedRoute;
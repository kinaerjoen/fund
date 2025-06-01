import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from '../../api/auth';

const PrivateRoute = () => {
  const isAuthenticated = checkAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute; 
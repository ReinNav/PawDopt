import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { loginStatus } from '../redux/store';
import ErrorScreen from '../pages/ErrorScreen';

interface ProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const isLoggedIn = useSelector(loginStatus);

  if (!isLoggedIn) {
    return <ErrorScreen />;
  }

  return <Component />;
};

export default ProtectedRoute;

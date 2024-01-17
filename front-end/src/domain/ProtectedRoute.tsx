import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ErrorScreen from '../pages/ErrorScreen';

interface ProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <ErrorScreen />;
  }

  return <Component />;
};

export default ProtectedRoute;

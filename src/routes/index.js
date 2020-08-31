import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthContext, { AuthProvider } from '../contexts/auth';

import AuthRoutes from './auth';
import AppRoutes from './app';

const Routes = () => {
  const { signed } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <AuthProvider>{signed ? <AppRoutes /> : <AuthRoutes />}</AuthProvider>
    </NavigationContainer>
  );
};

export default Routes;

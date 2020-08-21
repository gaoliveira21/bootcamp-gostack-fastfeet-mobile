import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './auth';
import AppRoutes from './app';

const Routes = () => {
  const signed = true;

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;

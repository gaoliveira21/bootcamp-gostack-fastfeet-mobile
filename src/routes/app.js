/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          elevation: 4,
          shadowOpacity: 0.8,
          height: 70,
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 14,
        },
        inactiveTintColor: '#999999',
        activeTintColor: '#7D40E7',
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="menu" color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-circle" color={color} size={size} />;
          },
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;

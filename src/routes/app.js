/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../pages/Order/Dashboard';
import Profile from '../pages/Profile';

import Details from '../pages/Order/Details';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OrderRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          title: 'Detalhes da encomenda',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Order"
        component={OrderRoutes}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="menu" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-circle" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;

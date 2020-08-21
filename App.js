/* eslint-disable react/style-prop-object */
import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}

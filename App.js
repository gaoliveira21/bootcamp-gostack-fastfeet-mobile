/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// import SignIn from './src/pages/SignIn';
import Dashboard from './src/pages/Dashboard';

export default function App() {
  return (
    <>
      <Dashboard />
      <StatusBar style="inverted" />
    </>
  );
}

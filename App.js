/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// import SignIn from './src/pages/SignIn';
import Profile from './src/pages/Profile';

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style="inverted" />
    </>
  );
}

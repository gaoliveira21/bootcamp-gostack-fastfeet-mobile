/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import SignIn from './src/pages/SignIn';

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="light" />
    </>
  );
}

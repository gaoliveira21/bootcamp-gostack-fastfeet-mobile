import React, { createContext } from 'react';

import api from '../services/api';

const AuthContext = createContext({
  signed: false,
  signIn: () => {},
  user: {},
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  async function signIn(access_id) {
    // await api.post('/sessions', { access_id });
    console.log(access_id);
  }

  return (
    <AuthContext.Provider value={{ signed: false, signIn, user: {} }}>
      {children}
    </AuthContext.Provider>
  );
};

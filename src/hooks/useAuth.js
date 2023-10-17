import React from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

function useAuth() {
  const [user, setUser] = React.useState(null);

  async function signIn(email, password) {
    setUser('login');
  }

  return {
    user,
    signIn
  }
}

export { useAuth };